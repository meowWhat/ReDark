import React, { ReactNode, useState } from 'react'
import './Input.less'

interface Input {
  placeholder?: string
  type?: 'text' | 'password'
  prefix?: string | ReactNode
  suffix?: string | ReactNode
  value?: string
  onChange?: () => {}
  [key: string]: any
}
export default function (props: Input) {
  let {
    placeholder = '请输入内容',
    type = 'text',
    prefix,
    suffix,
    value,
    onChange,
    ...res
  } = props
  const [flag, setFlag] = useState(true)
  if (type === 'password' && suffix === undefined) {
    const initDefaultSuffixIconClass = () => {
      let className = 'iconfont'
      if (flag) {
        className = `${className} icon-browse`
      } else {
        className = `${className} icon-Notvisible`
      }
      return className
    }
    suffix = (
      <span
        className={initDefaultSuffixIconClass()}
        onClick={() => {
          setFlag((pre) => !pre)
        }}
      />
    )
  }

  const initInputClass = () => {
    let className = 'rd-input'
    if (prefix) {
      className = `${className} rd-input-prefix`
    }
    if (suffix) {
      className = `${className} rd-input-suffix`
    }
    return className
  }
  return (
    <div className={initInputClass()}>
      {prefix && <span className="rd-input-prefix-icon">{prefix}</span>}
      <input
        type={flag ? type : 'text'}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...res}
      />
      {suffix && <span className="rd-input-suffix-icon">{suffix}</span>}
    </div>
  )
}
