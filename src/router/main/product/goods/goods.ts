/*
 * @Author: cuibx
 * @Date: 2022-03-15 00:39:26
 * @Description: 商品中心 -> 商品信息
 */
const goods = () => import('@/views/main/product/goods/goods.vue')
export default {
  path: '/main/product/goods',
  name: 'goods',
  component: goods,
  children: []
}
