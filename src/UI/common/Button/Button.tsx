/**
 * @Button 按钮组件
 */
import React from 'react'
import './Button.less'
/**
 * tag : 2020/03/28
 * 未完成功能: loading , icon的支持
 * @type 按钮的类型,主要区别为按钮的颜色
 * @disabled 是否禁用按钮
 * @href 是否启用按钮的link效果
 * @target 启用link效果后的 链接行为
 * @onClick 点击回调事件
 * @loading -------未完成
 * @shape 按钮形状
 * @size  按钮大小
 * @block 是否为块级按钮
 * @children 按钮内的text内容
 */

interface Button {
  type?:
    | 'default'
    | 'primary'
    | 'danger'
    | 'success'
    | 'info'
    | 'warning'
    | 'secondary'
  disabled?: boolean
  href?: string
  onClick?: (event: React.MouseEvent) => void
  target?: '_blank' | '_self' | '_parent' | '_top'
  shape?: 'circle' | 'round' | 'defalut'
  block?: boolean
  size?: 'large' | 'middle' | 'small'
  children?: string | any
  className?: string
  [key: string]: any
}

export default function (props: Button) {
  const {
    onClick,
    type = 'default',
    children = '',
    size = 'middle',
    disabled = false,
    shape = 'defalut',
    block = false,
    href = '',
    target = '_self',
    className: cn = undefined,
    ...rest
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
    if (cn !== undefined) {
      className = `${className} ${cn}`
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
      <button
        className={initClassName()}
        disabled={disabled}
        onClick={onClick}
        {...rest}
      >
        {children}
      </button>
    )
  }

  return <>{href === '' ? <DefaultButton /> : <LinkButton />}</>
}
