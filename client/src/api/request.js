import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000
})

// 设置请求拦截
request.interceptors.request.use((config) => {
  // config就是你的请求
  // 做一些其他的事情。。。
  // eg:config.headers=...

  // 请求放行
  return config
})


// 设置响应拦截
request.interceptors.response.use((response) => {
  // 拦截的响应
  // 对响应进行处理

  // 响应放行
  return response
}, (err) => {
  //对错误进行一个处理
  return Promise.reject(err)
})

export default request
