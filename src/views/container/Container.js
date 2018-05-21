import React from 'react'
import { Layout, Menu, Icon } from 'antd';
import {Link} from 'react-router-dom'
import Contents from './content/contents'
import Top from './header/Top'
import {homeSliderMenu} from '../../utils/homeSliderMenu'
import './container.less'
const { Header, Sider } = Layout;
const SubMenu = Menu.SubMenu;

export default class Container extends React.Component {
    state = {
        collapsed: false,
        current: 'music',
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    menuClickHandler = ({ item, key, keyPath }) => {
       this.setState({current:key})
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
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={[this.state.current]} onClick={this.menuClickHandler}>
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
                    <Top toggle={this.toggle} collapsed={this.state.collapsed}></Top>
                    <Contents style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}></Contents>
                </Layout>
            </Layout>
        );
    }
}
