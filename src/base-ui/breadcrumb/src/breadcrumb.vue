<!--
 * @Author: cuibx
 * @Date: 2022-03-17 17:33:04
 * @Description: 面包屑组件
-->
<template>
  <div class="break-crumb">
    <el-breadcrumb class="content" separator="/">
      <template v-for="item in breakcrumbs" :key="item.name">
        <el-breadcrumb-item :to="{}">{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IBreadCrumb } from '../type'

export default defineComponent({
  name: 'BreadCrumb',
  props: {
    breakcrumbs: {
      type: Array as PropType<IBreadCrumb[]>,
      default: () => []
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
