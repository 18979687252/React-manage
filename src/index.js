import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from "react-redux"
import routes from './router/router'
import configureStore from './store/store'
import './index.less'

const store = configureStore()
ReactDOM.render(
    <Provider store={store}>
        <div>
            {routes}
        </div>
    </Provider>,
    document.getElementById('root'))
