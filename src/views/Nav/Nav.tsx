/**
 * @Nav 顶部导航栏
 */
import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Nav.less'

export default function Nav(props: {
  nav: Array<{ text: string; url: string; isStaticRouter?: boolean }>
  siteName: string
  search?: boolean
}) {
  const { nav, siteName } = props
  const [itemsShow, setItemsShow] = useState(false)
  const initItemsClass = () => {
    let className = 'nav-items'
    if (!itemsShow) {
      className = `${className} nav-items-hide`
    }
    return className
  }
  return (
    <header className="navbar">
      <Link to="/">
        <span className="navbar-sitename">{siteName}</span>
      </Link>
      <nav className={initItemsClass()}>
        {nav.map((el, index) => {
          if (el.isStaticRouter === false) {
            return (
              <a
                href={el.url}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="nav-item"
              >
                {el.text}
              </a>
            )
          }
          return (
            <NavLink
              to={el.url}
              key={index}
              className="nav-item"
              activeClassName="nav-item-active"
            >
              {el.text}
            </NavLink>
          )
        })}
      </nav>
      <div className="navbar-media nav-item">
        <span
          className="iconfont icon-jia"
          onClick={() => {
            setItemsShow((pre) => !pre)
          }}
        />
      </div>
    </header>
  )
}
