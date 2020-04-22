import React, { ReactNode, useState } from 'react'
import './Input.less'

export interface InputProps {
  placeholder?: string
  type?: 'text' | 'password'
  prefix?: string | ReactNode
  suffix?: string | ReactNode
  value?: string
  onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void
  onClick?: (e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  defaultValue?: string
  [key: string]: any
}
export function Input(props: InputProps) {
  let {
    placeholder = '请输入内容',
    type = 'text',
    prefix,
    suffix,
    value,
    onChange,
    onClick,
    defaultValue,
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
    <div className={initInputClass()} onClick={onClick}>
      {prefix && <span className="rd-input-prefix-icon">{prefix}</span>}
      <input
        type={flag ? type : 'text'}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
        {...res}
      />
      {suffix && <span className="rd-input-suffix-icon">{suffix}</span>}
    </div>
  )
}
