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
              <Route exec path="/index/music" component={Music}/>
              <Route exec path="/index/account" component={Account}/>
          </Switch>
      </Content>
    )
  }
}