import React from 'react'
import Footer from './Footer/Footer'
import { Button } from '../../components'

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
          <Button>快速开始</Button>
        </p>
      </section>
      <Footer text="MIT Licensed | Copyright © make heart by cjh" />
    </article>
  )
}
