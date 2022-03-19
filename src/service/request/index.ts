/*
 * @Author: cuibx
 * @Date: 2022-02-6 3:48:32
 * @Description: service层
 */
import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { BXRequsetInterceptors, BXRequestConfig } from './type'

import { ElLoading } from 'element-plus'
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'
// 默认是否有loading
const DEFAULT_LOADING = true

class BXRequest {
  instance: AxiosInstance
  interceptors?: BXRequsetInterceptors
  showLoading: boolean
  loading?: LoadingInstance

  constructor(config: BXRequestConfig) {
    // 创建axios实例
    this.instance = axios.create(config)
    // 保存基本信息
    this.showLoading = config.showLoading ?? DEFAULT_LOADING
    this.interceptors = config.interceptors

    // 使用拦截器
    // 从config中取出的拦截器是对应的实例的拦截器
    this.instance.interceptors.request.use(this.interceptors?.requsetInterceptor, this.interceptors?.requsetInterceptorCatch)
    this.instance.interceptors.response.use(this.interceptors?.responseInterceptor, this.interceptors?.responseInterceptorCatch)

    // 添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // console.log('所有的实例都有的拦截器：请求成功')

        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '拼命加载中',
            background: 'rgba(0, 0, 0, 0.6)'
          })
        }
        return config
      },
      (err) => {
        // console.log('所有的实例都有的拦截器：请求失败')
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        // console.log('所有的实例都有的拦截器：响应成功')
        // 将loading移除
        this.loading?.close()
        return res.data
      },
      (err) => {
        // 将loading移除
        this.loading?.close()
        return err
      }
    )
  }
  request<T = any>(config: BXRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 1.单个请求对请求config的处理
      if (config.interceptors?.requsetInterceptor) {
        config = config.interceptors.requsetInterceptor(config)
      }

      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 1.单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          // 2.将showLoading设置true，这样不会影响下一个请求
          this.showLoading = DEFAULT_LOADING

          // 3.将结果resolve返回出去
          resolve(res)
        })
        .catch((err) => {
          this.showLoading = DEFAULT_LOADING
          reject(err)
          return err
        })
    })
  }

  get<T = any>(config: BXRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T = any>(config: BXRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  patch<T = any>(config: BXRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }

  delete<T>(config: BXRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
}

export default BXRequest
