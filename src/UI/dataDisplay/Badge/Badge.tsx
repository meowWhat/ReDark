import React, { ReactNode } from 'react'
import './Badge.less'

interface Badge {
  color?: string //自定义小圆点的颜色
  count?: number //展示的数字，大于 overflowCount 时显示为 ${overflowCount}+，为 0 时隐藏
  dot?: boolean //不展示数字，只有一个小红点
  overflowCount?: number // 展示封顶的数字值
  children?: ReactNode
  [key: string]: any
}

export default function (props: Badge) {
  const {
    color,
    count = 0,
    dot = false,
    overflowCount = 99,
    children,
    ...res
  } = props
  const getClassName = () => {
    let className = 'rd-badge-content'
    if (dot === true) {
      return `${className} rd-badge-dot`
    }
    if (count && count > 0) {
      className = `${className} rd-badge-count`
    } else {
      className = `${className} rd-badge-hide`
    }
    return className
  }

  const getBadgeCount = () => {
    //正确展示badge 的count
    if (dot === true) {
      return null
    }
    let res = ''
    if (count && count > overflowCount) {
      res = `${overflowCount}+`
    } else {
      res = count + ''
    }
    return res
  }
  return (
    <div className="rd-badge" {...res}>
      {children}
      <div className={getClassName()} style={{ backgroundColor: color }}>
        {getBadgeCount()}
      </div>
    </div>
  )
}
