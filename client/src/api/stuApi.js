// 封装我们的请求函数
import request from './request'

// 获取学生信息列表
export function getStuListApi() {
  return request({
    url: '/students',
    method: 'GET'
  })
}

//添加学生信息 
export function addStuInfoApi(data) {
  return request({
    url: '/students',
    method: 'POST',
    data
  })
}

// 根据id获取学生信息
export function getStuByIdApi(id) {
  return request({
    url: `/students/${id}`,
    method: 'GET'
  })
}
