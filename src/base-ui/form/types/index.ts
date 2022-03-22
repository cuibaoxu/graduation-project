/*
 * @Author: cuibx
 * @Date: 2022-03-16 15:53:34
 * @Description: Do not edit
 */
type IFormType = 'input' | 'password' | 'select' | 'datepicker' | 'radio'

export interface IFormItem {
  field: string
  type: IFormType
  label: string
  rules?: any[]
  placeholder?: any
  // 针对select和radio
  options?: any[]
  // 针对特殊的属性
  otherOptions?: any
  isHidden?: boolean
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  colLayout?: any
  itemLayout?: any
}
