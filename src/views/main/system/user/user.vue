<!--
 * @Author: cuibx
 * @Date: 2022-03-15 00:35:48
 * @Description: 用户页面
-->
<template>
  <div class="user">
    <page-search :formConfig="formConfig" />
    <div class="content">
      <bx-table
        :title="title"
        :columns="columns"
        :listData="userList"
        :showIndexColumn="showIndexColumn"
        :showSelectColumn="showSelectColumn"
        @selectionChange="selectionChange"
      >
        <!-- header中的插槽 -->
        <template #header-handler>
          <el-button type="primary">新建用户</el-button>
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
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store/index'

import PageSearch from '@/components/page-search'
import BxTable from '@/base-ui/table'

import { formConfig } from './config/search.config'
import { timeFormat } from '@/utils/business'
import { USER_STETUS, USER_STETUS_ABLE } from '@/enums/user'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    BxTable
  },
  setup() {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    const userList = computed(() => store.state.system.userList)
    // const userCount = computed(() => store.state.system.userCount)

    const title = '用户列表'

    const columns = [
      { prop: 'name', label: '用户名', minWidth: '100' },
      { prop: 'realname', label: '真实姓名', minWidth: '100' },
      { prop: 'cellphone', label: '电话号码', minWidth: '120' },
      { prop: 'enable', label: '状态', minWidth: '100', slotName: 'status' },
      {
        prop: 'createAt',
        label: '创建时间',
        minWidth: '250',
        slotName: 'createAt'
      },
      { prop: 'updateAt', label: '更新时间', minWidth: '250', slotName: 'updateAt' },
      { label: '操作', minWidth: '120', slotName: 'handle' }
    ]
    // 是否显示序号
    const showIndexColumn = true
    // 是否显示多选框
    const showSelectColumn = true

    return {
      formConfig,
      userList,
      title,
      columns,
      timeFormat,
      USER_STETUS,
      USER_STETUS_ABLE,
      showIndexColumn,
      showSelectColumn
    }
  }
})
</script>

<style scoped lang="less">
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
