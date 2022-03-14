/*
 * @Author: cuibx
 * @Date: 2022-03-15 00:39:03
 * @Description: 商品中心 -> 商品类别
 */
const category = () => import('@/views/main/product/category/category.vue')
export default {
  path: '/main/product/category',
  name: 'category',
  component: category,
  children: []
}
