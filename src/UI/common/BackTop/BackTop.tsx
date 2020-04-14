import React, { useRef, useEffect, useState, useCallback } from 'react'
import './BackTop.less'
interface BackTop {
  showHeight?: number
  right?: number
  bottom?: number
  color?: string
  size?: number
  [key: string]: any
}
export default function (props: BackTop) {
  const {
    right = 40,
    bottom = 40,
    showHeight = 120,
    size = 35,
    color = '#3eaf7c',
    ...res
  } = props

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
  const scroll = useCallback(() => {
    if (window.scrollY > showHeight) {
      if (visible === 'hidden') {
        setVsible('visible')
      }
    } else {
      if (visible === 'visible') {
        setVsible('hidden')
      }
    }
  }, [visible, showHeight])
  useEffect(() => {
    document.addEventListener('scroll', scroll)
    return () => {
      document.removeEventListener('scroll', scroll)
    }
  }, [scroll])

  return (
    <div
      className="rd-backTop"
      onClick={backTop}
      style={{
        right: `${right}px`,
        bottom: `${bottom}px`,
        visibility: visible,
      }}
      {...res}
    >
      <span
        className="iconfont icon-xiangshang"
        style={{ fontSize: `${size}px`, color }}
      />
    </div>
  )
}
