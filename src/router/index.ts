/*
 * @Author: cuibx
 * @Date: 2022-02-08 14:47:41
 * @LastEditTime: 2022-03-06 22:52:17
 * @Description: router
 */
import { createRouter, createWebHashHistory } from 'vue-router'
// 路由类型
import type { RouteRecordRaw } from 'vue-router'
import localCache from '@/utils/cache'

// 路由配置
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
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

// 校验是否登录
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    if (!token) {
      return '/login'
    }
  }
})

export default router
