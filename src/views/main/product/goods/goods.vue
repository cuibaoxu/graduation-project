<!--
 * @Author: cuibx
 * @Date: 2022-03-15 00:39:26
 * @Description: 商品详情页
-->
<template>
  <div class="goods">
    <page-search :formConfig="searchFormConfig" @resetBtnClick="handleResetClick" @queryBtnClick="handleQueryClick" />
    <page-table ref="pageContentRef" :contentTableConfig="contentTableConfig" pageName="goods">
      <template #status="scope">
        <el-button size="small" plain :type="GOODS_STETUS_ABLE[scope.row.status]">{{ GOODS_STETUS[scope.row.status] }}</el-button>
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageTable from '@/components/page-content'
import PageSearch from '@/components/page-search'

import { contentTableConfig } from './config/content.config'
import { searchFormConfig } from './config/search.config'
import { GOODS_STETUS, GOODS_STETUS_ABLE } from '@/enums/product/goods'

import { usePageSearch } from '@/hook/usePageSearch'

export default defineComponent({
  name: 'goods',
  components: { PageTable, PageSearch },
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
    return {
      searchFormConfig,
      contentTableConfig,
      GOODS_STETUS,
      GOODS_STETUS_ABLE,
      pageContentRef,
      handleResetClick,
      handleQueryClick
    }
  }
})
</script>

<style scoped></style>
