/**
 * @SidebarGroup 侧边栏集群 多个group 组成 sidebar
 */
import React from 'react'
import './SidebarGroup.less'
import { NavLink } from 'react-router-dom'

/**
 * @title 集群分类标题
 * @group 集群具体内容 url:路由地址 text:名称 chineseText:中文名
 */
interface SidebarGroup {
  title: string
  group: Array<{ url: string; text: string; chineseText: string }>
}

export default function SidebarGroup(props: SidebarGroup) {
  const { group = [], title = '' } = props
  return (
    <>
      <section className="sidebar-group">
        {/* title */}
        <abbr className="sidebar-group-title" title={title}>
          {title}
        </abbr>
        <ul>
          {/*item */}
          {group.map((el, index) => {
            const { url, text, chineseText } = el
            return (
              <li key={text + index}>
                <NavLink
                  to={url}
                  className="sidebar-group-item"
                  activeClassName="sidebar-group-item-active"
                >
                  <span>{text}</span>
                  <span className="chinese">{chineseText}</span>
                </NavLink>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}
