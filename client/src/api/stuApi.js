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

// 根据id删除学生信息
export function delStuByIdApi(id) {
  return request({
    url: `/students/${id}`,
    method: "DELETE"
  })
}

// 根据 id 更新学生信息
export function updateStuByIdApi(id, data) {
  return request({
    url: `/students/${id}`,
    method: 'PATCH',
    data
  })
}
