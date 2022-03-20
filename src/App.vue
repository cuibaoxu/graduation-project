<!--
 * @Author: cuibx
 * @Date: 2022-02-07 15:25:24
 * @LastEditTime: 2022-03-20 10:21:58
 * @Description: 首页
-->
<template>
  <div id="app">
    <el-config-provider :locale="locale">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import zhCn from 'element-plus/lib/locale/lang/zh-cn'

export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    return {
      locale: zhCn
    }
  }
})
</script>

<style lang="less"></style>
