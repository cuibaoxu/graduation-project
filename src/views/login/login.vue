<!--
 * @Author: cuibx
 * @Date: 2022-02-08 14:43:05
 * @LastEditTime: 2022-03-06 11:30:08
 * @Description: login
-->
<template>
  <div class="login">
    <login-panel />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginPanel from './components/login-panel.vue'

export default defineComponent({
  components: {
    LoginPanel
  },
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('~@/assets/img/login-bg.svg');
}
</style>
