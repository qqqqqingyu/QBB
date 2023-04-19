// 登录注册接口
import service from "../utils/request";

// 登录
export function login(myData) {
  return service({
    url: '/api/login',
    method: 'post',
    data:myData
  })
}

// 注册
export function register(myData) {
  return service({
    url: '/api/register',
    method: 'post',
    data:myData
  })
}
