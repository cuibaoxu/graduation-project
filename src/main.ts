/*
 * @Author: cuibx
 * @Date: 2022-02-08 16:02:18
 * @Description: Do not edit
 */
import { createApp } from 'vue'
// import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import './service/axios_demo'
import bxRequest from './service'

import App from './App.vue'

import router from './router'
import store from './store'

const app = createApp(App)
app.use(router)
app.use(store)
// app.use(ElementPlus)
app.mount('#app')

console.log(process.env.VUE_APP_BASE_URL)
console.log(process.env.VUE_APP_BASE_NAME)

// bxRequest.request({
//   url: '/home/multidata',
//   method: 'GET',
//   interceptors: {
//     requsetInterceptor: (config) => {
//       console.log('单独请求的config')
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log('单独响应的response')
//       return res
//     }
//   }
// })

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

bxRequest
  .get<DataType>({
    url: '/home/multidata',
    showLoading: true
  })
  .then((res) => {
    console.log(res.data)
    console.log(res.returnCode)
    console.log(res.success)
  })
