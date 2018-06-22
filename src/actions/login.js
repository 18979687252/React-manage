import {httpPost} from '../utils/http'
import {loginUrl} from '../utils/api'
import { notification} from 'antd'
import {createAction} from 'redux-actions'
import createHistory from 'history/createHashHistory'
let history = createHistory()
//redux-actions创建action
export const loginAction = createAction('LOGIN')

export const loginHandler = (data) => {
    return (dispatch) => {
        httpPost(loginUrl,data,(res) => {
            if(res.token){
                notification.success({
                    message: '成功',
                    description: `登录成功`,
                    duration: 2,//设置显示时间
                })
                //对action载入payload参数
                dispatch(loginAction(data))
                window.sessionStorage.setItem('token',res.token)
                window.sessionStorage.setItem('username',data.username)
                history.push('/index/music')
            }else{
                notification.success({
                    message: '失败',
                    description: res.message,
                })
            }
        })
    }
}


