import React from 'react'
import { Route, Redirect, HashRouter} from 'react-router-dom'

//引入组件
import Login from '../views/login/Login';
import Container from '../views/container/Container';

const routes = (
    <HashRouter>
        <div className="route-wrapper">
            <Route exact  path="/" render={() => <Redirect to="/login"/>}/>
            <Route  path="/index" component={Container} />
            <Route  path="/login" component={Login} />
        </div>
    </HashRouter>
)
export default routes