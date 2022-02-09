/*
 * @Author: cuibx
 * @Date: 2022-02-09 10:01:28
 * @LastEditTime: 2022-02-09 11:19:33
 * @Description: 网络层
 */
import axios from 'axios'

// axios的实例对象
/* 1.模拟get请求 */
axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
  console.log(res.data)
})
/*  2.get请求httpbin */
// axios
//   .get('http://httpbin.org/get', {
//     params: {
//       name: 'cuibx',
//       age: 23
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

/*  3.post请求 */
// axios
//   .post('http://httpbin.org/post', {
//     data: {
//       name: 'wangjr',
//       age: 27
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

//Promise本身是可以有类型
// new Promise<string>((resolve) => {
//   resolve('abc')
// }).then((res) => {
//   console.log(res.length)
// })

/* 4.axios的配置选项 */
// 1.全局配置
axios.defaults.baseURL = 'http://httpbin.org' // axios的baseUrl
axios.defaults.timeout = 10000 // axios请求超时时间
// axios.defaults.headers = {} // 请求头配置

// 2.get请求httpbin
axios
  .get('/get', {
    params: {
      name: 'cuibx',
      age: 23
    },
    timeout: 5000, // 局部配置超时时间
    headers: {} // 局部配置请求头
  })
  .then((res) => {
    console.log(res.data)
  })

// 3.post请求
axios
  .post('/post', {
    data: {
      name: 'wangjr',
      age: 27
    }
  })
  .then((res) => {
    console.log(res.data)
  })

/*  5.axios.all -> 多个数据，一起返回 */
axios
  .all([axios.get('/get', { params: { name: 'cuibx', age: 23 } }), axios.post('/post', { params: { name: 'wangjr', age: 27 } })])
  .then((res) => {
    console.log(res)
  })

/* 6.axios拦截器(身份验证，显示loading等) */
/**
 * @description: 拦截请求
 * @param {Function} fn1 请求发送成功会执行的函数
 * @param {Function} fn2 请求发送失败会执行的函数
 */
axios.interceptors.request.use(
  (config) => {
    // 想做的操作
    // 1.给请求添加token
    // 2.isLoading的动画
    console.log('请求成功的拦截')
    return config
  },
  (err) => {
    console.log('请求发生错误')
    return err
  }
)
/**
 * @description: 拦截响应
 * @param {Function} fn1 数据响应成功200
 * @param {Function} fn2 数据响应失败
 */
axios.interceptors.response.use(
  (res) => {
    console.log('响应成功的拦截')
    return res
  },
  (err) => {
    console.log('服务器响应失败')
    return err
  }
)
