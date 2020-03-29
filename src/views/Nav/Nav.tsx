import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Nav.less'

export default function Nav(props: {
  nav: Array<{ text: string; url: string; isStaticRouter?: boolean }>
  siteName: string
  search?: boolean
}) {
  const { nav, siteName } = props
  return (
    <header className="navbar">
      <Link to="/">
        <span className="navbar-sitename">{siteName}</span>
      </Link>
      <nav className="nav-items">
        {nav.map((el, index) => {
          if (el.isStaticRouter === false) {
            return (
              <a href={el.url} key={index} className="nav-item">
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
    </header>
  )
}
