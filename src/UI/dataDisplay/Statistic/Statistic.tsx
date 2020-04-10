import React, { ReactNode, useEffect, useState, useRef } from 'react'
import './Statistic.less'
import fmoney from 'src/util/fmoney'
import fdate from 'src/util/fdate'

interface Statistic {
  title?: string | ReactNode
  value?: string | number
  valueStyle?: React.CSSProperties
  prefix?: string | ReactNode
  suffix?: string | ReactNode
  precision?: number
  [key: string]: any
}

function Statistic(props: Statistic) {
  const {
    title,
    valueStyle,
    value = 0,
    prefix,
    suffix,
    precision,
    ...res
  } = props
  const initValue = () => {
    if (precision) {
      return fmoney(value, precision)
    }
    return value.toLocaleString()
  }

  return (
    <div className="rd-statistic" {...res}>
      <div className="rd-statistic-title">{title}</div>
      <div className="rd-statistic-content" style={valueStyle}>
        {prefix && (
          <span className="rd-statistic-content-prefix">{prefix}</span>
        )}
        <span className="rd-statistic-content-value">{initValue()}</span>
        {suffix && (
          <span className="rd-statistic-content-suffix">{suffix}</span>
        )}
      </div>
    </div>
  )
}

interface Countdown {
  title?: string | ReactNode
  value?: number
  valueStyle?: React.CSSProperties
  onFinished?: () => void
  [key: string]: any
}
const Countdown = (props: Countdown) => {
  const { title, value = 0, valueStyle, onFinished, ...res } = props

  const [time, setTime] = useState(value)
  const timer = useRef<NodeJS.Timeout>()
  useEffect(() => {
    timer.current = setInterval(() => {
      setTime((pre) => {
        if (pre <= 0) {
          timer.current && clearInterval(timer.current)
          onFinished && onFinished()
          return 0
        }
        return pre - 1000
      })
    }, 1000)
    return () => {
      timer.current && clearInterval(timer.current)
    }
  }, [onFinished])
  return (
    <div className="rd-statistic" {...res}>
      <div className="rd-statistic-title">{title}</div>
      <div className="rd-statistic-content" style={valueStyle}>
        <span className="rd-statistic-content-value">{fdate(time)}</span>
      </div>
    </div>
  )
}

Statistic.Countdown = Countdown
export default Statistic
