import React from 'react'
import {Table, Input, InputNumber, Popconfirm, Form} from 'antd'

const FormItem = Form.Item
//表格行组件
const EditableContext = React.createContext()
const EditableRow = ({form, index, ...props}) => (
    <EditableContext.Provider value={form}>
        <tr {...props} />
    </EditableContext.Provider>
);
const EditableFormRow = Form.create()(EditableRow);

//编辑单元组件
class EditableCell extends React.Component {
    getInput = () => {
        if (this.props.inputType === 'number') {
            return <InputNumber/>;
        }
        return <Input/>;
    };

    render() {
        const {
            editing,
            dataIndex,
            title,
            inputType,
            record,
            index,
            ...restProps
        } = this.props;
        return (
            <EditableContext.Consumer>
                {(form) => {
                    const {getFieldDecorator} = form;
                    return (
                        <td {...restProps}>
                            {editing ? (
                                <FormItem style={{margin: 0}}>
                                    {getFieldDecorator(dataIndex, {
                                        rules: [{
                                            required: true,
                                            message: `请输入 ${title}!`,
                                        }],
                                        initialValue: record[dataIndex],
                                    })(this.getInput())}
                                </FormItem>
                            ) : restProps.children}
                        </td>
                    );
                }}
            </EditableContext.Consumer>
        );
    }
}

class EditableTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {editingKey: ''};
        this.columns = [
            {
                title: '操作',
                dataIndex: 'operation',
                align:'center',
                width:140,
                render: (text, record) => {
                    const editable = this.isEditing(record);
                    return (
                        <div>
                            <a style={{marginRight: 8}} onClick={() => this.deleteAction(record)}>删除</a>
                            {editable ? (
                                <span>
                                  <EditableContext.Consumer>
                                    {form => (
                                        <a onClick={() => this.save(form, record.id)}
                                           style={{marginRight: 8}}>
                                            保存
                                        </a>
                                    )}
                                  </EditableContext.Consumer>
                                  <Popconfirm
                                      title="确定要取消吗?"
                                      okText="确定"
                                      cancelText="取消"
                                      onConfirm={() => this.cancel(record.id)}>
                                    <a>取消</a>
                                  </Popconfirm>
                                </span>
                            ) : (
                                <a onClick={() => this.edit(record.id)}>编辑</a>
                            )}
                        </div>
                    );
                },
            },
        ];
    }
    isEditing = (record) => {
        return record.id === this.state.editingKey;
    }
    deleteAction(record){
        this.props.deleteAction(record)
    }
    edit(id) {
        this.setState({editingKey: id});
    }
    save(form, id) {
        form.validateFields((error, row) => {
            if (error) {
                return;
            }
            //console.log(form, row, id)
            this.setState({editingKey: ''})
            this.props.updateAction(row)
        });
    }
    cancel = () => {
        this.setState({editingKey: ''});
    };

    render() {
        const components = {
            body: {
                row: EditableFormRow,
                cell: EditableCell,
            },
        };
        const tempColumns = [...this.props.columns,...this.columns]
        const columns = tempColumns.map((col) => {
            if (!col.editable) {
                return col;
            }
            return {
                ...col,
                onCell: record => ({
                    record,
                    inputType: col.dataType === 'number' ? 'number' : 'text',
                    dataIndex: col.dataIndex,
                    title: col.title,
                    editing: this.isEditing(record),
                }),
            };
        });
        return (
            <Table
                components={components}
                pagination={this.props.paginationParams.total > 10 ? this.props.paginationParams : false}
                bordered
                rowKey="id"
                size="middle"
                dataSource={this.props.data}
                columns={columns}
                onChange={this.props.tableChange}
                rowClassName="editable-row"
            />
        );
    }
}

export default EditableTable