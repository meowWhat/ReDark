/**@ButtonGroup 按钮群*/
import React, { ReactNode } from 'react'
import './Button-group.less'

export default function(props: { children: ReactNode; [key: string]: any }) {
  const { children, ...res } = props
  return (
    <div className="rd-btn-group" {...res}>
      {children}
    </div>
  )
}
