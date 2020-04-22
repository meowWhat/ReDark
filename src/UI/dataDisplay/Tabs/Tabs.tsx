import React, { useState, useEffect, useRef, ReactNode } from 'react'
import './Tabs.less'

interface Tabs {
  defaultActiveKey?: number
  arr?: Array<{
    title: string | ReactNode
    content: string | ReactNode
    closable?: boolean
  }>
  onChange?: (key: number) => void
  type?: 'card' | 'default'
  position?: 'left' | 'right' | 'default'
  [key: string]: any
}

export default function (props: Tabs) {
  const {
    defaultActiveKey = 0,
    arr = [],
    onChange,
    type = 'default',
    position = 'default',
    ...res
  } = props
  const [value, setValue] = useState(defaultActiveKey)
  const [bottom, setBottom] = useState({ width: 0, left: 0, top: 0, height: 0 })
  let ref: any = useRef()

  /* 组件挂在完成 ,bootom 滚动到正确位置 */
  useEffect(() => {
    if (ref.current) {
      const temp = ref.current.childNodes[defaultActiveKey]
      setBottom({
        width: temp.offsetWidth,
        left: temp.offsetLeft,
        top: temp.offsetTop,
        height: temp.offsetHeight,
      })
      setValue(defaultActiveKey)
    }
  }, [defaultActiveKey, position])

  /* type ,position,API支持 */
  const getTabsClassName = () => {
    let className = 'rd-tabs'
    if (position === 'left') {
      className = `rd-tabs-left`
    }
    if (position === 'right') {
      className = `rd-tabs-right`
    }
    if (type === 'card') {
      className = `${className} rd-tabs-card`
    }
    return className
  }
  /* tabItem 活跃时样式  */
  const getActiveClassName = (key: number) => {
    let className = 'rd-tabs-header-title'

    if (key === value) {
      return `${className} rd-tabs-header-title-active`
    }
    return className
  }

  /* 每次点击 滚动bottom ,触发onchange回调*/
  const tabItemClick = (key: number, e: any) => {
    setValue(key)
    setBottom({
      width: e.target.offsetWidth,
      left: e.target.offsetLeft,
      top: e.target.offsetTop,
      height: e.target.offsetHeight,
    })
    onChange && onChange(key)
  }

  /* 获取 bottom的style */
  const getBottomStyle = () => {
    if (position === 'default') {
      return {
        width: `${bottom.width}px`,
        transform: `translateX(${bottom.left}px)`,
      }
    }
    if (position === 'left' || position === 'right') {
      return {
        height: `${bottom.height}px`,
        transform: `translateY(${bottom.top}px)`,
      }
    }
  }

  /*关闭tab支持*/
  const closeClick = (e: any) => {
    // 阻止冒泡
    e.stopPropagation()

    e.target.parentNode.style.display = 'none'
  }

  return arr.length > 0 ? (
    <div className={getTabsClassName()} {...res}>
      <header className="rd-tabs-header" ref={ref}>
        {arr.map((el, index) => {
          return (
            <span
              className={getActiveClassName(index)}
              key={index}
              onClick={(e) => tabItemClick(index, e)}
            >
              {el.title}
              {el.closable ? (
                <span
                  className="rd-tabs-header-title-close"
                  onClick={closeClick}
                >
                  X
                </span>
              ) : null}
            </span>
          )
        })}
        <div className="rd-tabs-header-active" style={getBottomStyle()} />
      </header>
      <article className="rd-tabs-content">{arr[value].content}</article>
    </div>
  ) : null
}
