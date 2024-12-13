import axios from "axios";
// 创建一个 Axios 实例
const instance = axios.create({
  baseURL: import.meta.env.BASE_URL, // 设置请求的基础 URL
  timeout: 10000, // 设置超时时间，单位为毫秒
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在请求发送之前，可以对请求进行修改
    return config;
  },
  (error) => {
    // 请求失败时，进行错误处理
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 对响应数据进行处理
    return response.data;
  },
  (error) => {
    // 响应失败时，进行错误处理
    return Promise.reject(error);
  }
);

export default instance;
