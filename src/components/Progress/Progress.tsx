/**
 * @Progress 网站进度条
 */
import React, { createRef, useEffect } from 'react'
import './Progress.less'

/**
 * @flag 控制进度条的显示隐藏。
 */
interface Progress {
  flag: boolean | null
}
export default function(props: Progress) {
  const div = createRef<HTMLDivElement>()
  const { flag } = props
  useEffect(() => {
    if (div.current) {
      if (flag) {
        div.current.className = 'progress progress-start'
      } else {
        div.current.className = 'progress progress-end'
      }
    }
  })
  return <div className="progress" ref={div}></div>
}
