/**@Docs 文档界面 */
import React from 'react'
import './Docs.less'
import { Sidebar } from '../../components'
import ButtonDocs from './ButtonDocs'
import TableDocs from './BackTopDocs'
import { Route, Redirect } from 'react-router-dom'
export default function Docs() {
  return (
    <article className="docs">
      <Sidebar></Sidebar>
      <main className="docs-main">
        <section className="docs-content">
          <ButtonDocs></ButtonDocs>
          <TableDocs></TableDocs>
          <Route path="/docs">
            <Redirect to="/docs/button"></Redirect>
          </Route>
        </section>
      </main>
    </article>
  )
}
