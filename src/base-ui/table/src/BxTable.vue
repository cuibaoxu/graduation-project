<!--
 * @Author: cuibx
 * @Date: 2022-03-19 21:44:49
 * @Description: elementPlus二次封装table
-->
<template>
  <div class="bx-table">
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="header-handler"> </slot>
        </div>
      </slot>
    </div>

    <el-table :data="listData" border style="width: 100%" empty-text="暂无数据" @selection-change="handleSelectionChange">
      <el-table-column v-if="showSelectColumn" type="selection" align="center" width="50" />
      <el-table-column v-if="showIndexColumn" type="index" label="序号" align="center" width="80" />
      <template v-for="item in columns" :key="item.prop">
        <el-table-column v-bind="item" align="center">
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer">
      <slot name="footer">
        <el-pagination
          v-model:currentPage="currentPage4"
          v-model:page-size="pageSize4"
          :page-sizes="[100, 200, 300, 400]"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { tableParameter } from '../types'

export default defineComponent({
  name: 'BxTable',
  props: {
    title: {
      type: String,
      default: ''
    },
    listData: {
      type: Array,
      required: true
    },
    columns: {
      type: Array as PropType<tableParameter[]>,
      required: true
    },
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    showSelectColumn: {
      type: Boolean,
      default: false
    }
  },
  emits: ['selectionChange'],
  setup(props, { emit }) {
    const handleSelectionChange = (value: any) => {
      emit('selectionChange', value)
    }
    return { handleSelectionChange }
  }
})
</script>

<style scoped lang="less">
.header {
  display: flex;
  height: 45px;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;
  .title {
    font-size: 20px;
    font-weight: 700;
  }
  .handler {
    align-items: center;
  }
}

.footer {
  margin-top: 15px;
  .el-pagination {
    justify-content: end;
  }
}
</style>
