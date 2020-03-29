import React from 'react'
import './Sidebar.less'
import SidebarGroup from './SidebarGroup/SidebarGroup'

const group = [
  { url: '/docs/bb', text: 'Button', chineseText: '按钮' },
  { url: '/docs/asd', text: 'nav', chineseText: '导航' },
  { url: '/docs/bsd', text: 'icon', chineseText: '图标' },
  { url: '/docs/qsd', text: 'BackTop', chineseText: '回到顶部' }
]

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <ul className="sidebar-links">
        <li>
          <SidebarGroup group={group} title="通用"></SidebarGroup>
        </li>
      </ul>
    </aside>
  )
}
