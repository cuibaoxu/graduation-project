<!--
 * @Author: cuibx
 * @Date: 2022-03-01 17:27:10
 * @Description: Do not edit
-->
<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

/**
 * defineComponent 的作用是类型推导/限制
 */
export default defineComponent({
  name: 'MyApp',
  props: {
    name: {
      type: String
    }
  },
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped></style>
