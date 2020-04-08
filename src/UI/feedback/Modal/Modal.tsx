import React, { ReactNode } from 'react'
import './Modal.less'

interface Modal {
  isShow?: boolean
  onClose?: (e: React.MouseEvent) => void
  closeIcon?: string | ReactNode
  title: string
  content: string | ReactNode
  footer: string | ReactNode
  [key: string]: any
}
export default function (props: Modal) {
  const {
    isShow,
    onClose = undefined,
    closeIcon = 'X',
    title,
    content,
    footer,
    ...res
  } = props

  
  return (
    <div className={isShow ? 'rd-modal' : 'rd-modal-hide'} {...res}>
      <div className="rd-modal-content">
        <div className="rd-modal-header">
          <span className="rd-modal-title">{title}</span>
          <span
            className="rd-modeal-closable"
            onClick={(e) => {
              onClose && onClose(e)
            }}
          >
            {closeIcon}
          </span>
        </div>
        <div className="rd-modal-body">{content}</div>
        <div className="rd-modal-footer">{footer}</div>
      </div>
    </div>
  )
}
