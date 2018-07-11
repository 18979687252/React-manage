import rootReducer from '../reducers/rootReducer'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
const enhancer = compose(
    applyMiddleware(thunk)
)
export default createStore(rootReducer, enhancer)

/*
 创建store
 redux-thunk中间件帮助我们统一异步和同步的action的调用方式。
*/