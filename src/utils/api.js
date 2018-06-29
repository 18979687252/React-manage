const baseUrl = '/ccts/api'
const admin = '/admin'
const account = '/account'
const user = '/user'
const subAccount = '/subaccount'
const symbol = '/symbol'
const exchange = '/exchange'
const all = '/all'
//url
const loginUrl = '/ccts/auth/login'
//admin
const adminUrl = baseUrl + admin
//account
const accountUrl = baseUrl + account
const allAccountUrl = accountUrl + all
//subaccount
const subAccountUrl = baseUrl + subAccount
const subAccountBalanceUrl = baseUrl + '/subaccountBalance'
//symbol
const symboltUrl = baseUrl + symbol
//user
const userUrl = baseUrl + user
//exchange
const exchangeUrl = baseUrl + exchange
//order
const orderUrl = baseUrl + '/order/all'
//trader
const tradeUrl = baseUrl + '/trade/all'

export {
    loginUrl,
    accountUrl,
    allAccountUrl,
    adminUrl,
    subAccountUrl,
    symboltUrl,
    userUrl,
    exchangeUrl,
    orderUrl,
    tradeUrl,
    subAccountBalanceUrl
}
