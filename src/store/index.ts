/*
 * @Author: cuibx
 * @Date: 2022-02-08 15:17:33
 * @LastEditTime: 2022-03-23 12:47:51
 * @Description: vuex
 */
import { createStore, Store, useStore as userVuexStore } from 'vuex'

import login from './login/login'
import system from './mian/system/system'
import dashboard from './mian/analysis/dashboard'

import { getPageListData } from '@/service/main/system/system'

import { IRootState, IStoreType } from './types'

const store = createStore<IRootState>({
  state() {
    return {
      name: '',
      age: 23,
      entireDepartment: [],
      entireRole: [],
      entireMenu: []
    }
  },
  mutations: {
    changeEntireDepartment(state, list) {
      state.entireDepartment = list
    },
    changeEntireRole(state, list) {
      state.entireRole = list
    },
    changeEntireMenu(state, list) {
      state.entireMenu = list
    }
  },
  getters: {},
  actions: {
    async getInitialDataAction({ commit }) {
      // 1.请求部门和角色数据
      const {
        data: { list: departmentList }
      } = await getPageListData('/department/list', { offset: 0, size: 1000 })
      const {
        data: { list: roleList }
      } = await getPageListData('/role/list', { offset: 0, size: 1000 })

      const {
        data: { list: menuList }
      } = await getPageListData('/menu/list', {})

      // 2.保存数据
      commit('changeEntireDepartment', departmentList)
      commit('changeEntireRole', roleList)
      commit('changeEntireMenu', menuList)
    }
  },
  modules: {
    login,
    system,
    dashboard
  }
})

export const setupStore = () => {
  store.dispatch('login/loadLocalLogin')
  // store.dispatch('getInitialDataAction')
}

export const useStore = (): Store<IStoreType> => {
  return userVuexStore()
}

export default store
