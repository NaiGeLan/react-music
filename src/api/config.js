import axios from 'axios';

export const baseUrl = 'http://localhost:4000';

//axios 的实例及拦截器配置
const axiosInstance = axios.create ({
  baseURL: baseUrl
});

axiosInstance.interceptors.response.use (
  res =>  {
    return Promise.resolve(res.data)
  },
  err => {
    return Promise.reject(err)
  }
);

export {
  axiosInstance
};
