import axios from 'axios'
import createHistory from 'history/createHashHistory'
let history = createHistory()
let token = sessionStorage.getItem('token') ? sessionStorage.getItem('token') : ''

// req拦截
axios.interceptors.request.use(
    config => {
        if (token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers['X-Authorization'] = token
        }
        return config
    },err => {
        return Promise.reject(err)
    });

// res拦截
axios.interceptors.response.use(
    response => {
        return response.data
    },error => {
        if (error.response.code === 401) {
        // 返回 401 跳转到登录页面
            history.push('/login')
        }
    })