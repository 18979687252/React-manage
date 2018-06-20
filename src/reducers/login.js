import { handleActions } from 'redux-actions'
const initLoginInfo = {
    username: '默认账号'
}
export const login = handleActions({
    'LOGIN'(state, action) {
        //console.log(state,action)
        return {
            loginInfo: action.payload
        }
    }
},initLoginInfo)