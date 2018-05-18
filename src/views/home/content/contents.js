import React from 'react'
import { Route} from 'react-router-dom'
import './contents.less'
import Music from '../../music'
import {Layout} from 'antd';
const {Content} = Layout

export default class Contents extends React.Component {
  render() {
    return (
      <Content className="content">
          <Route path="/music" component={Music} />
      </Content>
    )
  }
}