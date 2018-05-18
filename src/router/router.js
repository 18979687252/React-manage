import React from 'react'
import { Route, Redirect, Switch, HashRouter} from 'react-router-dom'
import {createBrowserHistory} from 'history'
//引入组件
import Login from '../views/login/Login';
import Home from '../views/home/Home';

const location = createBrowserHistory().location

const routes = (
    <HashRouter>
        <Switch>
            <Route path="/" component={Home} />
            <Route path="/login" component={Login} />
            {location.hash === '#/' ? <Redirect to='/login' /> : ''}
        </Switch>
    </HashRouter>
)
export default routes