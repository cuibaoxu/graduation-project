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
      <template #status="scope">
        <el-button size="small" plain :type="USER_STETUS_ABLE[scope.row.enable]">{{ USER_STETUS[scope.row.enable] }}</el-button>
      </template>
      <template #createAt="scope">
        <span>{{ timeFormat(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ timeFormat(scope.row.updateAt) }}</span>
      </template>
      <template #handle>
        <div class="handle-btns">
          <el-button type="text" icon="Edit">编辑</el-button>
          <el-button type="text" icon="Delete">删除</el-button>
        </div>
      </template>
      <!-- <template #header :title="title"></template> -->
    </bx-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
import { useStore } from '@/store'
import BxTable from '@/base-ui/table'
import { timeFormat } from '@/utils/business'
import { USER_STETUS_ABLE, USER_STETUS } from '@/enums/user'

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

    // 双向绑定pageInfo
    const pageInfo = ref({ currentPage: 0, pageSize: 10 })
    watch(pageInfo, () => getPageData())

    // 发送网络请求
    const getPageData = (queryInfo: any = {}) => {
      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: pageInfo.value.currentPage * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
    }

    getPageData()

    // 从vuex获取数据
    const dataList = computed(() => store.getters['system/pageListData'](props.pageName))
    const dataCount = computed(() => store.getters['system/pageListCount'](props.pageName))

    return {
      dataList,
      timeFormat,
      USER_STETUS_ABLE,
      USER_STETUS,
      getPageData,
      dataCount,
      pageInfo
    }
  }
})
</script>

<style scoped>
.page-table {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
