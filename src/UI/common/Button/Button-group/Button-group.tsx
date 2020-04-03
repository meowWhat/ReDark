/**@ButtonGroup 按钮群*/
import React, { ReactNode } from 'react'
import './Button-group.less'

interface ButtonGroup {
  children: ReactNode
  className?: string
  [key: string]: any
}

export default function(props: ButtonGroup) {
  const { children, className: cn = undefined, ...res } = props
  const initClassName = () => {
    let className = 'rd-btn-group'
    if (cn !== undefined) {
      className = `${className} ${cn}`
    }
    return className
  }
  return (
    <div className={initClassName()} {...res}>
      {children}
    </div>
  )
}
