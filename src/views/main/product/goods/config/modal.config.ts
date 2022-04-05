/*
 * @Author: cuibx
 * @Date: 2022-03-21 00:37:46
 * @Description: 商品新增/修改配置
 */
import { IForm } from '@/base-ui/form/types/'

export const modalConfig: IForm = {
  // title: '新建用户',
  formItems: [
    { field: 'goodsName', type: 'input', label: '商品名', placeholder: '请输入商品名', rules: [{ required: true }] },
    {
      field: 'oldPrice',
      type: 'input',
      label: '原价',
      placeholder: '请输入原价'
    },
    {
      field: 'newPrice',
      type: 'input',
      label: '现价',
      placeholder: '请输入现价'
    },
    {
      field: 'decsr',
      type: 'input',
      label: '描述',
      placeholder: '请输入商品描述'
    },
    {
      field: 'statu',
      type: 'radio',
      label: '状态',
      placeholder: '请选择是否启用',
      options: [
        { label: '启用', value: '1' },
        { label: '禁用', value: '0' }
      ],
      rules: [{ required: true, message: '请选择状态', trigger: 'change' }]
    },
    { field: 'imgUrl', type: 'input', label: '图片地址', placeholder: '请输入图片地址' },
    { field: 'inventoryCount', type: 'input', label: '库存', placeholder: '请输入库存数量' },
    { field: 'address', type: 'input', label: '产地', placeholder: '请输入产地' },
    { field: 'categoryId', type: 'input', label: '类别', placeholder: '请选择类别' }
  ],
  colLayout: { span: 24 },
  itemLayout: {
    padding: '0px 0px'
  }
}
