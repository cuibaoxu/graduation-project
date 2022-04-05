/*
 * @Author: cuibx
 * @Date: 2022-03-15 00:43:15
 * @Description: 系统总览 -> 商品统计
 */
const dashboard = () => import('@/views/main/product/dashboard/dashboard.vue')
export default {
  path: '/main/product/dashboard',
  name: 'dashboard',
  component: dashboard,
  children: []
}
