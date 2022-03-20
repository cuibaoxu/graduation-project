/*
 * @Author: cuibx
 * @Date: 2022-02-08 17:56:55
 * @LastEditTime: 2022-03-20 01:39:01
 * @Description: 全局方法
 */
import { App } from 'vue'

export const registerProperties = (app: App) => {
  app.config.globalProperties.$filters = {
    cbx() {
      console.log('我是cbx')
    }
  }
}
