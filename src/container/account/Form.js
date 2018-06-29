import React from 'react'
import {Modal, Form, Input, Select, Switch } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option
const CreateForm = Form.create()(
    class extends React.Component {
        render() {
            const { visible, onCancel, onCreate, form ,onSwitch} = this.props;
            const { getFieldDecorator } = form;
            const formItemLayout = {
                labelCol: { span: 7 },
                wrapperCol: { span: 14 }
            }
            return (
                <Modal
                    visible={visible}
                    title="新建账号"
                    okText="保存"
                    cancelText="取消"
                    onCancel={onCancel}
                    onOk={onCreate}
                >
                    <Form layout="horizontal">
                        <FormItem label="账号名称" {...formItemLayout}>
                            {getFieldDecorator('name', {
                                rules: [{ required: true, message: '请输入名称' }],
                            })(<Input /> )}
                        </FormItem>
                        <FormItem label="账号代码" {...formItemLayout}>
                            {getFieldDecorator('accountCode')(<Input/>)}
                        </FormItem>
                        <FormItem label="交易所" {...formItemLayout}>
                            {getFieldDecorator('exchangeType')(
                                <Select >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                            )}
                        </FormItem>
                        <FormItem label="挂单手续费" {...formItemLayout}>
                            {getFieldDecorator('makerFeeRate')(<Input type="number"/>)}
                        </FormItem>
                        <FormItem label="吃单手续费" {...formItemLayout}>
                            {getFieldDecorator('takerFeeRate')(<Input type="number"/>)}
                        </FormItem>
                        <FormItem label="访问key" {...formItemLayout}>
                            {getFieldDecorator('accessKey')(<Input/>)}
                        </FormItem>
                        <FormItem label="访问密钥" {...formItemLayout}>
                            {getFieldDecorator('accessSecret')(<Input/>)}
                        </FormItem>
                        <FormItem label="状态" {...formItemLayout}>
                            {getFieldDecorator('status')(
                                <Switch
                                    defaultChecked
                                    checkedChildren="激活"
                                    unCheckedChildren="启动"/>)}
                        </FormItem>
                    </Form>
                </Modal>
            );
        }
    }
);

class CollectionsPage extends React.Component {
    handleCreate = () => {
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            this.props.onSave(values);
            form.resetFields();
        });
    }
    saveFormRef = (formRef) => {
        this.formRef = formRef;
    }
    render() {
        return (
            <div>
                <CreateForm
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.props.visible}
                    onCancel={this.props.hideModalHandler}
                    onCreate={this.handleCreate}
                />
            </div>
        );
    }
}
export default CollectionsPage