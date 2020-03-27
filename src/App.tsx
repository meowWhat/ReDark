import React from 'react'
import { Nav, Home } from './views'

import './basic/basic.less'
import logo from './basic/img/logo.png'

const navItems = [
  { text: '快速入门', url: 'http://www.baidu.com/' },
  { text: '组件文档', url: 'http://www.baidu.com/' },
  { text: '博客地址', url: 'http://www.baidu.com/' },
  { text: 'GitHub', url: 'http://www.baidu.com/' }
]
const homeImg = {
  src: logo,
  alt: 'ReDark'
}

export default function App() {
  return (
    <>
      <Nav nav={navItems} siteName="ReDark" />
      <Home img={homeImg} />
    </>
  )
}
