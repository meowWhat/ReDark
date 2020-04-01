/**
 * @Progress 网站进度条
 */
import React from 'react'
import './Progress.less'

/**
 * @flag 控制进度条的显示隐藏。
 */
interface Progress {
  flag: boolean | null
}
export default function(props: Progress) {
  const { flag } = props
  const getClssName = () => {
    let className = 'progress'
    if (flag) {
      className = `${className} progress-start`
    } else {
      className = `${className} progress-end`
    }
    return className
  }
  return <div className={getClssName()}></div>
}
