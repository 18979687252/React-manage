import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from "react-redux"
import routes from './router/router'
import store from './store'
import './index.less'


ReactDOM.render(
    <Provider store={store}>
        <div className="root-content-wrapper">
            {routes}
        </div>
    </Provider>,
    document.getElementById('root')
)
