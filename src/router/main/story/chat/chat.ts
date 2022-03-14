/*
 * @Author: cuibx
 * @Date: 2022-03-15 00:40:15
 * @Description: 随便聊聊 -> 你的故事
 */
const chat = () => import('@/views/main/story/chat/chat.vue')
export default {
  path: '/main/story/chat',
  name: 'chat',
  component: chat,
  children: []
}
