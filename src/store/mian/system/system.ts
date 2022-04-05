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
      currentPage: 1,
      pageSize: 10,
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0,
      categoryList: [],
      categoryCount: 0,
      departmentList: [],
      departmentCount: 0
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
    },
    changeCategoryCount(state, totalCount: number) {
      state.categoryCount = totalCount
    },
    changeCategoryList(state, roleList: any) {
      state.categoryList = roleList
    },
    changeDepartmentCount(state, totalCount: number) {
      state.departmentCount = totalCount
    },
    changeDepartmentList(state, departmentList: any) {
      state.departmentList = departmentList
    },
    changePage(state, payload) {
      state.currentPage = payload.currentPage
      state.pageSize = payload.pageSize
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => state[`${pageName}List`]
    },
    pageListCount(state) {
      return (pageName: string) => state[`${pageName}Count`]
    },
    getCurrentPage(state) {
      return () => state.currentPage
    },
    getPageSize(state) {
      return () => state.pageSize
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
    async deletePageDataAction({ commit }, payload: any) {
      // 1.获取pageName和id
      const { pageName, id } = payload
      const pageUrl = `/${pageName}?id=${id}`
      // 2.调用删除
      try {
        await deletePageDataById(pageUrl)
        ElMessage({
          type: 'success',
          message: '删除成功！'
        })
      } catch (error) {
        ElMessage({
          type: 'error',
          message: '删除失败'
        })
      }
      // 3.重新请求数据
      commit('changePage', {
        currentPage: 1,
        pageSize: 10
      })
    },
    // 增
    async createPageDataAction({ commit }, payload: any) {
      // 1.创建数据的请求
      const { pageName, newData } = payload
      const pageUrl = `/${pageName}`
      try {
        await createPageData(pageUrl, newData)
        ElMessage({
          type: 'success',
          message: '创建成功'
        })
      } catch (err) {
        ElMessage({
          type: 'error',
          message: '创建失败'
        })
      }
      // 2.请求最新的数据
      commit('changePage', {
        currentPage: 1,
        pageSize: 10
      })
    },
    // 改
    async editPageDataAction({ commit }, payload: any) {
      // 1.编辑数据的请求
      const { pageName, editData, id } = payload
      const pageUrl = `/${pageName}`
      try {
        await editPageData(pageUrl, { id, ...editData })
        ElMessage({
          type: 'success',
          message: '修改成功！'
        })
      } catch (error) {
        ElMessage({
          type: 'error',
          message: '修改失败'
        })
      }
      // 2.请求最新的数据
      commit('changePage', {
        currentPage: 1,
        pageSize: 10
      })
    }
  }
}

export default systemModule
