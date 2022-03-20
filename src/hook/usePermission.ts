/*
 * @Author: cuibx
 * @Date: 2022-03-20 22:32:43
 * @Description: 获取用户权限处理方法
 */
import { useStore } from '@/store'

export const usePermission = (pageName: string, handleName: string) => {
  const store = useStore()
  const permissions = store.state.login.permissions
  const handlePermission = `system:${pageName}:${handleName}`
  return !!permissions.find((item) => item === handlePermission)
}
