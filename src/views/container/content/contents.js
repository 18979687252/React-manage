import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './contents.less'
import {Layout} from 'antd'
import Account from '../../account/Accout'
import Music from '../../music/Music'

const {Content} = Layout

export default class Contents extends React.Component {
  render() {
    return (
      <Content className="content">
          <Switch>
              <Route path="/music" component={Music} />
              <Route path="/account" component={Account} />
          </Switch>
      </Content>
    )
  }
}