<!--
 * @Author: cuibx
 * @Date: 2022-03-15 00:35:48
 * @Description: 用户页面
-->
<template>
  <div class="user">
    <page-search :formConfig="formConfig" />
    <el-table :data="userList" border style="width: 100%">
      <el-table-column prop="id" label="id" min-width="180" sortable />
      <el-table-column prop="realname" label="姓名" min-width="180" />
      <el-table-column prop="cellphone" label="手机号" min-width="180" />
    </el-table>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store/index'

import PageSearch from '@/components/page-search'

import { formConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch
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
    const userCount = computed(() => store.state.system.userCount)
    return {
      formConfig,
      userList,
      userCount
    }
  }
})
</script>

<style scoped lang="less">
.user {
  padding: 20px 20px;
}
</style>
