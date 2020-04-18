import React, { useState } from 'react'
import './AutoComplete.less'

import { Input, InputProps } from '../Input/Input'

export interface AutoCompleteProps {
  options?: string[]
  onChange?: (value: string) => void
  onSearch?: (value: string) => void
}
export function AutoComplete(props: AutoCompleteProps & InputProps) {
  const { options, onChange, onSearch, ...res } = props
  const [value, setValue] = useState('')
  const [modalActive, setModalActive] = useState(false)

  const getModalClass = () => {
    let className = 'rd-select-modal'
    if (!modalActive) {
      return `${className} rd-select-modal-close`
    }
    return className
  }
  return (
    <div className="rd-auto-complete">
      <Input
        value={value}
        onChange={(e) => {
          e && setValue(e.target.value)
          if (!modalActive) {
            setModalActive(true)
          }
          if (e?.target.value === '') {
            setModalActive(false)
          }
          onSearch && e && onSearch(e.target.value)
          onChange && e && onChange(e.target.value)
        }}
        onFocus={() => {
          if (!modalActive && options && options.length > 0) {
            setModalActive(true)
          }
        }}
        onBlur={() => {
          setModalActive(false)
        }}
        {...res}
      />
      {/* 模态框 */}
      <ul className={getModalClass()}>
        {options?.map((el, index) => {
          /* 模态框item */
          return (
            <li
              key={index + el}
              onMouseDown={() => {
                setValue(el)
                setModalActive(false)
                onChange && onChange(el)
              }}
            >
              {el}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
