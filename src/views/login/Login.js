import React from 'react'
import { Form, Input, Button, Checkbox, notification, Icon } from 'antd'
import createHistory from 'history/createHashHistory'
import './login.less'
const FormItem = Form.Item
const history = createHistory()

class LoginPage extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault()
        let username = this.props.form.getFieldsValue().username
        let password = this.props.form.getFieldsValue().password
        if (username === '123' && password === '123') {
            // 表单的路由处理
            history.push('/index/music')
        } else {
            notification.open({
                message: '用户名&密码',
                description: '都是：123',
                duration: 2,
                icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
            })
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <div className="loginpagewrap">
                <div className="box">
                    <h1>React全家桶后台管理系统</h1>
                    <div className="loginWrap">
                        <Form onSubmit={this.handleSubmit}>
                            <FormItem>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: '请输入用户名' }],
                                })(
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                           placeholder="Username：123" />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入密码' }],
                                })(
                                    <Input  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            type="password" placeholder="Password：123" />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(
                                    <Checkbox>记住密码</Checkbox>
                                )}
                                <a className="login-form-forgot" href="">忘记密码？</a>
                                <Button type="primary" htmlType="submit" className="loginBtn">
                                    登录
                                </Button>
                                <a href="">立即注册</a>
                            </FormItem>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

let Login = Form.create()(LoginPage)
export default Login