<!--
 * @Author: cuibx
 * @Date: 2022-03-15 00:36:38
 * @Description: 权限页
-->
<template>
  <div class="role">
    <page-search :formConfig="formConfig" @resetBtnClick="handleResetClick" @queryBtnClick="handleQueryClick" />
    <page-content @handleClick="handleClick" :contentTableConfig="contentTableConfig" pageName="role"></page-content>
    <page-modal :modalConfig="modalConfig" ref="pageModalRef" :defaultInfo="defaultInfo" pageName="role" :otherInfo="otherInfo">
      <el-tree
        class="menu-tree"
        :check-strictly="false"
        ref="elTreeRef"
        :data="menus"
        show-checkbox
        node-key="id"
        @check="handleMenuCheckChange"
        :props="{ label: 'name', children: 'children' }"
      >
      </el-tree>
    </page-modal>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, nextTick } from 'vue'
import { useStore } from '@/store'
import { getMenuChecks } from '@/utils/map-menus'

import pageContent from '@/components/page-content/src/page-content.vue'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'
import { formConfig } from './config/search.config'
import PageModal from '@/components/page-modal'

import { usePageSearch } from '@/hook/usePageSearch'
import { usePageModal } from '@/hook/usePageModal'
import { ElTree } from 'element-plus'

export default defineComponent({
  components: { pageContent, PageModal },
  name: 'role',
  setup() {
    // 1.处理pageModal的hook函数
    const elTreeRef = ref<InstanceType<typeof ElTree>>()
    const editCallback = (item1: boolean, item2?: any) => {
      if (item2) {
        const leafKeys = getMenuChecks(item2.menuList)
        nextTick(() => {
          elTreeRef.value?.setCheckedKeys(leafKeys, false)
        })
      }
    }

    const [handleResetClick, handleQueryClick] = usePageSearch()
    const [pageModalRef, defaultInfo, handleClick] = usePageModal(editCallback)

    const store = useStore()
    const menus = computed(() => store.state.entireMenu)

    const otherInfo = ref({})
    const handleMenuCheckChange = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys
      const halfCheckedKeys = data2.halfCheckedKeys

      const menuList = [...checkedKeys, ...halfCheckedKeys]
      otherInfo.value = { menuList }
    }

    return {
      contentTableConfig,
      formConfig,
      modalConfig,
      pageModalRef,
      defaultInfo,
      handleClick,
      handleResetClick,
      handleQueryClick,
      menus,
      otherInfo,
      handleMenuCheckChange,
      elTreeRef
    }
  }
})
</script>

<style scoped>
.menu-tree {
  margin-left: 25px;
}
</style>
