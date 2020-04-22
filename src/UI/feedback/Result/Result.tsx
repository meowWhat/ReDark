import React, { ReactNode } from 'react'
import './Result.less'
import getIcon from 'src/util/getIconClass'

interface Result {
  type?: 'success' | 'error' | 'warning' | 'info'
  imgSrc?: string
  title: string
  desp?: string
  extra?: ReactNode
  [key: string]: any
}
export default function (props: Result) {
  const {
    type = 'success',
    title,
    desp = '',
    imgSrc = undefined,
    extra,
    ...res
  } = props
  return (
    <div className="rd-result" {...res}>
      <div className="rd-result-icon">
        {imgSrc === undefined ? (
          <span className={getIcon(type)} />
        ) : (
          <img
            src={imgSrc}
            alt={title}
            style={{ width: '254px', height: '294px' }}
          />
        )}
      </div>
      <div className="rd-result-title">{title}</div>
      <div className="rd-result-desp">{desp}</div>
      <div className="rd-result-extra">{extra}</div>
    </div>
  )
}
