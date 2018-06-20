const baseUrl = '/ccts/api'

const admin = '/admin'
const account = '/account'
const user = '/user'
const subAccount = '/subaccount'
const symbol = '/symbol'
const exchange = '/exchange'
//url
const loginUrl = '/ccts/auth/login'
const adminUrl = baseUrl + admin
const accountUrl = baseUrl + account
const subAccountUrl = baseUrl + subAccount
const subAccountBalanceUrl = baseUrl + '/subaccountBalance'
const symboltUrl = baseUrl + symbol
const userUrl = baseUrl + user
const exchangeUrl = baseUrl + exchange
const orderUrl = baseUrl + '/order/all'
const tradeUrl = baseUrl + '/trade/all'

module.exports = {
    loginUrl,
    adminUrl,
    accountUrl,
    subAccountUrl,
    symboltUrl,
    userUrl,
    exchangeUrl,
    orderUrl,
    tradeUrl,
    subAccountBalanceUrl
}
