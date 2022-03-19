/*
 * @Author: cuibx
 * @Date: 2022-02-08 14:47:41
 * @LastEditTime: 2022-03-17 17:24:26
 * @Description: 路由配置
 */
import { createRouter, createWebHashHistory } from 'vue-router'
// import { mapMenusToRoutes } from '@/utils/map-menus'
import { firstMenu } from '@/utils/map-menus'
// 路由类型
import type { RouteRecordRaw } from 'vue-router'
import localCache from '@/utils/cache'
// import store from '@/store'

// 路由配置
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue')
    // children: [] -> 根据userMenus来决定
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/not-found/not-found.vue')
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

    // const userMenus = (store.state as any).login.userMenus
    // const routes = mapMenusToRoutes(userMenus)

    if (!token) {
      return '/login'
    }

    if (to.path === '/main') {
      return firstMenu.url
    }
  }
})

export default router
