/*
 * @Author: cuibx
 * @Date: 2022-03-06 15:31:31
 * @Description: 类型
 */

import { ILoginState } from './login/types'
import { ISystemState } from './mian/system/type'
import { IDashboardState } from './mian/analysis/types'
export interface IRootState {
  name: string
  age: number
  entireDepartment: any[]
  entireRole: any[]
  entireMenu: any[]
}

export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
  dashboard: IDashboardState
}

export type IStoreType = IRootState & IRootWithModule
