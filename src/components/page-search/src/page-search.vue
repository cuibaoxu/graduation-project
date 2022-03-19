<!--
 * @Author: cuibx
 * @Date: 2022-03-18 15:50:54
 * @Description: Do not edit
-->
<template>
  <div class="page-search">
    <bx-form v-bind="formConfig" v-model="formDate">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button type="primary" icon="Search">搜索</el-button>
          <el-button icon="RefreshLeft">重置</el-button>
        </div>
      </template>
    </bx-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import BxForm from '@/base-ui/form'

export default defineComponent({
  props: {
    formConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    BxForm
  },
  setup() {
    const formDate = ref({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })
    return {
      formDate
    }
  }
})
</script>

<style scoped>
.header {
  color: red;
}
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
