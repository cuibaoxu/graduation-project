/*
 * @Author: cuibx
 * @Date: 2022-03-20 21:42:51
 * @Description: Do not edit
 */
import { IForm } from '@/base-ui/form'

export const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '商品名称',
      placeholder: '请输入商品名称',
      rules: []
    },
    {
      field: 'address',
      type: 'input',
      label: '商品地址',
      placeholder: '请输入商品地址',
      rules: []
    },
    {
      field: 'status',
      type: 'select',
      label: '状态',
      placeholder: '请选择状态',
      rules: [],
      options: [
        { label: '已上架', value: 1 },
        { label: '已下架', value: 0 }
      ]
    },
    {
      field: 'createAt',
      type: 'datepicker',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ],
  labelWidth: '100px',
  itemLayout: {
    padding: '10px 40px'
  },
  colLayout: { span: 8 }
}
