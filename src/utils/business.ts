/*
 * @Author: cuibx
 * @Date: 2022-03-13 23:52:23
 * @Description: 公共方法
 */

import dayjs from 'dayjs'
// import utc from 'dayjs/plugin/utc'

// dayjs.extend(utc)

/**
 * 修改接收的后台图标传参格式
 */
const iconToUpper = (value: string) => {
  const str = value.split('-icon-')[1]
  const strChildren = str.split('-')
  return strChildren.length > 1
    ? strChildren.map((item: string) => item.replace(item[0], item[0].toUpperCase())).join('')
    : str.replace(str[0], str[0].toUpperCase())
}

/**
 * 转化时间格式
 * @param {String} date 时间字符串
 * @param {String} type 转化的时间格式
 */
const timeFormat = (date: string, type = 'YYYY-MM-DD HH:mm:ss') => {
  return dayjs(date).format(type)
}

/**
 * 获取实时时间
 * @param {String} type 转化的时间格式
 */
const currentTime = (type = 'HH:mm:ss') => {
  return dayjs(new Date()).format(type)
}

/**
 * 字符串首字母转化成大写
 * @param {String} str 转化的字符串
 */
const toUpperCaseByFirst = (str: string) => str.replace(/^\S/, (s: string) => s.toUpperCase())

export { iconToUpper, timeFormat, currentTime, toUpperCaseByFirst }
