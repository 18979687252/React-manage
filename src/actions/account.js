import {httpGet} from '../utils/http'
import {accountUrl} from '../utils/api'
import { notification} from 'antd'
import {createAction} from 'redux-actions'
import {resEcode,encodeSearchParams} from '../utils/constant'

const getAllAccounts = (requestParams) => {
    return (dispatch) => {
        let url = encodeSearchParams(accountUrl,requestParams)
        httpGet(url,(res) => {
            if(res.ecode === resEcode){
                // 对action载入payload参数
               dispatch(getAccounts(res.data.content))
            }else{
                notification.success({
                    message: '请求有误',
                    description: res.msg,
                })
            }
        })
    }
}

//redux-actions创建action
const getAccounts = createAction('GET_ACCOUNTS')

export {
    getAllAccounts,
    getAccounts
}
