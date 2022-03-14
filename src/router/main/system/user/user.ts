/*
 * @Author: cuibx
 * @Date: 2022-03-15 00:35:48
 * @Description: 系统管理 -> 用户管理
 */
const user = () => import('@/views/main/system/user/user.vue')
export default {
  path: '/main/system/user',
  name: 'user',
  component: user,
  children: []
}
