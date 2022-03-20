/*
 * @Author: cuibx
 * @Date: 2022-03-19 22:59:44
 * @Description: 数学计算方法
 */

/**
 * @description: 加法
 * @param {string} a
 * @param {string} b
 * @param {number} digit 保留几位小数
 */
const add = (a: string | number, b: string | number, digit = 2) => {
  const handle = Number(a) + Number(b)
  return handle.toFixed(digit)
}

/**
 * @description: 减法
 * @param {string} a
 * @param {string} b
 * @param {number} digit 保留几位小数
 */
const reduce = (a: string | number, b: string | number, digit = 2) => {
  const handle = Number(a) - Number(b)
  return Number(handle.toFixed(digit))
}

/**
 * @description: 减法（最小返回0）
 * @param {string} a
 * @param {string} b
 * @param {number} digit 保留几位小数
 */
const reduceZero = (a: string | number, b: string | number, digit = 2) => {
  const handle = Number(a) - Number(b)
  return handle <= 0 ? 0 : Number(handle.toFixed(digit))
}

/**
 * @description: 乘法
 * @param {string} a
 * @param {string} b
 * @param {number} digit 保留几位小数
 */
const multiplication = (a: string | number, b: string | number, digit = 2) => {
  const handle = Number(a) * Number(b)
  return Number(handle.toFixed(digit))
}

/**
 * @description: 除法
 * @param {string} a
 * @param {string} b
 * @param {number} digit 保留几位小数
 */
const division = (a: string | number, b: string | number, digit = 2) => {
  const handle = Number(a) / Number(b)
  return Number(handle.toFixed(digit))
}

export { add, reduce, reduceZero, multiplication, division }
