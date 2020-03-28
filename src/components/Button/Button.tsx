import React from 'react'
import './Button.less'
/**
 * tag : 2020/03/28
 * 未完成功能: loading , icon的支持
 */
interface Options {
  type?: 'primary' | 'danger' | 'success' | 'info' | 'warning' | 'secondary'
  disabled?: boolean
  href?: string
  onClick?: (event: React.MouseEvent) => void
  target?: '_blank' | '_self' | '_parent' | '_top'
  loading?: boolean | { delay: number }
  shape?: 'circle' | 'round' | 'defalut'
  block?: boolean
  size?: 'large' | 'middle' | 'small'
  children?: string
  icon?: boolean
}

export default function Button(props: Options) {
  const {
    onClick,
    type = 'primary',
    children = '',
    size = 'middle',
    disabled = false,
    shape = 'defalut',
    block = false,
    href = '',
    target = '_self'
  } = props
  /* 初始化类名 */
  const initClassName = () => {
    let className = `rd-btn rd-btn-${type}`
    if (size !== 'middle') {
      className = `${className} rd-btn-${size}`
    }
    if (shape !== 'defalut') {
      className = `${className} rd-btn-${shape}`
    }
    if (block) {
      className = `${className} rd-btn-block`
    }
    return className
  }
  /* 是否需要包裹a标签 */
  const LinkButton = () => {
    return (
      <a href={href} target={target}>
        <DefaultButton></DefaultButton>
      </a>
    )
  }
  /* 最基本的按钮 */
  const DefaultButton = () => {
    return (
      <button className={initClassName()} disabled={disabled} onClick={onClick}>
        {children}
      </button>
    )
  }

  return <>{href === '' ? <DefaultButton /> : <LinkButton />}</>
}
