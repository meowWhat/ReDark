/**
 * @Sidebar 侧边栏
 */
import React from 'react'
import './Sidebar.less'
import SidebarGroup from './SidebarGroup/SidebarGroup'

/**
 * ---暂无参数
 */
const group = [
  { url: '/docs/button', text: 'Button', chineseText: '按钮' },
  { url: '/docs/backTop', text: 'BackTop', chineseText: '回到顶部' },
  { url: '/docs/switch', text: 'Switch', chineseText: '开关' },
  { url: '/docs/bsd', text: 'icon', chineseText: '图标' }
]

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <ul className="sidebar-links">
        <li>
          <SidebarGroup group={group} title="单一组件"></SidebarGroup>
        </li>
      </ul>
    </aside>
  )
}
