/**@Docs 文档界面 */
import React, { Suspense } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Sidebar } from '../../components'
import { BackTopDocs, ButtonDocs, SwitchDocs } from './DocsManage'
import './Docs.less'

/* 组件对应的路由表 */
const routerTable = [
  { comp: ButtonDocs, path: '/docs/button' },
  { comp: BackTopDocs, path: '/docs/backTop' },
  { comp: SwitchDocs, path: '/docs/switch' }
]

/* 解析展示路由表*/
const RouteRender = () => {
  return (
    <main className="docs-main">
      <section className="docs-content">
        {routerTable.map((el) => {
          const { comp: Comp, path } = el
          return (
            <Route path={path} key={path}>
              <Suspense fallback={'loading~~~'}>
                <Comp />
              </Suspense>
            </Route>
          )
        })}
        <Route path="/docs">
          <Redirect to="/docs/button"></Redirect>
        </Route>
      </section>
    </main>
  )
}

export default function Docs() {
  return (
    <article className="docs">
      <Sidebar />
      <RouteRender />
    </article>
  )
}
