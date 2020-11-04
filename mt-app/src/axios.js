import axios from 'axios'

axios.defaults.baseURL = 'http://open.duyiedu.com';

axios.interceptors.request.use(function (config) {
  config.params = {
    ...config.params,
    appkey: "nevermover_1596529183445"
  }
  return config;
}, function (error) {
  return Promise.reject(error)
})


export default axios;