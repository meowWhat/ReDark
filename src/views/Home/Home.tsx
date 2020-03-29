import React from 'react'

import { Button, Footer } from '../../components'
import { Link } from 'react-router-dom'
import './Home.less'

export default function Home(props: { img: { src: string; alt: string } }) {
  const { img } = props
  return (
    <article className="home">
      <section>
        <img className="home-logo" src={img.src} alt={img.alt} />
        <h1 className="home-title">ReDark</h1>
        <p className="home-description">React 驱动的 UI 组件库</p>
        <p className="home-description">
          <Link to="/docs">
            <Button type="success" size="large">
              快速上手
            </Button>
          </Link>
        </p>
      </section>
      <Footer text="MIT Licensed | Copyright © make heart by cjh" />
    </article>
  )
}
