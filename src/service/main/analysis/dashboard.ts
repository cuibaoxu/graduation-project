/*
 * @Author: cuibx
 * @Date: 2022-03-23 12:50:57
 * @Description: Do not edit
 */
import bxRequest from '../../index'

enum AnalysisAPI {
  amountList = '/goods/amount/list',
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  goodsSaleTop10 = '/goods/sale/top10',
  goodsAddressSale = '/goods/address/sale'
}

export const getAmountList = () => {
  return bxRequest.get({
    url: AnalysisAPI.amountList
  })
}

export const getCategoryGoodsCount = () => {
  return bxRequest.get({
    url: AnalysisAPI.categoryGoodsCount
  })
}

export const getCategoryGoodsSale = () => {
  return bxRequest.get({
    url: AnalysisAPI.categoryGoodsSale
  })
}

export const getCategoryGoodsFavor = () => {
  return bxRequest.get({
    url: AnalysisAPI.categoryGoodsFavor
  })
}

export const getGoodsSaleTop10 = () => {
  return bxRequest.get({
    url: AnalysisAPI.goodsSaleTop10
  })
}

export const getGoodsAddressSale = () => {
  return bxRequest.get({
    url: AnalysisAPI.goodsAddressSale
  })
}
