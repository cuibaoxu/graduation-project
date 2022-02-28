/*
 * @Author: cuibx
 * @Date: 2022-02-6 3:48:32
 * @Description: service层
 */
import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { BXRequsetInterceptors, BXRequestConfig } from './type'

class BXRequest {
  instance: AxiosInstance
  interceptors?: BXRequsetInterceptors

  constructor(config: BXRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    // 从config中取出的拦截器是对应的实例的拦截器
    this.instance.interceptors.request.use(this.interceptors?.requsetInterceptor, this.interceptors?.requsetInterceptorCatch)
    this.instance.interceptors.response.use(this.interceptors?.responseInterceptor, this.interceptors?.responseInterceptorCatch)

    // 添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('所有的实例都有的拦截器：请求成功')
        return config
      },
      (err) => {
        console.log('所有的实例都有的拦截器：请求失败')
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        console.log('所有的实例都有的拦截器：响应成功')
        return res
      },
      (err) => {
        console.log('所有的实例都有的拦截器：响应失败')
        return err
      }
    )
  }
  request(config: BXRequestConfig): void {
    if (config.interceptors?.requsetInterceptor) {
      config = config.interceptors.requsetInterceptor(config)
    }
    this.instance.request(config).then((res) => {
      if (config.interceptors?.responseInterceptor) {
        res = config.interceptors.responseInterceptor(res)
      }
      console.log(res)
    })
  }
}

export default BXRequest
