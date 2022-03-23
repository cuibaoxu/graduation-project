/*
 * @Author: cuibx
 * @Date: 2022-03-21 00:37:46
 * @Description: Do not edit
 */
import { IForm } from '@/base-ui/form/types/'

export const modalConfig: IForm = {
  // title: '新建用户',
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名',
      placeholder: '请输入角色名',
      rules: [{ required: true }]
    },
    {
      field: 'intro',
      type: 'input',
      label: '角色介绍',
      placeholder: '请输入角色介绍'
    }
  ],
  colLayout: { span: 24 },
  itemLayout: {
    padding: '0px 0px'
  }
}
