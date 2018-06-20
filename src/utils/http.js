//本文件用于ajax封装，避免每次发ajax时代码重复率高
import { notification,Modal } from 'antd'
import axios from 'axios';
const confirm = Modal.confirm;

//axios post方式
export function httpPost(url,data,successCallback){
    axios.post(url,data).then(function (response) {
        successCallback(response)
    }).catch(function (error) {
        console.log(error)
        notification.error({
            message: '请求有误',
            description: `访问异常，请稍后再试`,
            duration: 2,
        });
    });
}

//axios put方式
export function httpPut(url,data,successCallback){
    axios.put(url,data).then(function (response) {
        successCallback(response)
    }).catch(function (error) {
        notification.error({
            message: '请求有误',
            description: `访问异常，请稍后再试`,
            duration: 2,
        });
    });

}

//axios get方式
export function httpGet(url,successCallback){
    axios.get(url)
        .then(function (response) {
            successCallback(response)
        })
}

//axios delete方式
export function httpDelete(url,successCallback){
    confirm({
        title: '提示',
        content: '确认删除吗？',
        onOk() {
            axios.delete(url)
                .then(function (response) {
                    successCallback(response);
                    notification.success({
                        message: '成功',
                        description: `删除成功`,
                        duration: 2,
                    });
                })
                .catch(function (error) {
                    notification.error({
                        message: '失败',
                        description: `删除失败，请稍后重试`,
                        duration: 2,
                    });
                });
        },
        onCancel() {

        },
    });
}