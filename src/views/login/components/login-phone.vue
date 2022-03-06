<!--
 * @Author: cuibx
 * @Date: 2022-03-06 11:44:44
 * @Description: 手机号登录组件
-->
<template>
  <div class="login-account">
    <el-form label-width="80px" :rules="rules" :model="phone">
      <el-form-item label="手机号：" prop="number">
        <el-input v-model="phone.number" />
      </el-form-item>
      <el-form-item label="验证码：" prop="code">
        <div class="get-code">
          <el-input v-model="phone.code" />
          <el-button type="primary" class="code-button">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { rules } from '../config/phone-config'

export default defineComponent({
  setup() {
    const phone = reactive({
      number: '',
      code: ''
    })
    return {
      phone,
      rules
    }
  }
})
</script>

<style lang="less" scoped>
.get-code {
  display: flex;
  .code-button {
    margin-left: 8px;
  }
}
</style>
