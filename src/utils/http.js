//本文件用于ajax封装，避免代码重复率高
import { message,Modal } from 'antd'
import axios from './interceptors'

//axios post方式
export function httpPost(url,data,successCallback){
    axios.post(url,data).then(function (response) {
        successCallback(response)
    }).catch(function (error) {
        message.error("网络异常，请稍后再试")
    })
}

//axios put方式
export function httpPut(url,data,successCallback){
    axios.put(url,data).then(function (response) {
        successCallback(response)
    }).catch(function (error) {
        message.error("网络异常，请稍后再试")
    })

}

//axios get方式
export function httpGet(url,successCallback){
    axios.get(url).then(function (response) {
            successCallback(response)
        }).catch(function (error) {
        message.error("网络异常，请稍后再试")
    })
}

//axios delete方式
export function httpDelete(url,successCallback){
    Modal.confirm({
        title: '提示',
        content: '确认删除吗？',
        onOk() {
            axios.delete(url)
                .then(function (response) {
                    successCallback(response);
                })
                .catch(function (error) {
                    message.error("网络异常，请稍后再试")
                });
        },
        onCancel() {

        },
    });
}