import React, { ReactNode, useState } from 'react'
import './Alert.less'

interface Alert {
  type: 'success' | 'info' | 'warning' | 'error'
  message: string | ReactNode
  closable?: boolean
  closeText?: string | ReactNode
  description?: string | ReactNode
  showIcon?: boolean
  onClose?: (e: React.MouseEvent) => void
  [key: string]: any
}


export default function(props: Alert) {
  const {
    type,
    message,
    showIcon = false,
    closable = false,
    closeText = 'x',
    onClose = undefined,
    description = undefined,
    ...res
  } = props
  // 控制alert显示与隐藏默认显示
  const [flag, setFlag] = useState(true)

  const getAlertClass = () => {
    if (flag === false) {
      return 'rd-alert-hid'
    }
    let className = 'rd-alert'
    if (type) {
      className = `${className} rd-alert-${type}`
    }
    if (description === undefined) {
      if (showIcon === false) {
        className = `${className} rd-alert-noicon`
      }
    } else {
      className = `${className} rd-alert-desp`
      if (showIcon === false) {
        className = `${className} rd-alert-desp-noicon`
      }
    }
    return className
  }
  const getIconClass = () => {
    let className = 'rd-alert-icon iconfont'
    if (description === undefined) {
      if (type === 'success') {
        className = `${className} icon-roundcheckfill`
      }
      if (type === 'info') {
        className = `${className} icon-infofill`
      }
      if (type === 'warning') {
        className = `${className} icon-warnfill`
      }
      if (type === 'error') {
        className = `${className} icon-roundclosefill`
      }
    } else {
      if (type === 'success') {
        className = `${className} icon-roundcheck`
      }
      if (type === 'info') {
        className = `${className} icon-info`
      }
      if (type === 'warning') {
        className = `${className} icon-warn`
      }
      if (type === 'error') {
        className = `${className} icon-roundclose`
      }
    }
    return className
  }

  return (
    <div className={getAlertClass()} {...res}>
      {/* icon */}
      {showIcon ? <span className={getIconClass()} /> : <></>}
      {/* message */}
      <span className="rd-alert-message">{message}</span>
      {/* desp */}
      {description ? (
        <span className="rd-alert-desp-content"> {description}</span>
      ) : (
        <></>
      )}
      {/* closable */}
      {closable ? (
        <span
          className="rd-alert-closable"
          onClick={(e) => {
            setFlag(false)
            if (onClose) {
              onClose(e)
            }
          }}
        >
          {closeText}
        </span>
      ) : (
        <></>
      )}
    </div>
  )
}
