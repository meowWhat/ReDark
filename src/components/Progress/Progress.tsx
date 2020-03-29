import React, { createRef, useEffect } from 'react'
import './Progress.less'
interface Options {
  flag: boolean | null
}
export default function Progress(props: Options) {
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
