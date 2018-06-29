import React from 'react'
import {Card, Row, Col, Timeline } from 'antd'
class Music extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={12}>
                        <Card
                            type="inner"
                            title="项目知识录"
                            extra={<a href="#">More</a>}
                        >
                            <ol>
                                <li>类中使用构造函数，主要用于初始化；其中super()的作用是继承父类的引用;</li>
                                <li>super（props）与super()的区别在于你是否需要在构造函数种使用this.props</li>
                                <li>'react-redux' 中的connect方法的作用:组件与store建立连接;例如：export default connect()(Login)，组件内的props就会添加store的dispatch方法;
                                    当然也可以通过mapStateToProps和mapDispathToProps,将state和action添加到组件的props中，通过this.props访问</li>
                            </ol>
                        </Card>
                    </Col>
                    <Col span={1}/>
                    <Col span={11}>
                        <Timeline>
                            <Timeline.Item>开启react学习之旅</Timeline.Item>
                            <Timeline.Item>使用create-react-app 构建项目 2018-05-18</Timeline.Item>
                            <Timeline.Item>架构项目，选取所需库，学习所需库的使用2018-06-03</Timeline.Item>
                            <Timeline.Item>整理项目结构，抽象文件，配置路由2018-06-10</Timeline.Item>
                            <Timeline.Item>熟悉类库的使用，并开发页面2018-06-20</Timeline.Item>
                            <Timeline.Item>对Ant-design组建的二次封装，完成账号页面的增删改查功能2018-06-29</Timeline.Item>
                        </Timeline>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Music