<!--
 * @Author: cuibx
 * @Date: 2022-03-15 00:36:38
 * @Description: 权限页
-->
<template>
  <div class="role">
    <page-search :formConfig="formConfig" />
    <page-content :contentTableConfig="contentTableConfig" pageName="role"></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import pageContent from '@/components/page-content/src/page-content.vue'
import { contentTableConfig } from './config/content.config'
import { formConfig } from './config/search.config'

export default defineComponent({
  components: { pageContent },
  name: 'role',
  setup() {
    return {
      contentTableConfig,
      formConfig
    }
  }
})
</script>

<style scoped></style>
