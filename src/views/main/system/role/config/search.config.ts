/*
 * @Author: cuibx
 * @Date: 2022-03-16 23:34:56
 * @Description: Do not edit
 */
import { IForm } from '@/base-ui/form'

export const formConfig: IForm = {
  labelWidth: '120px',
  itemLayout: {
    padding: '10px 40px'
  },
  // colLayout: {
  //   span: 8
  // },
  formItems: [
    {
      field: 'name',
      type: 'select',
      label: '角色名称',
      placeholder: '请选择角色',
      options: [
        { label: '人事', value: '人事' },
        { label: '运营', value: '运营' },
        { label: '超级管理员', value: '超级管理员' }
      ]
    },
    {
      field: 'intro',
      type: 'select',
      label: '权限',
      placeholder: '请选择权限',
      options: [
        { label: '人事管理', value: '人事管理' },
        { label: '日常事务', value: '日常事务' },
        { label: '所有权限', value: '所有权限' }
      ]
    },
    {
      field: 'creatTime',
      type: 'datepicker',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ]
}
