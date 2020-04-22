import React, { useState, useRef, ReactNode } from 'react'
import './Rate.less'

interface Rate {
  allowHalf?: boolean
  allowClear?: boolean
  value?: number
  disabled?: boolean
  character?: string | ReactNode
  characterStyle?: React.CSSProperties
  count?: number
  onChange?: (value: number) => {}
  [key: string]: any
}
export default function (props: Rate) {
  const {
    allowHalf = false,
    allowClear = true,
    value = 0,
    disabled = false,
    onChange,
    characterStyle,
    character,
    count = 5,
    ...res
  } = props
  const [state, setState] = useState(value - 1)
  const temp = useRef<number>(value - 1)

  const initStarClass = (index: number) => {
    let className = 'iconfont icon-star'
    if (character !== undefined) {
      className = 'rd-rate-icon-custom'
    }
    if (state >= index) {
      className = `${className} icon-star-active`
    }
    return className
  }
  const handleStarClick = (index: number) => {
    //星星点击处理
    if (disabled) {
      return
    }
    setState((pre) => {
      if (pre === temp.current && allowClear) {
        temp.current = -1
        return -1
      }
      //保存状态
      temp.current = index
      return index
    })
    onChange && onChange(state - 1)
  }
  const handleStarEnter = (index: number) => {
    //移动处理
    if (disabled) {
      return
    }
    setState(index)
  }
  const handleStarLeave = () => {
    //离开处理
    if (disabled) {
      return
    }
    setState(temp.current)
  }
  return (
    <ul className="rd-rate" {...res}>
      {Array.from(new Array(count)).map((_, index) => {
        return (
          <li
            className="rd-rate-item"
            style={disabled ? {} : { cursor: 'pointer' }}
            key={index}
          >
            {allowHalf ? (
              <div className="rd-rate-frst">
                <span
                  className={initStarClass(index - 0.5)}
                  onClick={() => handleStarClick(index - 0.5)}
                  onMouseEnter={() => handleStarEnter(index - 0.5)}
                  onMouseLeave={() => handleStarLeave()}
                  style={characterStyle}
                >
                  {character}
                </span>
              </div>
            ) : null}
            <div className="rd-rate-second">
              <span
                className={initStarClass(index)}
                onClick={() => handleStarClick(index)}
                onMouseEnter={() => handleStarEnter(index)}
                onMouseLeave={() => handleStarLeave()}
                style={characterStyle}
              >
                {character}
              </span>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
