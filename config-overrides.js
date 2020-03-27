const { override, addLessLoader } = require('customize-cra')
module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
    localIdentName: '[local]--[hash:base64:5]'
  })
)
