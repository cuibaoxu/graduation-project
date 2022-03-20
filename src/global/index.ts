/*
 * @Author: cuibx
 * @Date: 2022-03-20 01:41:04
 * @Description: 全局属性
 */
import { App } from 'vue'
import { registerProperties } from './register-properties'

export const globalRegister = (app: App) => {
  app.use(registerProperties)
}
