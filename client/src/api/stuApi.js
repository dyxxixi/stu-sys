// 封装我们的请求函数
import request from './request'

// 获取学生信息列表
export function getStuListApi() {
  return request({
    url: '/students',
    method: 'GET'
  })
}

export function addStuInfoApi(data) {
  return request({
    url: '/students',
    method: 'POST',
    data
  })
}
