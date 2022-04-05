/*
 * @Author: cuibx
 * @Date: 2022-03-06 15:27:35
 * @Description: 全局状态管理
 */
import { Module } from 'vuex'

import { accountLoginRequest, requestUserInfoById, requestUserMenusByRoleId } from '@/service/login/login'
import localCache from '@/utils/cache'
import router from '@/router/index'
import { mapMenusToRoutes, mapMenusToPermission } from '@/utils/map-menus'

import { IAccount } from '@/service/login/type'
import { ILoginState } from './types'
import { IRootState } from '../types'
import { ElMessage } from 'element-plus'

const loginMoudle: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: [],
      permissions: []
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus

      // userMenus => /main/children
      const routes = mapMenusToRoutes(userMenus)

      // 将routes => router.main.children
      routes.forEach((route) => {
        router.addRoute('main', route)
      })

      // 获取用户按钮权限
      const permissions = mapMenusToPermission(userMenus)
      state.permissions = permissions
    }
  },
  getters: {},
  actions: {
    async accountLoginAction({ commit, dispatch }, payload: IAccount) {
      try {
        // 1.实现登录逻辑
        const loginResult = await accountLoginRequest(payload)
        const { id, token } = loginResult.data
        commit('changeToken', token)
        localCache.setCache('token', token)

        // 发送初始化请求
        dispatch('getInitialDataAction', null, { root: true })

        // 2.请求用户信息
        const { data } = await requestUserInfoById(id)
        commit('changeUserInfo', data)
        localCache.setCache('userInfo', data)

        // // 3.请求用户菜单
        const userMenusResult = await requestUserMenusByRoleId(id)
        const userMenus = userMenusResult.data
        commit('changeUserMenus', userMenus)
        localCache.setCache('userMenus', userMenus)

        // 4.跳转到首页
        router.push('/main')
      } catch (err: any) {
        ElMessage.error('账号或密码错误！')
      }
    },
    // 免登录时将localstorang里的数据写入到vuex里
    loadLocalLogin({ commit, dispatch }) {
      const token = localCache.getCache('token')
      token && commit('changeToken', token)

      dispatch('getInitialDataAction', null, { root: true })

      const userInfo = localCache.getCache('userInfo')
      userInfo && commit('changeUserInfo', userInfo)

      const userMenus = localCache.getCache('userMenus')
      userMenus && commit('changeUserMenus', userMenus)
    }
  }
}

export default loginMoudle
