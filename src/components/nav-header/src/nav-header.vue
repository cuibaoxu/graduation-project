<!--
 * @Author: cuibx
 * @Date: 2022-03-13 23:48:02
 * @Description: 面包屑组件
-->

<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="handleFoldClick">
      <expand v-if="isFold" />
      <fold v-else />
    </el-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    return {
      handleFoldClick,
      isFold
    }
  }
})
</script>

<style lang="less" scoped>
.nav-header {
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
}
</style>
