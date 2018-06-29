const resEcode = '1000'
const defaultQueryParams = {
    sort:'id,desc',
    page: 0,
    size: 10
}
//url拼接参数
function encodeSearchParams(url,reqParams) {
    let params = reqParams ? reqParams : defaultQueryParams
    const paramsArr = []
    Object.keys(params).forEach((key) => {
        let value = params[key]
        // 如果值为undefined我们将其置空
        if (typeof value === 'undefined') {
            value = ''
        }
        // 对于需要编码的文本（比如说中文）我们要进行编码
        paramsArr.push([key, encodeURIComponent(value)].join('='))
    })
    return `${url}?${paramsArr.join('&')}`
}
//表单空值处理
function formDataInitHandler(initForm,form){
    let newForm = {}
    for(let i in initForm){
        if(form[i]){
            newForm[i] =  form[i]
        }else{
            newForm[i] =  initForm[i]
        }
    }
    return newForm
}
function longStrRepalceHandler(val){
    if(val){
        if(val.length > 8) {
            let a = String(val)
            let b = a.substring(0, 4)
            let c = a.substring(a.length - 4, a.length)
            return b + '***' + c
        }
        return val
    }else{
        return ''
    }
}
export {
    resEcode,
    defaultQueryParams,
    encodeSearchParams,
    formDataInitHandler,
    longStrRepalceHandler
}