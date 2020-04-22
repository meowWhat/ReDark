/**
 * @Tag 标签
 */
import React from 'react'
import './Tag.less'

interface Tag {
  color?: string | undefined
  type?:
    | 'default'
    | 'magenta'
    | 'red'
    | 'volcano'
    | 'orange'
    | 'gold'
    | 'lime'
    | 'green'
    | 'cyan'
    | 'blue'
    | 'geekblue'
    | 'purple'
  closable?: boolean
  visible?: boolean
  onClose?: (e: React.MouseEvent<HTMLSpanElement>) => void
  children?: any
  className?: string
  [key: string]: any
}
export default function (props: Tag) {
  const {
    color = undefined,
    type = 'default',
    visible = true,
    closable = false,
    onClose,
    children,
    className: cn = undefined,
    ...res
  } = props

  const getClassName = () => {
    if (visible === false) {
      return 'rd-tag-hidden'
    }
    let className = 'rd-tag'
    if (type !== 'default' && color === undefined) {
      className = `${className} rd-tag-${type}`
    }
    if (cn !== undefined) {
      className = `${className} ${cn}`
    }
    return className
  }

  const getStyle = () => {
    if (color !== undefined) {
      return { color: '#fff', borderColor: color, backgroundColor: color }
    }
  }

  return (
    <span className={getClassName()} style={getStyle()} {...res}>
      {children}
      {closable ? (
        <span className="rd-tag-close" onClick={onClose}>
          x
        </span>
      ) : (
        <></>
      )}
    </span>
  )
}
