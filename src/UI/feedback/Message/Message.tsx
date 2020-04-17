import React, { useEffect, useState, useRef } from 'react'
import './Message.less'
import { Spin } from 'src/UI'
import getIcon from 'src/util/getIconClass'

/* message 容器 */
interface Message {
  notices: Array<NoticeProps>
  [key: string]: any
}
export function Message(props: Message) {
  const { notices, ...res } = props
  return (
    <div className="rd-message" {...res}>
      {notices.map((el, index) => {
        return <Noitce {...el} key={index + Date.now()} />
      })}
    </div>
  )
}

export interface NoticeProps {
  delay?: number
  text?: string
  type?: 'success' | 'error' | 'warning' | 'info' | 'loading'
  isShow?: boolean
  color?: string
  onClose?: () => void
}

/* message实体 */
const Noitce = (props: NoticeProps) => {
  const {
    delay = 1000,
    text = '',
    type = 'success',
    isShow = true,
    onClose,
    color,
  } = props
  const [flag, setFlag] = useState(isShow)
  let temp = useRef<NodeJS.Timeout>()
  useEffect(() => {
    temp.current = setTimeout(() => {
      setFlag(false)
      if (onClose) {
        onClose()
      }
    }, delay)
    return () => {
      if (temp.current) {
        clearTimeout(temp.current)
      }
    }
  })

  return (
    <div className={flag ? 'rd-message-notice' : 'rd-message-hide'}>
      {/* loading 显示spin 否则 按type显示icon */}
      {type && type === 'loading' ? (
        <Spin simple={true} spinning={true} size="small" color={color} />
      ) : (
        <span className={getIcon(type)} />
      )}
      {/* 显示text */}
      <span>{text}</span>
    </div>
  )
}
