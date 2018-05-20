import React from 'react'
import { Layout, Menu, Icon } from 'antd';
import Contents from './content/contents'
import {Link} from 'react-router-dom'
import {homeSliderMenu} from '../../utils/homeSliderMenu'
import './home.less'
const { Header, Sider } = Layout;
const SubMenu = Menu.SubMenu;

export default class Home extends React.Component {
    state = {
        collapsed: false,
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render() {
        return (
            <Layout className="content-wrapper">
                <Sider
                    className="content-slider"
                    collapsible
                    onCollapse={this.toggle}
                    collapsed={this.state.collapsed}>
                    <div className="logo-wrapper">
                        <p>LOGO</p>
                    </div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['index']}>
                        {
                            homeSliderMenu.map((item) => {
                                if(item.children){
                                    return (
                                        <SubMenu key={item.url} title={<span><Icon type={item.icon} /><span>{item.name}</span></span>}>
                                            {
                                                item.children.map((subItem) => {
                                                    return (
                                                        <Menu.Item key={subItem.url}>
                                                            <Link to={`/${subItem.url}`}>
                                                                <Icon type={subItem.icon}/>
                                                                <span>{subItem.name}</span>
                                                            </Link>
                                                        </Menu.Item>
                                                    )
                                                })
                                            }
                                        </SubMenu>
                                    )
                                }else{
                                    return (
                                        <Menu.Item key={item.url}>
                                            <Link to={`/${item.url}`}>
                                                <Icon type={item.icon} />
                                                <span>{item.name}</span>
                                            </Link>
                                        </Menu.Item>
                                    )
                                }
                            })
                        }
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
