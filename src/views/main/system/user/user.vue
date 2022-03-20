<!--
 * @Author: cuibx
 * @Date: 2022-03-15 00:35:48
 * @Description: 用户页面
-->
<template>
  <div class="user">
    <page-search :formConfig="formConfig" @resetBtnClick="handleResetClick" @queryBtnClick="handleQueryClick" />
    <page-table ref="pageContentRef" :contentTableConfig="contentTableConfig" pageName="user"></page-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import PageSearch from '@/components/page-search'
import PageTable from '@/components/page-content'

import { formConfig } from './config/search.config'
import { timeFormat } from '@/utils/business'
import { USER_STETUS, USER_STETUS_ABLE } from '@/enums/user'
import { contentTableConfig } from './config/content.config'

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
      USER_STETUS,
      USER_STETUS_ABLE,
      contentTableConfig,
      handleResetClick,
      handleQueryClick,
      pageContentRef
    }
  }
})
</script>

<style scoped lang="less"></style>
