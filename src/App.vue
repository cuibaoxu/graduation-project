<!--
 * @Author: cuibx
 * @Date: 2022-02-07 15:25:24
 * @LastEditTime: 2022-02-08 02:05:44
 * @Description: 首页
-->
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="测试SSH" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  }
})
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
