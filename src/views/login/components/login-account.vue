<!--
 * @Author: cuibx
 * @Date: 2022-03-06 11:44:44
 * @Description: 账号密码登录组件
-->
<template>
  <div class="login-account">
    <el-form label-width="80px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号：" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm } from 'element-plus'
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/account-config'

export default defineComponent({
  setup() {
    const account = reactive({
      name: '',
      password: ''
    })

    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = () => {
      formRef.value?.validate((valid) => {
        valid && console.log('真正登录')
      })
    }
    return {
      account,
      rules,
      formRef,
      loginAction
    }
  }
})
</script>

<style scoped></style>
