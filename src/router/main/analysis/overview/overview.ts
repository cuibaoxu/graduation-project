/*
 * @Author: cuibx
 * @Date: 2022-03-15 00:42:00
 * @Description: 系统总览 -> 核心技术
 */
const overview = () => import('@/views/main/analysis/overview/overview.vue')
export default {
  path: '/main/analysis/overview',
  name: 'overview',
  component: overview,
  children: []
}
