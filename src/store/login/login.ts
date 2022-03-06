/*
 * @Author: cuibx
 * @Date: 2022-03-06 15:27:35
 * @Description: 全局状态管理
 */
import { Module } from 'vuex'
import { ILoginState } from './types'
import { IRootState } from '../types'

const loginMoudle: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  mutations: {
    // setUserInfo(state, payload) {
    //   state.userInfo = payload
    // }
  },
  getters: {},
  actions: {
    accountLoginAction({ commit }, payload: any) {
      console.log('登录', payload)
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log('手机登录', payload)
    }
  }
}

export default loginMoudle
