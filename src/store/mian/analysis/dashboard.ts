/*
 * @Author: cuibx
 * @Date: 2022-03-23 12:43:12
 * @Description: Do not edit
 */
import { Module } from 'vuex'

import {
  getAmountList,
  getCategoryGoodsCount,
  getCategoryGoodsSale,
  getCategoryGoodsFavor,
  getGoodsSaleTop10,
  getGoodsAddressSale
} from '@/service/main/analysis/dashboard'

import { IDashboardState } from './types'
import { IRootState } from '../../types'

const dashboardModule: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state() {
    return {
      topPanelDatas: [],
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      goodsSaleTop10: [],
      goodsAddressSale: []
    }
  },
  mutations: {
    changeTopPanelDatas(state, list) {
      state.topPanelDatas = list
    },
    changeCategoryGoodsCount(state, list) {
      state.categoryGoodsCount = list
    },
    changeCategoryGoodsSale(state, list) {
      state.categoryGoodsSale = list
    },
    changeCategoryGoodsFavor(state, list) {
      state.categoryGoodsFavor = list
    },
    changeGoodsSaleTop10(state, list) {
      state.goodsSaleTop10 = list
    },
    changeGoodsAddressSale(state, list) {
      state.goodsAddressSale = list
    }
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      const { data: resultTopPanelDatas } = await getAmountList()
      commit('changeTopPanelDatas', resultTopPanelDatas)

      const { data: goodsCount } = await getCategoryGoodsCount()
      commit('changeCategoryGoodsCount', goodsCount)

      const { data: goodsSale } = await getCategoryGoodsSale()
      commit('changeCategoryGoodsSale', goodsSale)

      const { data: goodsFavor } = await getCategoryGoodsFavor()
      commit('changeCategoryGoodsFavor', goodsFavor)

      const { data: saleTop10 } = await getGoodsSaleTop10()
      commit('changeGoodsSaleTop10', saleTop10)

      const { data: addressSasle } = await getGoodsAddressSale()
      commit('changeGoodsAddressSale', addressSasle)
    }
  }
}

export default dashboardModule
