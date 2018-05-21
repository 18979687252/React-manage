import React from 'react'
import { Route, Redirect, Switch, HashRouter} from 'react-router-dom'

//引入组件
import Login from '../views/login/Login';
import Container from '../views/container/Container';

const routes = (
    <HashRouter>
        <Switch>
            <Route path="/" component={Container} />
            <Route path="/login" component={Login} />
        </Switch>
    </HashRouter>
)
export default routes