const resEcode = '1000'

function encodeSearchParams(url,params) {
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
export {
    resEcode,
    encodeSearchParams
}