import React from 'react'
import './Skeleton.less'

interface Skeleton {
  avatar?: boolean
  rows?: number
  title?: boolean
  loading?: boolean
  active?: boolean
  footer?: boolean
  [key: string]: any
}
export default function (props: Skeleton) {
  const {
    avatar = false,
    rows = 2,
    title = true,
    loading = true,
    active = false,
    footer = true,
    ...res
  } = props
  const getSkeletonClassName = () => {
    /* 控制骨架平的 active  与 显示隐藏 */
    if (loading === false) {
      return 'rd-skeleton-hide'
    }
    let className = 'rd-skeleton'
    if (active === true) {
      className = `${className} rd-skeleton-active`
    }
    return className
  }

  const getTitleClassName = () => {
    let className = 'rd-skeleton-item'
    if (avatar) {
      className = `${className}  rd-skeleton-title-withavatar`
    } else {
      className = `${className} rd-skeleton-title-withoutavatar`
    }
    return className
  }
  return (
    <div className={getSkeletonClassName()} {...res}>
      {/* 是否显示avatar */}
      {avatar ? (
        <div className="rd-skeleton-header">
          <span className="rd-skeleton-avatar" />
        </div>
      ) : null}
      {title || footer || rows > 0 ? (
        <div className="rd-skeleton-content">
          {/* 是否显示 title */}
          {title ? <div className={getTitleClassName()} /> : null}
          <ul>
            {/* li的数量取决于 rows */}
            {Array.from(new Array(rows)).map((_, index) => (
              <li key={index + Date.now()} />
            ))}
          </ul>
          {footer ? (
            <div className="rd-skeleton-item rd-skeleton-footer" />
          ) : null}
        </div>
      ) : null}
    </div>
  )
}
