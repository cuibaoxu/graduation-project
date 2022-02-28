/*
 * @Author: cuibx
 * @Date: 2022-02-28 14:25:06
 * @Description: 类型
 */
import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface BXRequsetInterceptors {
  requsetInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requsetInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

export interface BXRequestConfig extends AxiosRequestConfig {
  interceptors?: BXRequsetInterceptors
}
