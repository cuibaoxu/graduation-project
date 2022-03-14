/*
 * @Author: cuibx
 * @Date: 2022-03-06 15:31:31
 * @Description: 类型
 */

import { ILoginState } from './login/types'
export interface IRootState {
  name: string
  age: number
}

export interface IRootWithModule {
  login: ILoginState
}

export type IStoreType = IRootState & IRootWithModule
