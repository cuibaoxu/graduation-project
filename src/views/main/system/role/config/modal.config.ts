/*
 * @Author: cuibx
 * @Date: 2022-03-21 00:37:46
 * @Description: Do not edit
 */
import { IForm } from '@/base-ui/form/types/'

export const modalConfig: IForm = {
  // title: '新建角色',
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名',
      placeholder: '请输入角色名',
      readonly: false,
      rules: [{ required: true }]
    }
  ],
  colLayout: { span: 24 },
  itemLayout: {
    padding: '0px 0px'
  }
}
