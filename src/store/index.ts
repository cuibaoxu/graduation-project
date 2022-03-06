/*
 * @Author: cuibx
 * @Date: 2022-02-08 15:17:33
 * @LastEditTime: 2022-03-06 15:50:43
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

export default store
