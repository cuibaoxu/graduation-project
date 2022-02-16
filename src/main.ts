/*
 * @Author: cuibx
 * @Date: 2022-02-08 16:02:18
 * @Description: Do not edit
 */
import { createApp } from 'vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import './service/axios_demo'
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
