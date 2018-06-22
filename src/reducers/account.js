import { handleActions } from 'redux-actions'
const initialState  = {
    accounts: []
}
export const account = handleActions({
    'GET_ACCOUNTS'(state, action){
        //console.log(state,action)
        return {
            ...state,
            accounts:[...action.payload]
        }
    },
}, initialState)
