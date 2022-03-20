<!--
 * @Author: cuibx
 * @Date: 2022-03-15 00:38:00
 * @Description: 菜单页
-->
<template>
  <div class="menu">
    <page-table ref="pageContentRef" :contentTableConfig="contentTableConfig" pageName="menu"> </page-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { contentTableConfig } from './config/content.config'
import PageTable from '@/components/page-content'

export default defineComponent({
  name: 'Menu',
  components: { PageTable },
  setup() {
    return { contentTableConfig }
  }
})
</script>

<style scoped></style>
