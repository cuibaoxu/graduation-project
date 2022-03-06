/*
 * @Author: cuibx
 * @Date: 2022-03-06 13:14:29
 * @Description: 账号密码登录校验规则
 */
// 表单校验规则

export const rules = {
  name: [
    { required: true, message: '用户名不能为空！', trigger: 'blur' },
    { pattern: /^[a-z0-9]{5,10}$/, message: '用户名必须是5-10个字母或数字！', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '密码不能为空！', trigger: 'blur' },
    { pattern: /^[a-z0-9]{6,}$/, message: '用户名必须是6位以上的字母或数字！', trigger: 'blur' }
  ]
}
