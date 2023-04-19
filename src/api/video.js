// 视频广场、视频详情、预警详情接口

import service from "../utils/request";

/* 视频广场 */

// 时尚区视频广场
export function squareSS(myData) {
  return service({
    url: '/api/square/ss',
    method: 'post',
    data:myData
  })
}

// 生活区视频广场
export function squareSH(myData) {
  return service({
    url: '/api/square/sh',
    method: 'post',
    data:myData
  })
}

/* 视频详情 */

// 时尚区视频信息
export function detailsSS(myData) {
  return service({
    url: '/api/details/ss',
    method: 'post',
    data:myData
  })
}

// 生活区视频信息
export function detailsSH(myData) {
  return service({
    url: '/api/details/sh',
    method: 'post',
    data:myData
  })
}

// 时尚区弹幕列表
export function detailsListSS(myData) {
  return service({
    url: '/api/detailsList/ss',
    method: 'post',
    data:myData
  })
}

// 生活区弹幕列表
export function detailsListSH(myData) {
  return service({
    url: '/api/detailsList/sh',
    method: 'post',
    data:myData
  })
}

// 时尚区单个视频词云图词频
export function frequencySS(myData) {
  return service({
    url: '/api/frequency/ss',
    method: 'post',
    data:myData
  })
}

// 生活区单个视频词云图词频
export function frequencySH(myData) {
  return service({
    url: '/api/frequency/sh',
    method: 'post',
    data:myData
  })
}

// 时尚区弹幕随时间变化的图
export function popularitySS(myData) {
  return service({
    url: '/api/popularity/ss',
    method: 'post',
    data:myData
  })
}

// 生活区弹幕随时间变化的图
export function popularitySH(myData) {
  return service({
    url: '/api/popularity/sh',
    method: 'post',
    data:myData
  })
}

// 时尚区整个区词云图
export function cloudSS(myData) {
  return service({
    url: '/api/ss/cloud',
    method: 'post',
    data:myData
  })
}

// 生活区整个区词云图
export function cloudSH(myData) {
  return service({
    url: '/api/sh/cloud',
    method: 'post',
    data:myData
  })
}

