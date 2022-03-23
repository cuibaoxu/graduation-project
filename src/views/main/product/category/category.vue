<!--
 * @Author: cuibx
 * @Date: 2022-03-23 16:33:28
 * @Description: Do not edit
-->
<template>
  <div class="category">
    <page-search :formConfig="searchFormConfig" @queryBtnClick="handleQueryClick" @resetBtnClick="handleResetClick" />
    <page-table ref="pageContentRef" pageName="category" :contentTableConfig="contentTableConfig"></page-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageSearch from '@/components/page-search'
import PageTable from '@/components/page-content'

import { usePageSearch } from '@/hook/usePageSearch'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'

export default defineComponent({
  name: 'category',
  components: {
    PageSearch,
    PageTable
  },
  setup() {
    const [pageContentRef, handleQueryClick, handleResetClick] = usePageSearch()

    return {
      searchFormConfig,
      contentTableConfig,
      pageContentRef,
      handleQueryClick,
      handleResetClick
    }
  }
})
</script>

<style scoped></style>
