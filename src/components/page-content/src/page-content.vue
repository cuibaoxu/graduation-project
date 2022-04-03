<!--
 * @Author: cuibx
 * @Date: 2022-03-20 10:38:22
 * @Description: 表格与分页器封装
-->
<template>
  <div class="page-table">
    <bx-table
      v-bind="contentTableConfig"
      :listCount="dataCount"
      @selectionChange="selectionChange"
      :listData="dataList"
      v-model:page="pageInfo"
    >
      <!-- header中的插槽 -->
      <template #header-handler>
        <el-button v-if="isCreate" type="primary" @click="handleBtnClick"> 新建 </el-button>
        <!-- <el-button type="primary" icon="Refresh"></el-button> -->
      </template>
      <!-- 列中插槽 -->
      <template #createAt="scope">
        <span>{{ timeFormat(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ timeFormat(scope.row.updateAt) }}</span>
      </template>
      <template #handler="scope">
        <div class="handle-btns">
          <el-button v-if="isUpdate" type="text" icon="Edit" @click="handleBtnClick(scope.row)">编辑</el-button>
          <el-button v-if="isDelete" type="text" icon="Delete" @click="handleDeleteClick(scope.row)">删除</el-button>
        </div>
      </template>
      <!-- 在page-content中动态插入剩余的插槽 -->
      <template v-for="item in otherPropSlots" :key="item.prop" #[item.slotName]="scope">
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </bx-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
import { useStore } from '@/store'
import { timeFormat } from '@/utils/business'
import { reduceZero, multiplication } from '@/utils/maths'
import { usePermission } from '@/hook/usePermission'
import { ElMessageBox, ElMessage } from 'element-plus'

import BxTable from '@/base-ui/table'

export default defineComponent({
  name: 'page-table',
  components: {
    BxTable
  },
  props: {
    contentTableConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  emits: ['handleClick'],
  setup(props, { emit }) {
    const store = useStore()

    // 0.获取操作权限
    const isCreate = usePermission(props.pageName, 'create')
    const isDelete = usePermission(props.pageName, 'delete')
    const isQuery = usePermission(props.pageName, 'query')
    const isUpdate = usePermission(props.pageName, 'update')

    // 1.双向绑定pageInfo
    const pageInfo = ref({ currentPage: 0, pageSize: 10 })
    watch(pageInfo, () => getPageData())

    // 2.发送网络请求
    const getPageData = (queryInfo: any = {}) => {
      // if (!isQuery) return
      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: multiplication(reduceZero(pageInfo.value.currentPage, 1), pageInfo.value.pageSize, 0),
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
    }

    getPageData()

    const selectionChange = () => {
      console.log(111)
    }

    // 3.从vuex获取数据
    const dataList = computed(() => store.getters['system/pageListData'](props.pageName))
    const dataCount = computed(() => store.getters['system/pageListCount'](props.pageName))

    // 4.获取其他的插槽名称
    const otherPropSlots = props.contentTableConfig?.columns.filter((item: any) => {
      const exclude = ['createAt', 'updateAt', 'handler']
      return !exclude.includes(item.slotName)
    })

    // 5.删除操作
    const handleDeleteClick = (item: any) => {
      ElMessageBox.confirm('您确定删除这条数据吗？', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          store.dispatch('system/deletePageDataAction', {
            pageName: props.pageName,
            id: item.id
          })
        })
        .catch(() => {
          ElMessage({
            type: 'info',
            message: '取消操作'
          })
        })
    }

    // 6.新增/编辑
    const handleBtnClick = (item?: any) => {
      emit('handleClick', item)
    }

    return {
      dataList,
      timeFormat,
      getPageData,
      dataCount,
      pageInfo,
      otherPropSlots,
      isCreate,
      isDelete,
      isUpdate,
      handleDeleteClick,
      handleBtnClick,
      selectionChange
    }
  }
})
</script>

<style scoped lang="less">
.page-table {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
/deep/.el-table .el-table__cell {
  z-index: initial !important;
}
</style>
