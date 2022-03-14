/*
 * @Author: cuibx
 * @Date: 2022-02-08 16:02:18
 * @Description: Do not edit
 */
import { createApp } from 'vue'
// import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 初始化样式 npm install normalize.css
import 'normalize.css'
import './assets/css/index.css'

import App from './App.vue'

import router from './router'
import store from './store'
import { setupStore } from './store'
import * as icons from '@element-plus/icons-vue'
const ggIcon = icons

const app = createApp(App)
Object.keys(icons).forEach((key: any) => {
  app.component(key, icons[key])
})
app.use(router)
app.use(store)
app.config.globalProperties.$icon = ggIcon
setupStore()
// app.use(ElementPlus)
app.mount('#app')

// console.log(process.env.VUE_APP_BASE_URL)
// console.log(process.env.VUE_APP_BASE_NAME)

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
