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
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
    }
  },
  mutations: {
    changeUsersList(state, usersList: any[]) {
      state.usersList = usersList
    },
    changeUsersCount(state, usersCount: number) {
      state.usersCount = usersCount
    },
    changeRoleList(state, roleList: any[]) {
      state.roleList = roleList
    },
    changeRoleCount(state, roleCount: number) {
      state.roleCount = roleCount
    },
    changeGoodsList(state, goodsList: any[]) {
      state.goodsList = goodsList
    },
    changeGoodsCount(state, goodsCount: number) {
      state.goodsCount = goodsCount
    },
    changeMenuList(state, menuList: any[]) {
      state.menuList = menuList
    },
    changeMenuCount(state, menuCount: number) {
      state.menuCount = menuCount
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
      const pageUrl = `/${pageName}/list`

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
