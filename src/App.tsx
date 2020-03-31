import React, { useState, useEffect, useRef } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { Nav, Home, Docs } from './views'
import { Progress } from './components'
import { debounce } from './util/debounce'
import { BackTop } from './UI'
import './basic/basic.less'
import './font_4k9zmblakkf/iconfont.css'
import logo from './basic/img/logo.png'

const navItems = [
  { text: '快速入门', url: '/quick' },
  { text: '组件文档', url: '/docs' },
  {
    text: '博客地址',
    url: 'https://www.zhihu.com/people/chen-jia-hao-66-95/columns',
    isStaticRouter: false
  },
  {
    text: 'GitHub',
    url: 'https://github.com/meowWhat/ReDark',
    isStaticRouter: false
  }
]
const homeImg = {
  src: logo,
  alt: 'ReDark'
}

/* 最佳实践! */
function App(props: any) {
  let time = useRef<NodeJS.Timeout>()
  const [flag, setFlag] = useState<boolean>(false)

  useEffect(() => {
    /* 监听路由的变化 */
    props.history.listen(() => {
      /*页面回到顶部 */
      if (document.body.scrollTop || document.documentElement.scrollTop > 0) {
        window.scrollTo(0, 0)
      }
      /* 进度条控制 */
      debounce(() => {
        setFlag(true)
        time.current = setTimeout(() => {
          setFlag(false)
          if (time.current !== undefined) {
            clearTimeout(time.current)
          }
        }, 900)
      }, 150)()
    })
  })

  return (
    <>
      {/* 导航 */}
      <Nav nav={navItems} siteName="ReDark" />
      {/* 主页 */}
      <Route path="/" exact>
        <Home img={homeImg} />
      </Route>
      {/* 文档 */}
      <Route path="/docs" component={Docs}></Route>
      {/* 进度条控制 */}
      <Progress flag={flag}></Progress>
      {/* 回到顶部 */}
      <BackTop />
    </>
  )
}

export default withRouter(App)
