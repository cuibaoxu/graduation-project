/*
 * @Author: cuibx
 * @Date: 2022-02-09 11:29:13
 * @LastEditTime: 2022-02-16 14:38:44
 * @Description: 环境配置文件
 */

// 1.方式一：手动切换不同的环境
// const BASE_URL = 'http://cuibx.org/dev'
// const BASE_NAME = 'cuibx'

// const BASE_URL = 'http://cuibx.org/prod'
// const BASE_NAME = 'wangjr'

// const BASE_URL = 'http://cuibx.org/test'
// const BASE_NAME = 'zhoujl'

// 2.根据process.env.NODE_ENV
// 开发环境：development
// 生产环境：production
// 测试环境：test
let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://123.207.32.32:8000'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://cuibx.org/prod'
} else {
  BASE_URL = 'http://cuibx.org/test'
}

export { BASE_URL, TIME_OUT }

// 3.新建.env文件，使用process.env.变量名注入
