/*
 * @Author: cuibx
 * @Date: 2022-03-20 10:32:31
 * @Description: 表格配置
 */

export const contentTableConfig = {
  title: '权限列表',
  columns: [
    { prop: 'name', label: '角色名称', minWidth: '100' },
    // { prop: 'Id', label: 'id', minWidth: '100' },
    { prop: 'createAt', label: '创建时间', minWidth: '250', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', minWidth: '250', slotName: 'updateAt' },
    { label: '操作', minWidth: '120', slotName: 'handler' }
  ],
  // 是否显示序号
  showIndexColumn: true,
  // 是否显示多选框
  showSelectColumn: false
}
