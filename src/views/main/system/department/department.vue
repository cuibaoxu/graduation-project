<!--
 * @Author: cuibx
 * @Date: 2022-03-23 17:06:57
 * @Description: 部门管理
-->
<template>
  <div class="department">
    <page-search :formConfig="searchFormConfig" @resetBtnClick="handleResetClick" @queryBtnClick="handleQueryClick" />
    <page-table
      pageName="department"
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      @handleClick="handleClick"
    ></page-table>
    <page-modal ref="pageModalRef" :defaultInfo="defaultInfo" :modalConfig="modalConfigRef" pageName="department"></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

import PageSearch from '@/components/page-search'
import PageTable from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { usePageSearch } from '@/hook/usePageSearch'
import { usePageModal } from '@/hook/usePageModal'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

export default defineComponent({
  name: 'department',
  components: {
    PageSearch,
    PageTable,
    PageModal
  },
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()

    // modal配置信息
    const store = useStore()

    const modalConfigRef = computed(() => {
      const parentIdItem = modalConfig.formItems?.find((item) => item.field === 'parentId')
      parentIdItem!.options = store.state.entireDepartment.map((item) => {
        return { label: item.name, value: item.id }
      })
      return modalConfig
    })

    // 处理modal的hook
    const [pageModalRef, defaultInfo, handleClick] = usePageModal()

    return {
      searchFormConfig,
      contentTableConfig,
      modalConfigRef,
      pageContentRef,
      handleQueryClick,
      handleResetClick,
      defaultInfo,
      pageModalRef,
      handleClick
    }
  }
})
</script>

<style scoped></style>
