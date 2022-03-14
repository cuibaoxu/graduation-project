/*
 * @Author: cuibx
 * @Date: 2022-03-13 23:52:23
 * @Description: 公共方法
 */

/**
 * 修改图标格式
 */
const iconToUpper = (value: string) => {
  const str = value.split('-icon-')[1]
  const strChildren = str.split('-')
  return strChildren.length > 1
    ? strChildren.map((item: string) => item.replace(item[0], item[0].toUpperCase())).join('')
    : str.replace(str[0], str[0].toUpperCase())
}

export { iconToUpper }
