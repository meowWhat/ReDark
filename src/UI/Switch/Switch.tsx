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
  onChange?: () => void
  disabled?: boolean
  [key: string]: any
}

export default function(props: Switch) {
  const {
    type = 'default',
    onChange = undefined,
    disabled = false,
    ...res
  } = props

  const [flag, setFlag] = useState(true)
  const changeSwitch = () => {
    if (disabled !== true) {
      setFlag(!flag)
      if (onChange !== undefined) {
        onChange()
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
    return className
  }

  return <span className={getClassName()} onClick={changeSwitch} {...res} />
}
