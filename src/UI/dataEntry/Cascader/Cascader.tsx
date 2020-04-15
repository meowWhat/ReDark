import React, { useState, useRef } from 'react'
import './Cascader.less'
import { Select } from 'src/UI'
/* 这节代码是 屎山 !!! */
interface CascaderProps {
  options: string[]
  restOptions: Array<Map<string, { value: string[]; disabled?: number[] }>>
  defaultValues?: Array<string>
  optionsDisabledarr?: Array<number>
  onChange?: (e: string[]) => void
  placehodler?: string[]
}
export function Cascader(props: CascaderProps) {
  const {
    options,
    restOptions,
    defaultValues,
    onChange,
    optionsDisabledarr,
    placehodler,
  } = props
  const [temp, setTemp] = useState(Array.from(new Array(restOptions.length)))
  const [defaults, setDefaults] = useState(defaultValues)
  const res = useRef<string[]>([])
  const setState = (value: string | string[], index: number) => {
    if (!Array.isArray(value)) {
      if (index < restOptions.length) {
        setTemp((pre) => {
          pre[index] = restOptions[index].get(value)
          return Array.from(pre)
        })
        setDefaults((pre) => {
          pre?.splice(index + 1, pre.length, '')
          return pre
        })

        res.current = res.current.slice(0, index + 1)
      }
      res.current[index] = value
      onChange && onChange(res.current)
    }
  }

  return (
    <div className="rd-cascader">
      <div className="rd-cascader-item">
        <Select
          options={options}
          onChange={(value) => {
            setState(value, 0)
          }}
          optionsDisabledarr={optionsDisabledarr}
          defaultValue={defaults && defaults[0]}
          placeholder={placehodler && placehodler[0]}
        />
      </div>
      {restOptions.map((el, index) => {
        const options =
          temp[index]?.value || (defaults && el.get(defaults[index])?.value)
        return (
          <div className="rd-cascader-item" key={index}>
            <Select
              options={options}
              onChange={(value) => {
                setState(value, index + 1)
              }}
              defaultValue={defaults && defaults[index + 1]}
              optionsDisabledarr={temp[index]?.disabled}
              disabled={!options}
              placeholder={placehodler && placehodler[index + 1]}
            />
          </div>
        )
      })}
    </div>
  )
}
