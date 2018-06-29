import React from 'react'
import { Menu, Icon, Layout } from 'antd'
import { Link } from 'react-router-dom'
import './homeTop.less'

const SubMenu = Menu.SubMenu
const { Header } = Layout

class HomeTop extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: ''
        }
    }
    componentWillMount () {
        let username = window.sessionStorage.getItem('username')
        this.setState({
            username:username
        })
    }
    menuClickHandler = (item) => {
        if (item.key === 'logOut') {
           window.sessionStorage.clear()
        }
    }
    render() {
        return (
            <Header style={{ background: '#fff'}}>
                <Icon
                    className="trigger"
                    type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.props.toggle}
                />
                <Menu mode="horizontal" className="logOut" onClick={this.menuClickHandler}>
                    <SubMenu title={<span><Icon type="user" />{ this.state.username }</span>} >
                        <Menu.Item key="logOut">
                            <Link to="/login" >退出</Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </Header>
        )
    }
}

export default HomeTop