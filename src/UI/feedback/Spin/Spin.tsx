import React, { useEffect, useState, useRef } from 'react'
import './Spin.less'
interface Spin {
  spinning?: boolean
  size?: 'default' | 'small' | 'large'
  color?: string
  tip?: string
  delay?: number
  simple?: boolean
  children?: any
  [key: string]: any
}

export default function(props: Spin) {
  const {
    spinning = false,
    size = 'default',
    color = 'default',
    tip = 'default',
    simple = false,
    delay = 0,
    children = undefined,
    ...res
  } = props
  let [flag, setFlag] = useState(false)

  let temp = useRef<NodeJS.Timeout>()
  useEffect(() => {
    /* 加入延迟效果 */
    if (spinning === true) {
      temp.current = setTimeout(() => {
        setFlag(true)
      }, delay)
    } else {
      setFlag(false)
    }
    return () => {
      if (temp.current) {
        clearTimeout(temp.current)
      }
    }
  }, [spinning, delay])
  /* default comp */
  const getClssName = () => {
    let className = 'rd-spin'

    if (size !== 'default') {
      className = `${className} rd-spin-${size}`
    }
    if (flag === true) {
      className = `${className} rd-spin-spinning`
    }
    if (simple) {
      className = `${className} rd-spin-simple`
    }
    return className
  }
  const getBgStyle = () => {
    let style: { [key: string]: string } = {}
    if (color !== 'default') {
      style.backgroundColor = color
    }
    return style
  }
  const getFontStyle = () => {
    let style: { [key: string]: string } = {}
    if (color !== 'default') {
      style.color = color
    }
    return style
  }
  const defaultComp = () => {
    return (
      <div className={getClssName()} style={getFontStyle()} {...res}>
        <span
          className="rd-spin-dot"
          style={
            simple && color !== 'default' ? { borderLeftColor: color } : {}
          }
        >
          {[0, 0, 0, 0].map((_, index) => {
            return (
              <i
                className="rd-spin-dot-item"
                style={getBgStyle()}
                key={index}
              />
            )
          })}
        </span>
        {tip === 'default' ? (
          <></>
        ) : (
          <span className="rd-spin-text">{tip}</span>
        )}
      </div>
    )
  }

  /* withChildren */

  const withChlidren = () => {
    return (
      <div className="rd-spin-child">
        {defaultComp()}
        <div className={flag ? 'rd-spin-childhid' : 'rd-spin-childshow'}>
          {children}
        </div>
      </div>
    )
  }

  return <>{children === undefined ? defaultComp() : withChlidren()}</>
}
