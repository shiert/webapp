import axios from 'axios'
import { baseURL } from '@/config'

// 创建 axios 实例
const request = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// 请求拦截器
request.interceptors.request.use(
  config => {
    // 在这里可以添加token等认证信息
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  response => {
    const res = response.data
    // 这里可以根据后端返回的状态码做统一处理
    return res
  },
  error => {
    // 这里可以统一处理错误
    return Promise.reject(error)
  }
)

export default request
