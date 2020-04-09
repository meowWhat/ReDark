/**@Docs 文档界面 */
import React, { Suspense, FunctionComponent } from 'react'
import { Route, Redirect } from 'react-router-dom'
import './index.less'

import { Sidebar } from 'src/components'
import { Spin } from 'src/UI'

import docsManage from './DocsManage'

/* 生成侧边栏路由表(link 表) */

const sidebarGroup = [
  {
    group: [
      { url: '/docs/button', text: 'Button', chineseText: '按钮' },
      { url: '/docs/switch', text: 'Switch', chineseText: '开关' },
      { url: '/docs/tag', text: 'Tag', chineseText: '标签' },
      { url: '/docs/backtop', text: 'BackTop', chineseText: '回到顶部' },
    ],
    title: '通用',
  },
  {
    group: [
      { url: '/docs/alert', text: 'Alert', chineseText: '警告' },
      { url: '/docs/spin', text: 'Spin', chineseText: '加载中' },
      {
        url: '/docs/modal',
        text: 'Modal',
        chineseText: '模态框',
      },
      {
        url: '/docs/result',
        text: 'Result',
        chineseText: '结果',
      },
      {
        url: '/docs/skeleton',
        text: 'Skeleton',
        chineseText: '骨架屏',
      },
      { url: '/docs/message', text: 'Message', chineseText: '全局提示' },
    ],
    title: '反馈',
  },
  {
    group: [
      { url: '/docs/badge', text: 'Badge', chineseText: '徽标' },
      { url: '/docs/tree', text: 'Tree', chineseText: '树形控件' },
    ],
    title: '数据展示',
  },
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
    path: `/docs/${key.slice(0, key.length - 4).toLocaleLowerCase()}`,
  })
})

/* 解析展示路由表*/

const RouteRender = () => {
  return (
    <main className="docs-main">
      <section className="docs-content">
        <Suspense fallback={<Spin delay={100} spinning={true} />}>
          {routerTable.map((el) => {
            const { comp: Comp, path } = el
            return (
              <Route path={path} key={path}>
                <Comp />
              </Route>
            )
          })}
        </Suspense>
        <Route path="/docs">
          <Redirect to="/docs/button" />
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
