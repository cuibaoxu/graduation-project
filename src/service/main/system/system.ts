/*
 * @Author: cuibx
 * @Date: 2022-03-18 16:47:48
 * @Description: 系统管理service层
 */
import bxRequest from '../../index'
import { IDataType } from '../../types'

// 查询数据
export const getPageListData = (pageUrl: string, queryInfo: any) => {
  return bxRequest.post<IDataType>({
    url: pageUrl,
    data: queryInfo
  })
}

// 通过id删除数据 url: /users/id
export const deletePageDataById = (url: string) => {
  return bxRequest.delete<IDataType>({
    url: url
  })
}

// 新增数据
export const createPageData = (url: string, newData: any) => {
  return bxRequest.post<IDataType>({
    url: url,
    data: newData
  })
}

// 新增数据
export const editPageData = (url: string, editData: any) => {
  return bxRequest.patch<IDataType>({
    url: url,
    data: editData
  })
}

// 查询单条数据
// export const editPageData = (url: string, editData: any) => {
//   return bxRequest.patch<IDataType>({
//     url: url,
//     data: editData
//   })
// }
