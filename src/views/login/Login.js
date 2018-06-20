import React from 'react'
import { Form, Input, Button, Checkbox, Icon } from 'antd'
import {loginHandler} from '../../actions/login'
import {connect} from 'react-redux'
import './login.less'
const FormItem = Form.Item

class LoginPage extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault()
        let data = {
            username: this.props.form.getFieldsValue().username,
            password: this.props.form.getFieldsValue().password
        }
        this.props.dispatch(loginHandler(data))
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
                                           placeholder="账号" />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入密码' }],
                                })(
                                    <Input  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            type="password" placeholder="密码" />
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
//连接state与当前组件的props,是props载入store的dispath方法
export default connect()(Login)