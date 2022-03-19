/*
 * @Author: cuibx
 * @Date: 2022-02-16 13:45:35
 * @Description: service统一出口
 */
import BXRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
import localCache from '@/utils/cache'

const bxRequest = new BXRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requsetInterceptor: (config: any) => {
      // 携带token的拦截
      const token = localCache.getCache('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      // console.log('请求成功的拦截')
      return config
    },
    requsetInterceptorCatch: (err) => err,
    responseInterceptor: (res) => res,
    responseInterceptorCatch: (err) => err
  }
})

export default bxRequest
