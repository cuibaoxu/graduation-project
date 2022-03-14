/*
 * @Author: cuibx
 * @Date: 2022-03-06 17:53:41
 * @Description: 登录接口类型
 */
export interface IAccount {
  name: string
  password: string
}

export interface ILoginResult {
  id: number
  name: string
  token: string
}

export interface IDataType<T = any> {
  code: number
  data: T
}
