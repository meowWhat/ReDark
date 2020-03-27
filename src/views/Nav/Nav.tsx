import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.less'

export default function Nav(props: {
  nav: Array<{ text: string; url: string }>
  siteName: string
  search?: boolean
}) {
  const { nav, siteName } = props
  return (
    <header className="navbar">
      <span className="navbar-sitename">{siteName}</span>
      <nav className="nav-items">
        {nav.map((el, index) => {
          return (
            <Link to={el.url} key={index} className="nav-item">
              {el.text}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}
