/*
 * @Author: cuibx
 * @Date: 2022-02-08 14:47:41
 * @LastEditTime: 2022-02-08 15:06:26
 * @Description: router
 */
import { createRouter, createWebHashHistory } from 'vue-router'
// 路由类型
import type { RouteRecordRaw } from 'vue-router'

// 路由配置
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    component: () => import('@/views/main/main.vue')
  }
]
// 创建router实例
const router = createRouter({
  // 注册
  routes,
  // 路由模式
  history: createWebHashHistory()
})

export default router
