/**
 * @Sidebar 侧边栏
 */
import React, { useState } from 'react'
import './Sidebar.less'
import SidebarGroup from './SidebarGroup/SidebarGroup'
import { Sidebar } from '..'

/**
 *  @groupArr  侧边栏数组
 */
interface Group {
  url: string
  text: string
  chineseText: string
}
interface Sidebar {
  groupArr: Array<{ group: Array<Group>; title: string }>
}

export default function (props: Sidebar) {
  const { groupArr = [] } = props
  const [active, setActive] = useState(false)
  const initIconClass = () => {
    let className = 'iconfont icon-xiangyou sidebar-icon-default'
    if (active) {
      className = `${className} sidebar-icon-active`
    }
    return className
  }
  const initSiderbarClass = () => {
    let className = 'sidebar'
    if (active) {
      className = `${className} sidebar-active`
    }
    return className
  }
  return (
    <>
      <span
        className={initIconClass()}
        onClick={() => setActive((pre) => !pre)}
      />
      <aside className={initSiderbarClass()}>
        <ul className="sidebar-links">
          {groupArr.map((arr) => {
            const { group, title } = arr
            return (
              <li key={title}>
                <SidebarGroup group={group} title={title} />
              </li>
            )
          })}
        </ul>
      </aside>
    </>
  )
}
