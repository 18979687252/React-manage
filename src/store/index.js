import rootReducer from '../reducers/rootReducer'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

const enhancer = compose(
    applyMiddleware(thunk)
)
export default createStore(rootReducer, enhancer)