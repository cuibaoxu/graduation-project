<!--
 * @Author: cuibx
 * @Date: 2022-03-16 15:21:23
 * @Description: 表单组件
-->
<template>
  <div class="bx-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item v-if="!item.isHidden" :label="item.label" :rules="item.rules" :style="itemStyle">
              <!-- 判断输入框 -->
              <template v-if="item.type === 'input' || item.type === 'password'">
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  :model-value="modelValue[item.field]"
                  @update:modelValue="handleValueChange($event, item.field)"
                ></el-input>
              </template>
              <!-- 判断下拉框 -->
              <template v-else-if="item.type === 'select'">
                <el-select
                  :model-value="modelValue[item.field]"
                  @update:modelValue="handleValueChange($event, item.field)"
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                >
                  <el-option v-for="option in item.options" :key="option.value" :label="option.label" :value="option.value">
                  </el-option>
                </el-select>
              </template>
              <!-- 单选框 -->
              <template v-else-if="item.type === 'radio'">
                <el-radio-group :model-value="modelValue[item.field]" @update:modelValue="handleValueChange($event, item.field)">
                  <el-radio v-for="option in item.options" :key="option.value" :label="option.value">{{ option.label }}</el-radio>
                </el-radio-group>
              </template>
              <!-- 判断时间选择器 -->
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  :model-value="modelValue[item.field]"
                  @update:modelValue="handleValueChange($event, item.field)"
                  style="width: 100%"
                  v-bind="item.otherOptions"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import { IFormItem } from '../types'

export default defineComponent({
  name: 'bxForm',
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    // 输入区域宽度
    labelWidth: {
      type: String,
      default: '100px'
    },
    // 输入区域间距
    itemStyle: {
      type: Object,
      default: () => ({ padding: '10px 40px' })
    },
    // 输入区域响应式布局
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6, // >1920 4个
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    // const formDate = ref({ ...props.modelValue })
    // watch(
    //   formDate,
    //   (newValue) => {
    //     emit('update:modelValue', newValue)
    //   },
    //   {
    //     deep: true
    //   }
    // )

    const handleValueChange = (value: any, field: string) => {
      emit('update:modelValue', { ...props.modelValue, [field]: value })
    }
    return {
      handleValueChange
    }
  }
})
</script>

<style scoped lang="less"></style>
