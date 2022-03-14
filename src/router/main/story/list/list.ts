/*
 * @Author: cuibx
 * @Date: 2022-03-15 00:40:27
 * @Description: 随便聊聊 -> 故事列表
 */
const list = () => import('@/views/main/story/list/list.vue')
export default {
  path: '/main/story/list',
  name: 'list',
  component: list,
  children: []
}
