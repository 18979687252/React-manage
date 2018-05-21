import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import './contents.less'
import {Layout} from 'antd'
import Account from '../../account/Accout'
import Music from '../../music/Music'

const {Content} = Layout

export default class Contents extends React.Component {
  render() {
    return (
      <Content className="content">
          <Redirect push to="/account" />
          <Route path="/music" component={Music} />
          <Route path="/account" component={Account} />
      </Content>
    )
  }
}