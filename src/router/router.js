import React from 'react'
import { Route, Redirect, Switch, HashRouter} from 'react-router-dom'

//引入组件
import Login from '../views/login/Login';
import Home from '../views/home/Home';

const routes = (
    <HashRouter>
        <Switch>
            <Route path="/index" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/" render={() => <Redirect to="/index"/>}/>
        </Switch>
    </HashRouter>
)
export default routes