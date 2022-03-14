/*
 * @Author: cuibx
 * @Date: 2022-03-15 00:37:38
 * @Description: 系统管理 -> 部门管理
 */
const department = () => import('@/views/main/system/department/department.vue')
export default {
  path: '/main/system/department',
  name: 'department',
  component: department,
  children: []
}
