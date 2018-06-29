import React from 'react'
import {connect} from 'react-redux'
import {getAllAccounts,postAccount, updateAccount,deleteAccount,modalVisible} from '../../actions/account'
import EditableTable from '../../components/EditableTable'
import { Input, Button } from 'antd'
import CollectionsPage from './Form'
import {accountInitForm} from '../../utils/formInitData'
import {formDataInitHandler,defaultQueryParams,longStrRepalceHandler} from '../../utils/constant'
import './acount.less'
const Search = Input.Search
class Account extends React.Component {
    componentWillMount() {
        this.props.dispatch(getAllAccounts())
    }
    saveActoin = (data) => {
        formDataInitHandler(accountInitForm,data)
        this.props.dispatch(postAccount(data))
    }
    updateAction = (data) => {
        //console.log(data)
        this.props.dispatch(updateAccount(data))
    }
    deleteAction = (data) => {
        this.props.dispatch(deleteAccount(data.accountCode))
    }
    showModalHandler = () => {
        this.props.dispatch(modalVisible(true))
    }
    hideModalHandler = () => {
        this.props.dispatch(modalVisible(false))
    }
    tableChange = (pagination, filters, sorter) => {
        let params = {...defaultQueryParams}
        params.page = pagination.current - 1
        this.props.dispatch(getAllAccounts(params))
    }
    searchHandler = (value) => {
        let params = {...defaultQueryParams}
        params.q = value
        this.props.dispatch(getAllAccounts(params))
    }
    render() {
        //表格数据
        const accounts = this.props.accountRes.content
        //分页参数
        const paginationParams = {
            total:this.props.accountRes.totalElements,
            showQuickJumper:true,
            size:'middle'
        }
        const visible = this.props.modalVisible
        //表格列
        const columns = [
            {
                title: '账号名称',
                dataIndex: 'name',
                align:'center',
                editable: true
            },
            {
                title: '账号代码',
                dataIndex: 'accountCode',
                align:'center',
                editable: false
            },
            {
                title: '交易所',
                dataIndex: 'exchangeType',
                align:'center',
                width: '10%',
                editable: true,
            },
            {
                title: '挂单手续费',
                dataIndex: 'makerFeeRate',
                align:'center',
                width: '10%',
                editable: true,
                dataType: 'number'
            },
            {
                title: '吃单手续费',
                dataIndex: 'takerFeeRate',
                align:'center',
                width: '10%',
                editable: true,
                dataType: 'number'
            },
            {
                title: '访问key',
                dataIndex: 'accessKey',
                align:'center',
                width: '10%',
                editable: false,
                render:(text, record, index) =>{
                    return  longStrRepalceHandler(text)
                }
            },
            {
                title: '访问秘钥',
                dataIndex: 'accessSecret',
                align:'center',
                width: '10%',
                editable: false,
                render:(text, record, index) =>{
                    return  longStrRepalceHandler(text)
                }
            }]
        return (
            <div>
                <CollectionsPage
                    visible={visible}
                    hideModalHandler={this.hideModalHandler}
                    onSave={this.saveActoin}
                />
                <div className="searchWrapper clearFloat">
                    <Button className="fl" type="primary" onClick={this.showModalHandler}>新增</Button>
                    <div className="searchItem">
                        <Search
                            placeholder="请输入关键字"
                            enterButton="搜索"
                            size="default"
                            onSearch={value => this.searchHandler(value)}
                        />
                    </div>
                </div>
                <EditableTable
                    paginationParams={paginationParams}
                    data={accounts}
                    columns={columns}
                    tableChange={this.tableChange}
                    updateAction={this.updateAction}
                    deleteAction={this.deleteAction}>
                </EditableTable>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        accountRes: state.account.accountRes,
        modalVisible: state.account.modalVisible,
    }
}
export default connect(mapStateToProps)(Account)
