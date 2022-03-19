/*
 * @Author: cuibx
 * @Date: 2022-03-15 21:49:59
 * @Description: 菜单映射path路径
 */
import { IBreadCrumb } from '@/base-ui/breadcrumb'
import { RouteRecordRaw } from 'vue-router'

let firstMenu: any = null

// 将菜单集合里的路径映射到路由上
export const mapMenusToRoutes = (userMenus: any[]): RouteRecordRaw[] => {
  const routes: RouteRecordRaw[] = []

  // 1.先去加载默认所有的routes
  const allRoutes: RouteRecordRaw[] = []
  /**
   * @description: webpack文件加载方法
   * @param {String} 路径
   * @param {Boolean} 是否递归查找
   * @param {String} 正则表达式，匹配规则
   * @return {*} 返回符合规则的路由
   */
  const routeFiles = require.context('../router/main', true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })

  // 2.根据菜单获取需要添加的routes
  const _recurseGetRoute = (menus: any[]) => {
    menus.forEach((menu) => {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        route && routes.push(route)
        if (!firstMenu) {
          firstMenu = menu
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    })
  }
  _recurseGetRoute(userMenus)
  return routes
}

// 返回面包屑
export const pathMapBreadcrumbs = (userMenus: any[], currentPath: string) => {
  const breakcrumbs: IBreadCrumb[] = []
  pathMapToMenu(userMenus, currentPath, breakcrumbs)
  return breakcrumbs
}

// 返回路径
export function pathMapToMenu(userMenus: any[], currentPath: string, breadcrumb?: IBreadCrumb[]): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        breadcrumb?.push({ name: menu.name })
        breadcrumb?.push({ name: findMenu.name })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

export { firstMenu }
