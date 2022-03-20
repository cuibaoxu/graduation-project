/*
 * @Author: cuibx
 * @Date: 2022-03-18 16:47:48
 * @Description: 系统管理service层
 */
import bxRequest from '../../index'
import { IDataType } from '../../types'

export const getPageListData = (pageUrl: string, queryInfo: any) => {
  return bxRequest.post<IDataType>({
    url: pageUrl,
    data: queryInfo
  })
}
