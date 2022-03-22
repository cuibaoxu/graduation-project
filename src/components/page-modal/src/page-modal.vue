<!--
 * @Author: cuibx
 * @Date: 2022-03-21 10:09:56
 * @Description: 增加/删除panel
-->
<template>
  <div class="page-modal">
    <el-dialog v-model="dialogVisible" title="新建用户" width="30%" center destroy-on-close>
      <bx-form v-bind="modalConfig" v-model="formData"></bx-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import BxForm from '@/base-ui/form'

export default defineComponent({
  components: {
    BxForm
  },
  props: {
    modalConfig: {
      type: Object,
      required: true
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const dialogVisible = ref(false)
    const formData = ref({})

    watch(
      () => props.defaultInfo,
      (newValue) => {
        props.modalConfig.formItems.forEach((item: any) => {
          formData.value[item.field] = newValue[item.field]
        })
      }
    )

    return {
      dialogVisible,
      formData
    }
  }
})
</script>

<style scoped></style>
