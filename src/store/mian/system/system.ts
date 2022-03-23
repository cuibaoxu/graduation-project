/*
 * @Author: cuibx
 * @Date: 2022-03-18 16:12:18
 * @Description: 系统数据
 */
import { Module } from 'vuex'
import { IRootState } from '@/store/types'
import { ISystemState } from './type'
import { getPageListData, deletePageDataById, createPageData, editPageData } from '@/service/main/system/system'
import { toUpperCaseByFirst } from '@/utils/business'
import { ElMessage } from 'element-plus'

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
    // 查
    async getPageListAction({ commit }, { pageName, queryInfo }: any) {
      // 1. 获取url
      const pageUrl = `/${pageName}/list`

      // 2.对页面发送请求
      const pageResult = await getPageListData(pageUrl, queryInfo)

      // 3.对数据进行处理
      const { list, totalCount } = pageResult.data

      commit(`change${toUpperCaseByFirst(pageName)}List`, list)
      commit(`change${toUpperCaseByFirst(pageName)}Count`, totalCount)
    },
    // 删
    async deletePageDataAction({ dispatch }, payload: any) {
      // 1.获取pageName和id
      const { pageName, id } = payload
      const pageUrl = `/${pageName}/${id}`
      // 2.调用删除
      const { data } = await deletePageDataById(pageUrl)
      if (data === '删除角色成功~' || data === '删除用户成功~') {
        ElMessage({
          type: 'success',
          message: '删除成功！'
        })
      } else {
        ElMessage({
          type: 'error',
          message: data
        })
      }
      // 3.重新请求数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    // 增
    async createPageDataAction({ dispatch }, payload: any) {
      // 1.创建数据的请求
      const { pageName, newData } = payload
      const pageUrl = `/${pageName}`
      const { data } = await createPageData(pageUrl, newData)
      if (data === '创建用户成功~' || data === '创建角色成功~') {
        ElMessage({
          type: 'success',
          message: '创建成功！'
        })
      } else {
        ElMessage({
          type: 'error',
          message: data
        })
      }
      // 2.请求最新的数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    // 改
    async editPageDataAction({ dispatch }, payload: any) {
      // 1.编辑数据的请求
      const { pageName, editData, id } = payload
      const pageUrl = `/${pageName}/${id}`
      const { data } = await editPageData(pageUrl, editData)
      if (data === '修改用户成功~' || data === '更新角色成功~') {
        ElMessage({
          type: 'success',
          message: '修改成功！'
        })
      } else {
        ElMessage({
          type: 'error',
          message: data
        })
      }
      // 2.请求最新的数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
  }
}

export default systemModule
