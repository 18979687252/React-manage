import {httpPost, httpDelete, httpGet, httpPut} from '../utils/http'
import {accountUrl,allAccountUrl} from '../utils/api'
import {message} from 'antd'
import {createAction} from 'redux-actions'
import {resEcode,encodeSearchParams} from '../utils/constant'

const getAllAccounts = (requestParams) => {
    return (dispatch) => {
        let url = encodeSearchParams(allAccountUrl,requestParams)
        httpGet(url,(res) => {
            if(res.ecode === resEcode){
                // 对action载入payload参数
               dispatch(getAccounts(res.data))
            }else{
                message.error(res.msg)
            }
        })
    }
}
const postAccount = (data) => {
    return (dispatch) => {
        let url = accountUrl
        httpPost(url,data,(res) => {
            if(res.ecode === resEcode){
                message.success(res.msg)
                // 对action载入payload参数
                dispatch(getAllAccounts())
                dispatch(modalVisible(false))
            }else{
                message.error(res.msg)
            }
        })
    }
}

const updateAccount = (data) => {
    return (dispatch) => {
        let url = accountUrl + '/' + data.accountCode
        httpPut(url,data,(res) => {
            if(res.ecode === resEcode){
                message.success(res.msg)
                // 对action载入payload参数
                dispatch(getAllAccounts())
            }else{
                message.error(res.msg)
            }
        })
    }
}
const deleteAccount = (id) => {
    return (dispatch) => {
        let url = accountUrl + '/' + id
        httpDelete(url,(res) => {
            if(res.ecode === resEcode){
                message.success(res.msg)
                // 对action载入payload参数
                dispatch(getAllAccounts())
            }else{
                message.error(res.msg)
            }
        })
    }
}
//redux-actions创建action
const getAccounts = createAction('GET_ACCOUNTS')
const modalVisible = createAction('MODAL_VISIBLE')
export {
    getAllAccounts,
    postAccount,
    updateAccount,
    deleteAccount,
    getAccounts,
    modalVisible
}
