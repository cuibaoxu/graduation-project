/*
 * @Author: cuibx
 * @Date: 2022-03-06 14:55:33
 * @Description: 获取参数工具
 */
class LocalCache {
  // 存缓存
  setCache(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }
  // 取缓存
  getCache(key: string) {
    // obj => string => obj
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }
  // 删除缓存
  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }
  // 清空缓存
  clearCache() {
    window.localStorage.clear()
  }
}

export default new LocalCache()
