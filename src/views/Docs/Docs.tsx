/**@Docs 文档界面 */
import React from 'react'
import './Docs.less'
import { Sidebar } from '../../components'
import ButtonDocs from './ButtonDocs'
export default function Docs() {
  return (
    <article className="docs">
      <Sidebar></Sidebar>
      <main className="docs-main">
        <section className="docs-content">
          <ButtonDocs></ButtonDocs>
        </section>
      </main>
    </article>
  )
}
