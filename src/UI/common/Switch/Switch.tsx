/**@Switch 开关组件 */
import React, { useState } from 'react'
import './Switch.less'

/**
 * @type 按钮的类型
 * @onChange 状态改变的回调事件
 * @disabled 禁用状态
 */

interface Switch {
  type?: 'default' | 'colorful'
  initState?: boolean
  onChange?: (e: React.MouseEvent) => void
  disabled?: boolean
  className?: string
  [key: string]: any
}

export default function(props: Switch) {
  const {
    type = 'default',
    initState = true,
    onChange = undefined,
    disabled = false,
    className: cn = undefined,
    ...res
  } = props

  const [flag, setFlag] = useState(initState)
  const changeSwitch = (event: React.MouseEvent) => {
    if (disabled !== true) {
      setFlag(!flag)
      if (onChange !== undefined) {
        onChange(event)
      }
    }
  }
  const getClassName = () => {
    /* 初始化class */
    let className = 'rd-switch'
    if (type === 'default') {
      className = flag ? className : `${className} rd-switch-close`
    } else if (type === 'colorful') {
      className = `${className} rd-switch-colorful`
      className = flag ? className : `${className} rd-switch-colorful-close`
    }
    if (disabled === true) {
      className = `${className} rd-switch-disabled`
    }
    if (cn !== undefined) {
      className = `${className} ${cn}`
    }
    return className
  }

  return <span className={getClassName()} onClick={changeSwitch} {...res} />
}
