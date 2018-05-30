import rootReducer from '../reducers/rootReducer'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

const enhancer = compose(
    applyMiddleware(thunk)
)

export default function configureStore(initialstate) {
    return createStore(rootReducer, initialstate, enhancer)
}