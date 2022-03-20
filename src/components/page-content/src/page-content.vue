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
        <el-button type="primary">新建</el-button>
        <!-- <el-button type="primary" icon="Refresh"></el-button> -->
      </template>
      <!-- 列中插槽 -->
      <template #createAt="scope">
        <span>{{ timeFormat(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ timeFormat(scope.row.updateAt) }}</span>
      </template>
      <template #handler>
        <div class="handle-btns">
          <el-button type="text" icon="Edit">编辑</el-button>
          <el-button type="text" icon="Delete">删除</el-button>
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
import BxTable from '@/base-ui/table'
import { timeFormat } from '@/utils/business'
import { reduceZero, multiplication } from '@/utils/maths'

export default defineComponent({
  name: 'page-table',
  components: {
    BxTable
  },
  props: {
    contentTableConfig: {
      type: Object,
      require: true
    },
    pageName: {
      type: String,
      require: true
    }
  },
  setup(props) {
    const store = useStore()

    // 1.双向绑定pageInfo
    const pageInfo = ref({ currentPage: 0, pageSize: 10 })
    watch(pageInfo, () => getPageData())

    // 2.发送网络请求
    const getPageData = (queryInfo: any = {}) => {
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

    // 3.从vuex获取数据
    const dataList = computed(() => store.getters['system/pageListData'](props.pageName))
    const dataCount = computed(() => store.getters['system/pageListCount'](props.pageName))

    // 4.获取其他的插槽名称
    const otherPropSlots = props.contentTableConfig?.columns.filter((item: any) => {
      const exclude = ['createAt', 'updateAt', 'handler']
      return !exclude.includes(item.slotName)
    })

    return {
      dataList,
      timeFormat,
      getPageData,
      dataCount,
      pageInfo,
      otherPropSlots
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
