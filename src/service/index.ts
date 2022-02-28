/*
 * @Author: cuibx
 * @Date: 2022-02-16 13:45:35
 * @Description: service统一出口
 */
import BXRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const bxRequest = new BXRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requsetInterceptor: (config) => {
      console.log('请求成功的拦截')
      return config
    },
    requsetInterceptorCatch: (err) => {
      console.log('请求失败的拦截')
      return err
    },
    responseInterceptor: (res) => {
      console.log('响应成功的拦截')
      return res
    },
    responseInterceptorCatch: (err) => {
      console.log('响应成功的拦截')
      return err
    }
  }
})

export default bxRequest
