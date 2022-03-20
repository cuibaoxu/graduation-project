/*
 * @Author: cuibx
 * @Date: 2022-03-20 18:04:23
 * @Description: 搜索处理方法
 */
import { ref } from 'vue'
import PageTable from '@/components/page-content'

export const usePageSearch = () => {
  const pageContentRef = ref<InstanceType<typeof PageTable>>()
  // 重置预处理
  const handleResetClick = () => {
    pageContentRef.value?.getPageData()
  }

  // 搜索预处理
  const handleQueryClick = (queryInfo: any) => {
    pageContentRef.value?.getPageData(queryInfo)
  }

  return [pageContentRef, handleResetClick, handleQueryClick]
}
