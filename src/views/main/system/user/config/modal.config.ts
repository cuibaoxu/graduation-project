/*
 * @Author: cuibx
 * @Date: 2022-03-21 00:37:46
 * @Description: Do not edit
 */
import { IForm } from '@/base-ui/form/types/'

export const modalConfig: IForm = {
  // title: '新建用户',
  formItems: [
    { field: 'name', type: 'input', label: '用户名', placeholder: '请输入用户名' },
    {
      field: 'realname',
      type: 'input',
      label: '真实姓名',
      placeholder: '请输入真实姓名',
      rules: [{ required: true }]
    },
    {
      field: 'password',
      type: 'password',
      label: '密码',
      placeholder: '请输入密码',
      isHidden: true
    },
    {
      field: 'enable',
      type: 'radio',
      label: '状态',
      placeholder: '请选择是否启用',
      options: [
        { label: '启用', value: 1 },
        { label: '禁用', value: 0 }
      ],
      rules: [{ required: true }]
    },
    { field: 'cellphone', type: 'input', label: '电话号码', placeholder: '请输入电话号码' },
    { field: 'roleId', type: 'select', label: '选择角色', placeholder: '请选择角色', options: [] },
    {
      field: 'departmentId',
      type: 'select',
      label: '选择部门',
      placeholder: '请选择部门',
      options: []
    }
  ],
  colLayout: { span: 24 },
  itemLayout: {
    padding: '0px 0px'
  }
}
