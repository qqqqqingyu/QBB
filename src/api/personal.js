// 个人中心接口

import service from "../utils/request";

// 用户信息
export function userInfo(myData) {
  return service({
    url: '/api/personal/userInfo',
    method: 'post',
    data:myData
  })
}

// 流行度预测历史记录
export function historyPopularity(myData) {
  return service({
    url: '/api/personal/popularity',
    method: 'post',
    data:myData
  })
}

// 预警历史记录
export function historyPrecaution(myData) {
  return service({
    url: '/api/personal/precaution',
    method: 'post',
    data:myData
  })
}
