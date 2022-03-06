/*
 * @Author: cuibx
 * @Date: 2022-02-28 14:25:06
 * @Description: 类型
 */
import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface BXRequsetInterceptors<T = AxiosResponse> {
  requsetInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requsetInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface BXRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: BXRequsetInterceptors<T>
  showLoading?: boolean
}
