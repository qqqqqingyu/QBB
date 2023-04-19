//测试
import axios from 'axios'

const service= axios.create({
  baseURL:'',
  timeout:5000
})

// 添加请求拦截器
service.interceptors.request.use(
  config => {
    // 在请求头中添加token
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    // 设置Content-Type
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default service
