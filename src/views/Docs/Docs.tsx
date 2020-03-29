/**@Docs 文档界面 */
import React from 'react'
import './Docs.less'
import { Sidebar, DemoBox } from '../../components'

export default function Docs() {
  return (
    <article className="docs">
      <Sidebar></Sidebar>
      <main className="docs-main">
        <section className="docs-content">
          <DemoBox Components={<h1>123</h1>} Code={<h1>456</h1>}></DemoBox>
        </section>
      </main>
    </article>
  )
}
