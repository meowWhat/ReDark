const path = require('path')
const { override, addLessLoader, addWebpackAlias } = require('customize-cra')
module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
    localIdentName: '[local]--[hash:base64:5]'
  }),
  addWebpackAlias({
    src: path.resolve(__dirname, 'src')
  })
)
