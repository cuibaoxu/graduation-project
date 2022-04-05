<!--
 * @Author: cuibx
 * @Date: 2022-03-15 00:39:26
 * @Description: 商品详情页
-->
<template>
  <div class="goods">
    <page-search :formConfig="searchFormConfig" @resetBtnClick="handleResetClick" @queryBtnClick="handleQueryClick" />
    <page-table @handleClick="handleClick" ref="pageContentRef" :contentTableConfig="contentTableConfig" pageName="goods">
      <template #status="scope">
        <el-button size="small" plain :type="GOODS_STETUS_ABLE[scope.row.statu]">{{ GOODS_STETUS[scope.row.statu] }}</el-button>
      </template>
      <template #imageSlot="scope">
        <el-image
          style="width: 50px; height: 50px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
          :initial-index="4"
          :teleported="false"
          fit="cover"
        />
      </template>
      <template #oldPrice="scope">
        {{ `￥${scope.row.oldPrice}` }}
      </template>
      <template #newPrice="scope">
        {{ `￥${scope.row.newPrice}` }}
      </template>
    </page-table>
    <!-- 增加/编辑弹出框 -->
    <page-modal :modalConfig="modalConfig" :defaultInfo="defaultInfo" ref="pageModalRef" pageName="goods"></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageTable from '@/components/page-content'
import PageSearch from '@/components/page-search'

import { contentTableConfig } from './config/content.config'
import { searchFormConfig } from './config/search.config'
import { modalConfig } from './config/modal.config'
import { GOODS_STETUS, GOODS_STETUS_ABLE } from '@/enums/product/goods'

import { usePageSearch } from '@/hook/usePageSearch'
import { usePageModal } from '@/hook/usePageModal'

export default defineComponent({
  name: 'goods',
  components: { PageTable, PageSearch },
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()

    // 3.调用hook获取公共变量和函数
    const [pageModalRef, defaultInfo, handleClick] = usePageModal()
    return {
      searchFormConfig,
      contentTableConfig,
      GOODS_STETUS,
      GOODS_STETUS_ABLE,
      pageContentRef,
      handleResetClick,
      handleQueryClick,
      pageModalRef,
      defaultInfo,
      handleClick,
      modalConfig
    }
  }
})
</script>

<style scoped></style>
