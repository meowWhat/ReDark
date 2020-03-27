import React from 'react'
import './Button.less'

interface Options {
  type?: 'primary' | 'danger' | 'success'
  disabled?: boolean
  href?: string
  onClick?: (event: React.MouseEvent) => void
  target?: '_blank' | '_self' | '_parent' | '_top'
  loading?: boolean | { delay: number }
  shape?: 'large ' | 'middle' | 'small'
  block?: boolean
  size?: string
  children: string
}

export default function Button(
  props: Options = {
    type: 'primary',
    disabled: false,
    href: 'default',
    onClick: () => {},
    target: '_self',
    loading: false,
    shape: 'middle',
    block: false,
    size: 'middle',
    children: ''
  }
) {
  const { onClick, type, children, size } = props
  return (
    <button
      onClick={onClick}
      className={`rd-btn rd-btn-${type} rd-btn-${size}`}
    >
      {children}
    </button>
  )
}
