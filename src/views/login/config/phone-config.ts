/*
 * @Author: cuibx
 * @Date: 2022-03-06 13:17:30
 * @Description: 手机号验证登录校验规则
 */
// 最新手机号校验规则
const rule = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/

export const rules = {
  number: [
    { required: true, message: '手机号不能为空！', trigger: 'blur' },
    {
      pattern: rule,
      message: '请输入正确的手机号码！',
      trigger: 'blur'
    }
  ],
  code: [{ required: true, message: '验证码不能为空！', trigger: 'blur' }]
}
