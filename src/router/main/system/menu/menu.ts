/*
 * @Author: cuibx
 * @Date: 2022-03-15 00:38:00
 * @Description: 系统管理 -> 菜单管理
 */
const menu = () => import('@/views/main/system/menu/menu.vue')
export default {
  path: '/main/system/menu',
  name: 'menu',
  component: menu,
  children: []
}
