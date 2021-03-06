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

    <el-table :data="listData" border style="width: 100%" @selection-change="handleSelectionChange" v-bind="childrenProps">
      <el-table-column v-if="showSelectColumn" type="selection" align="center" width="50" />
      <el-table-column v-if="showIndexColumn" type="index" label="序号" align="center" width="80" />
      <template v-for="item in columns" :key="item.prop">
        <el-table-column v-bind="item" align="center" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer" v-if="showFooter">
      <slot name="footer">
        <el-pagination
          :currentPage="page.currentPage"
          :page-size="page.pageSize"
          :page-sizes="[10, 20, 30, 40]"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
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
import { useStore } from '@/store'

export default defineComponent({
  name: 'Table',
  props: {
    title: {
      type: String,
      default: ''
    },
    listData: {
      type: Array,
      required: true
    },
    listCount: {
      type: Number,
      default: 0
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
    },
    page: {
      type: Object,
      default: () => ({ currentPage: 1, pageSize: 10 })
    },
    childrenProps: {
      type: Object,
      default: () => ({})
    },
    showFooter: {
      type: Boolean,
      default: true
    }
  },
  emits: ['selectionChange', 'update:page'],
  setup(props, { emit }) {
    const store = useStore()

    const handleSelectionChange = (value: any) => {
      emit('selectionChange', value)
    }

    const handleCurrentChange = (currentPage: number) => {
      store.commit('system/changePage', { ...props.page, currentPage })
    }
    const handleSizeChange = (pageSize: number) => {
      store.commit('system/changePage', { ...props.page, pageSize })
    }
    return { handleSelectionChange, handleSizeChange, handleCurrentChange }
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
