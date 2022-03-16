<!--
 * @Author: cuibx
 * @Date: 2022-03-15 00:35:48
 * @Description: Do not edit
-->
<template>
  <div class="user">
    <bx-form v-bind="formConfig" />
    <div class="content">user</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BxForm from '@/base-ui/form'
import { formConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    BxForm
  },
  setup() {
    return {
      formConfig
    }
  }
})
</script>

<style scoped lang="less">
.user {
  padding: 20px 20px;
}
</style>
