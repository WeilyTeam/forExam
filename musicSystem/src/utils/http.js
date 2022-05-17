//重新封装axios 请求
import axios from 'axios'
import router from '@/router'
import {Notify} from "vant"
// 重新创建一个加载状态

const instance = axios.create({
  timeout: 10000,
  baseURL: 'http://127.0.0.1:3000/api'
})
// baseUrl
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

let httpCode = {
  400: '请求参数错误',
  401: '权限不足, 请重新登录',
  403: '服务器拒绝本次访问',
  404: '请求资源未找到',
  500: '内部服务器错误',
  501: '服务器不支持该请求中使用的方法',
  502: '网关错误',
  504: '网关超时'
}

instance.interceptors.request.use(config => {
  if (config.method === 'get') {
    config.params = {
      ...config.params,
    }
  }

  return config
}, error => {
  return Promise.reject(error)
})

instance.interceptors.response.use(res => {
  console.log(res)
  if (res.data.code === 0) {
    Notify({
      message: res.data.msg,
      type: "success"
    });
    if(res.data.token){
      sessionStorage.setItem("token",res.data.token)
    }
    return Promise.resolve(res.data)
  } else {
    Notify({
      message: res.data.msg,
      type: "danger"
    });
    return Promise.reject(res.data)
  }
}, error => {
  console.log(router.app.$router.replace("/"))
  // router.$router.redirect("/")
  // console.log(error)
  return Promise.reject(error)
})
/* 统一封装get请求 */
export const get = (url, params, config = {}) => {
  return new Promise((resolve, reject) => {
    instance({
      method: 'get',
      url,
      params,
      ...config
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}

//统一封装post 请求
export const post = (url, data, config = {}) => {
  let token=sessionStorage.getItem("token")||""
  return instance({
    method: 'post',
    url,
    data:{
      token,
      ...data
    },
    ...config
  }).then(response => {
    console.log(url)
    return Promise.resolve(response)
  }).catch(error => {
    return Promise.reject(error)
  })
}

// 统一封装delete请求
export const del = (url, params, config = {}) => {
  return new Promise((resolve, reject) => {
    instance({
      method: 'delete',
      url,
      params,
      ...config
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}
//统一封装put 请求
export const put = (url, params, config = {}) => {
  return new Promise((resolve, reject) => {
    instance({
      method: 'put',
      url,
      params,
      ...config
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}
//统一封装 ...
