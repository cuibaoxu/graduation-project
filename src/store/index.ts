/*
 * @Author: cuibx
 * @Date: 2022-02-08 15:17:33
 * @LastEditTime: 2022-03-22 22:49:41
 * @Description: vuex
 */
import { createStore, Store, useStore as userVuexStore } from 'vuex'

import login from './login/login'
import system from './mian/system/system'

import { getPageListData } from '@/service/main/system/system'

import { IRootState, IStoreType } from './types'

const store = createStore<IRootState>({
  state() {
    return {
      name: '',
      age: 23,
      entireDepartment: [],
      entireRole: []
    }
  },
  mutations: {
    changeEntireDepartment(state, list) {
      state.entireDepartment = list
    },
    changeEntireRole(state, list) {
      state.entireRole = list
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

      // 2.保存数据
      commit('changeEntireDepartment', departmentList)
      commit('changeEntireRole', roleList)
    }
  },
  modules: {
    login,
    system
  }
})

export const setupStore = () => {
  store.dispatch('login/loadLocalLogin')
  store.dispatch('getInitialDataAction')
}

export const useStore = (): Store<IStoreType> => {
  return userVuexStore()
}

export default store
