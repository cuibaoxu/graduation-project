/*
 * @Author: cuibx
 * @Date: 2022-02-08 15:17:33
 * @LastEditTime: 2022-03-18 16:22:01
 * @Description: vuex
 */
import { createStore, Store, useStore as userVuexStore } from 'vuex'

import login from './login/login'
import system from './mian/system/system'

import { IRootState, IStoreType } from './types'

const store = createStore<IRootState>({
  state() {
    return {
      name: '',
      age: 23
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login,
    system
  }
})

export const setupStore = () => {
  store.dispatch('login/loadLocalLogin')
}

export const useStore = (): Store<IStoreType> => {
  return userVuexStore()
}

export default store
