/*
 * @Author: cuibx
 * @Date: 2022-03-15 00:36:38
 * @Description: 系统管理 -> 角色管理
 */
const role = () => import('@/views/main/system/role/role.vue')
export default {
  path: '/main/system/role',
  name: 'role',
  component: role,
  children: []
}
