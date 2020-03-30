import React, { useRef, useEffect, useState } from 'react'
import './BackTop.less'
interface BackTop {
  showHeight?: number
  right?: number
  bottom?: number
}
export default function(props: BackTop) {
  const { right = 40, bottom = 40, showHeight = 120 } = props
  const [visible, setVsible] = useState<'hidden' | 'visible'>('hidden')
  let { current } = useRef<number>()
  const backTop = () => {
    if (current) {
      cancelAnimationFrame(current)
    }
    current = requestAnimationFrame(function fn() {
      let oTop = document.body.scrollTop || document.documentElement.scrollTop
      if (oTop > 0) {
        window.scrollTo(0, oTop - 50)
        current = requestAnimationFrame(fn)
      } else {
        if (current) {
          cancelAnimationFrame(current)
        }
      }
    })
  }
  useEffect(() => {
    document.onscroll = () => {
      if (window.scrollY >= showHeight) {
        if (visible === 'hidden') {
          setVsible('visible')
        }
      } else {
        if (visible === 'visible') {
          setVsible('hidden')
        }
      }
    }
  })
  return (
    <div
      className="rd-backTop"
      onClick={backTop}
      style={{
        right: `${right}px`,
        bottom: `${bottom}px`,
        visibility: visible
      }}
    >
      <span className="iconfont icon-xiangshang"></span>
    </div>
  )
}
