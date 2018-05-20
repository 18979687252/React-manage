import React from 'react'
import { Route} from 'react-router-dom'
import './contents.less'
import Account from '../../account/Accout'
import {Layout} from 'antd';
const {Content} = Layout

export default class Contents extends React.Component {
  render() {
    return (
      <Content className="content">
          <Route path="/account" component={Account} />
      </Content>
    )
  }
}