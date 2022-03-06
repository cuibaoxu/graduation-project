/*
 * @Author: cuibx
 * @Date: 2022-03-06 13:14:29
 * @Description: 账号密码登录校验规则
 */
// 密码必须由字母、数字、特殊符号组成，区分大小写
const rule = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[._~!@#$^&*])[A-Za-z0-9._~!@#$^&*]{8,20}$/

export const rules = {
  name: [
    { required: true, message: '用户名不能为空！', trigger: 'blur' },
    { pattern: /^[a-z0-9]{5,10}$/, message: '用户名必须是5-10个字母或数字！', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '密码不能为空！', trigger: 'blur' },
    { pattern: rule, message: '密码必须由6位以上字母、数字、特殊符号组成，区分大小写！', trigger: 'blur' }
  ]
}
