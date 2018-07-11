import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from "react-redux"
import routes from './router/router'
import store from './store'
import './index.less'


ReactDOM.render(
    <Provider store={store}>
        <div className="root-content-wrapper">
            {routes}
        </div>
    </Provider>,
    document.getElementById('root')
)
/*
  每个组件render函数内有必须包含一个根元素；
  react-redux 是将独立的redux和react结合起来，react-redux核心分为两个部分：Provider、connect
  Provider:将redux中store传递到内部的其他组件，让组件可以享有store,并提供对state的更新
  connect:共有四个参数，但我这里只说基本的两个，mapStateToProps和mapDispatchToProps
  1.mapStateToProps把状态绑定到组件的属性当中。我们定义的state对象有哪些属性，在我们组件的props都可以查阅和获取。
    const mapStateToProps = (state, ownProps) => {
      return {tableIndex:state.tableIndex}
    }
  2.mapDispatchToProps：return一个dispatch函数，将该方法绑定到属性上，我们同样可以在props查看和调用。

  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeActive:(args)=>dispatch({type:"changeTable",data:args})
    }
  }

*/