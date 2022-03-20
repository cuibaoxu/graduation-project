/*
 * @Author: cuibx
 * @Date: 2022-03-20 10:32:31
 * @Description: 表格配置
 */

export const contentTableConfig = {
  title: '用户列表',
  columns: [
    { prop: 'id', label: 'id', minWidth: '100' },
    { prop: 'name', label: '用户名', minWidth: '100' },
    { prop: 'realname', label: '真实姓名', minWidth: '100' },
    { prop: 'cellphone', label: '电话号码', minWidth: '120' },
    { prop: 'enable', label: '状态', minWidth: '100', slotName: 'enable' },
    { prop: 'createAt', label: '创建时间', minWidth: '250', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', minWidth: '250', slotName: 'updateAt' },
    { label: '操作', minWidth: '120', slotName: 'handler' }
  ],
  // 是否显示序号
  showIndexColumn: false,
  // 是否显示多选框
  showSelectColumn: true
}
