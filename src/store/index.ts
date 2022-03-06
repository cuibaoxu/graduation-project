/*
 * @Author: cuibx
 * @Date: 2022-02-08 15:17:33
 * @LastEditTime: 2022-03-06 23:02:32
 * @Description: vuex
 */
import { createStore } from 'vuex'

import login from './login/login'

import { IRootState } from './types'

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
    login
  }
})

export const setupStore = () => {
  store.dispatch('login/loadLocalLogin')
}

export default store
