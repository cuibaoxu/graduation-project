<!--
 * @Author: cuibx
 * @Date: 2022-02-07 15:25:24
 * @LastEditTime: 2022-02-28 18:13:44
 * @Description: 首页
-->
<template>
  <div id="app">
    <h2>{{ $store.state.name }}</h2>
    <router-link to="/login">登录</router-link>
    <router-link to="/main">主页</router-link>
    <router-view></router-view>

    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <el-button>中文</el-button>
    <el-color-picker v-model="color1" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ref } from 'vue'

export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    let color1 = ref('#666666')
    return {
      color1
    }
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
