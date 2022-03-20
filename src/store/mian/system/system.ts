/*
 * @Author: cuibx
 * @Date: 2022-03-18 16:12:18
 * @Description: 系统数据
 */
import { Module } from 'vuex'
import { IRootState } from '@/store/types'
import { ISystemState } from './type'
import { getPageListData } from '@/service/main/system/system'
import { toUpperCaseByFirst } from '@/utils/business'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0
    }
  },
  mutations: {
    changeUserList(state, userList: any[]) {
      state.userList = userList
    },
    changeUserCount(state, userCount: number) {
      state.userCount = userCount
    },
    changeRoleList(state, roleList: any[]) {
      state.roleList = roleList
    },
    changeRoleCount(state, roleCount: number) {
      state.roleCount = roleCount
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => state[`${pageName}List`]
    },
    pageListCount(state) {
      return (pageName: string) => state[`${pageName}Count`]
    }
  },
  actions: {
    async getPageListAction({ commit }, { pageName, queryInfo }: any) {
      // 1. 获取url
      let pageUrl = ''
      switch (pageName) {
        case 'user':
          pageUrl = '/users/list'
          break
        case 'role':
          pageUrl = '/role/list'
          break

        default:
          break
      }

      // 2.对页面发送请求
      const pageResult = await getPageListData(pageUrl, queryInfo)

      // 3.对数据进行处理
      const { list, totalCount } = pageResult.data

      commit(`change${toUpperCaseByFirst(pageName)}List`, list)
      commit(`change${toUpperCaseByFirst(pageName)}Count`, totalCount)
    }
  }
}

export default systemModule
