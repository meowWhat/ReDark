/**@Docs 文档界面 */
import React, { Suspense, FunctionComponent } from 'react'
import { Route, Redirect } from 'react-router-dom'
import './index.less'

import { Sidebar } from '../../components'
import * as docsManage from './DocsManage'

/* 生成侧边栏路由表(link 表) */

const sidebarGroup = [
  {
    group: [
      { url: '/docs/button', text: 'Button', chineseText: '按钮' },
      { url: '/docs/switch', text: 'Switch', chineseText: '开关' },
      { url: '/docs/spin', text: 'Spin', chineseText: '加载中' },
      { url: '/docs/tag', text: 'Tag', chineseText: '标签' },
      { url: '/docs/backTop', text: 'BackTop', chineseText: '回到顶部' }
    ],
    title: '单一组件'
  }
]

/* 生成组件对应的路由表(path 表) */
interface DocsRoute {
  comp: FunctionComponent
  path: string
}
const routerTable: Array<DocsRoute> = []

Object.keys(docsManage).forEach((key) => {
  routerTable.push({
    comp: (docsManage as any)[key],
    path: `/docs/${key.slice(0, key.length - 4).toLocaleLowerCase()}`
  })
})

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
      <Sidebar groupArr={sidebarGroup} />
      <RouteRender />
    </article>
  )
}
