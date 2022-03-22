/*
 * @Author: cuibx
 * @Date: 2022-03-22 00:58:05
 * @Description: 新增/编辑方法
 */
import { ref } from 'vue'
import PageModal from '@/components/page-modal'

type CallbackFn = (isHidden: boolean) => void

export const usePageModal = (callBack?: CallbackFn) => {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})

  // 新增/编辑操作
  const handleClick = (row?: any) => {
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
      if (row.id) {
        defaultInfo.value = { ...row }
        callBack && callBack(true)
      } else {
        defaultInfo.value = {}
        callBack && callBack(false)
      }
    }
  }
  return [pageModalRef, defaultInfo, handleClick]
}
