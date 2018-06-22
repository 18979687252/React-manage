import React from 'react'
import { Route, Redirect, HashRouter} from 'react-router-dom'

//引入组件
import Login from '../container/login/Login';
import Home from '../container/home/Home';

const routes = (
    <HashRouter>
        <div className="route-wrapper">
            <Route exact  path="/" render={() => <Redirect to="/login"/>}/>
            <Route  path="/index" component={Home} />
            <Route  path="/login" component={Login} />
        </div>
    </HashRouter>
)
export default routes