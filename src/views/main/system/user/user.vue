<!--
 * @Author: cuibx
 * @Date: 2022-03-15 00:35:48
 * @Description: 用户页面
-->
<template>
  <div class="user">
    <page-search :formConfig="formConfig" @resetBtnClick="handleResetClick" @queryBtnClick="handleQueryClick" />
    <page-table @handleClick="handleClick" ref="pageContentRef" :contentTableConfig="contentTableConfig" pageName="users">
      <template #enable="scope">
        <el-button size="small" plain :type="USER_STETUS_ABLE[scope.row.enable]">{{ USER_STETUS[scope.row.enable] }}</el-button>
      </template>
    </page-table>
    <!-- 增加/编辑弹出框 -->
    <page-modal :defaultInfo="defaultInfo" ref="pageModalRef" :modalConfig="modalConfigRef"></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

import PageModal from '@/components/page-modal'
import PageSearch from '@/components/page-search'
import PageTable from '@/components/page-content'

import { formConfig } from './config/search.config'
import { modalConfig } from './config/modal.config'
import { contentTableConfig } from './config/content.config'
import { USER_STETUS_ABLE, USER_STETUS } from '@/enums/system/user'

import { usePageModal } from '@/hook/usePageModal'
import { usePageSearch } from '@/hook/usePageSearch'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageTable,
    PageModal
  },
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()

    //pageModal相关的hook逻辑
    // 1.处理密码的逻辑
    const newCallback = (isHidden: boolean) => {
      const passwordItem = modalConfig.formItems?.find((item) => item.field === 'password')
      passwordItem!.isHidden = isHidden
    }

    // 2.动态添加部门和角色列表
    const store = useStore()
    const modalConfigRef = computed(() => {
      const departmentItem = modalConfig.formItems.find((item) => item.field === 'departmentId')
      departmentItem!.options = store.state.entireDepartment.map((item) => ({ label: item.name, value: item.id }))

      const roleItem = modalConfig.formItems.find((item) => item.field === 'roleId')
      roleItem!.options = store.state.entireRole.map((item) => ({ label: item.name, value: item.id }))
      return modalConfig
    })

    // 3.调用hook获取公共变量和函数
    const [pageModalRef, defaultInfo, handleClick] = usePageModal(newCallback)

    return {
      formConfig,
      contentTableConfig,
      modalConfigRef,
      handleResetClick,
      handleQueryClick,
      pageContentRef,
      USER_STETUS_ABLE,
      USER_STETUS,
      handleClick,
      pageModalRef,
      defaultInfo
    }
  }
})
</script>

<style scoped lang="less"></style>
