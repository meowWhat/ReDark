/**
 * @Sidebar 侧边栏
 */
import React from 'react'
import './Sidebar.less'
import SidebarGroup from './SidebarGroup/SidebarGroup'

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

export default function(props: Sidebar) {
  const { groupArr = [] } = props
  return (
    <aside className="sidebar">
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
  )
}
