import React from 'react'
import { Layout, Menu, Icon } from 'antd';
import Contents from './content/contents'
import {Link} from 'react-router-dom'
const { Header, Sider } = Layout;

export default class Home extends React.Component {
    state = {
        collapsed: false,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render() {
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="user" />
                            <span>nav 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/music">
                                <Icon type="video-camera" />
                                <span>nav 2</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload" />
                            <span>nav 3</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Contents style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}></Contents>
                </Layout>
            </Layout>
        );
    }
}
