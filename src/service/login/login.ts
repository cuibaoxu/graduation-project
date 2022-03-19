/*
 * @Author: cuibx
 * @Date: 2022-03-06 17:52:08
 * @Description: 登录请求接口
 */
import bxRequest from '../index'

import { IAccount, ILoginResult } from './type'
import { IDataType } from '../types'

enum LoginAPI {
  accountLogin = '/login',
  LoginUserInfo = '/users/', // 用法: /users/1
  UserMenus = '/role/' // 用法: role/1/menu
}

/**
 * 登录
 * @param account 账号密码
 */
export const accountLoginRequest = (account: IAccount) => {
  return bxRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.accountLogin,
    data: account
  })
}

/**
 * 通过id获取用户信息
 * @param id 用户id
 */
export const requestUserInfoById = (id: number) => {
  return bxRequest.get<any>({
    url: `${LoginAPI.LoginUserInfo}${id}`,
    showLoading: false
  })
}

/**
 * 通过id获取用户权限菜单
 * @param id 用户id
 */
export const requestUserMenusByRoleId = (id: number) => {
  return bxRequest.get<IDataType>({
    url: `${LoginAPI.UserMenus}${id}/menu`,
    showLoading: false
  })
}
