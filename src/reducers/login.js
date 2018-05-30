//例子
import { LOGINMODAL_SHOW } from '../actions/login'
let init={
    display:false
};
export default function user(state=init,action){
    switch(action.type){
        case LOGINMODAL_SHOW:
            return Object.assign({},state,{display:action.display});
        default :
            return state;
    }
}