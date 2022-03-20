<!--
 * @Author: cuibx
 * @Date: 2022-03-18 15:50:54
 * @Description: search组件
-->
<template>
  <div class="page-search">
    <bx-form v-bind="formConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button type="primary" icon="Search" @click="handleQueryClick">搜索</el-button>
          <el-button icon="RefreshLeft" @click="handleResetClick">重置</el-button>
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
  emits: ['resetBtnClick', 'queryBtnClick'],
  setup(props, { emit }) {
    // 1.双向绑定的属性由配置文件决定
    const formItems = props.formConfig?.formItems ?? []
    const formOriginData: any = {}
    formItems.forEach((item: any) => {
      formOriginData[item.field] = ''
    })

    const formData = ref(formOriginData)

    // 2.用户点击重置
    const handleResetClick = () => {
      formData.value = formOriginData
      emit('resetBtnClick')
    }

    // 3.用户点击搜索
    const handleQueryClick = () => {
      emit('queryBtnClick', formData.value)
    }
    return {
      formData,
      handleResetClick,
      handleQueryClick
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
