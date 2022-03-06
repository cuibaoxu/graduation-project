<!--
 * @Author: cuibx
 * @Date: 2022-03-01 18:17:08
 * @Description: 登陆面板
-->

<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs stretch type="border-card" class="demo-tabs">
      <el-tab-pane>
        <template #label>
          <span>
            <el-icon><user-filled /></el-icon>账号密码登录
          </span>
        </template>
        账号密码
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span>
            <el-icon><iphone /></el-icon>手机号登陆
          </span>
        </template>
        手机号
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
.login-panel {
  width: 320px;
  .title {
    text-align: center;
  }
}
</style>
