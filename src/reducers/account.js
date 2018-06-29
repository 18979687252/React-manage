import { handleActions } from 'redux-actions'
const initialState  = {
    accountRes: {},
    modalVisible:false
}
export const account = handleActions({
    'GET_ACCOUNTS'(state, action){
        //console.log(state,action)
        return {
            ...state,
            accountRes:{...action.payload}
        }
    },
    'MODAL_VISIBLE' (state, action){
        return {
            ...state,
            modalVisible:action.payload
        }
    }
}, initialState)
