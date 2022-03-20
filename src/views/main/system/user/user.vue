<!--
 * @Author: cuibx
 * @Date: 2022-03-15 00:35:48
 * @Description: 用户页面
-->
<template>
  <div class="user">
    <page-search :formConfig="formConfig" @resetBtnClick="handleResetClick" @queryBtnClick="handleQueryClick" />
    <page-table ref="pageContentRef" :contentTableConfig="contentTableConfig" pageName="users">
      <template #enable="scope">
        <el-button size="small" plain :type="USER_STETUS_ABLE[scope.row.enable]">{{ USER_STETUS[scope.row.enable] }}</el-button>
      </template>
    </page-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageSearch from '@/components/page-search'
import PageTable from '@/components/page-content'

import { formConfig } from './config/search.config'
import { timeFormat } from '@/utils/business'
import { contentTableConfig } from './config/content.config'
import { USER_STETUS_ABLE, USER_STETUS } from '@/enums/system/user'

import { usePageSearch } from '@/hook/usePageSearch'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageTable
  },
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()

    return {
      formConfig,
      timeFormat,
      contentTableConfig,
      handleResetClick,
      handleQueryClick,
      pageContentRef,
      USER_STETUS_ABLE,
      USER_STETUS
    }
  }
})
</script>

<style scoped lang="less"></style>
