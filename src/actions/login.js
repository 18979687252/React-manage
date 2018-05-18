
export const LOGINMODAL_SHOW = "LOGINMODAL_SHOW"

//验证
export function UserValid(data){
    return function (dispatch){
        // Ajax.getAjax("http://localhost:3000/user?username="+data.username+"&password="+data.password,function(response){
        //     if(response.data.length > 0){
        //         hashHistory.push("/user")
        //         //将登录状态使用本地存储的方式存起来以便验证是否登录
        //         localStorage.setItem("username", data.username);
        //     } else {
        //         notification.error({
        //             message: '登录失败',
        //             description: `用户名或密码错误，请重新登录！！！`,
        //             duration: 2,
        //         });
        //     }
        // });
    }
}

//点击登录时控制弹出框的显示与隐藏,将状态值保存至display中
export function showLoginModal(display){
    return{
        type:LOGINMODAL_SHOW,
        display
    }
}