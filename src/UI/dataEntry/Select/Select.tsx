import React, { useState, useEffect, useCallback } from 'react'
import './Select.less'
import { Input, Tag } from 'src/UI'
interface Select {
  options?: string[]
  defaultValue?: string
  defaultValues?: string[]
  disabled?: boolean
  optionsDisabledarr?: number[]
  placeholder?: string
  allowClear?: boolean
  mode?: 'multiple' | 'tags'
  tagType?: Array<
    | 'default'
    | 'magenta'
    | 'red'
    | 'volcano'
    | 'orange'
    | 'gold'
    | 'lime'
    | 'green'
    | 'cyan'
    | 'blue'
    | 'geekblue'
    | 'purple'
  >
  onChange?: (value: string | string[]) => void
  [key: string]: any
}
export default function (props: Select) {
  const {
    options,
    defaultValue,
    defaultValues,
    optionsDisabledarr = [],
    disabled = false,
    placeholder,
    allowClear = false,
    mode = 'tags',
    onChange,
    tagType,
    ...res
  } = props

  const getRightdefaultValue = useCallback(
    (fn: React.Dispatch<React.SetStateAction<number>>) => {
      //获取正确的defaultValue

      if (options && Array.isArray(options) && options.length > 0) {
        //options 为数组 并且长度大于1
        if (defaultValue) {
          //默认值存在于数组中返回默认值
          let temp = options.indexOf(defaultValue)
          if (temp !== -1) {
            fn(temp)
            return defaultValue
          }
        }
        if (placeholder) {
          //如果有placehodler 不设默认值 优先级小于defaultValue
          return ''
        }
      }
      //options不符合要求 返回空字符串
      return ''
    },
    [options, defaultValue, placeholder]
  )

  const getRightdefaultValues = useCallback(
    (fn: React.Dispatch<React.SetStateAction<number[]>>) => {
      //获取正确的defaultValue
      if (options && Array.isArray(options) && options.length > 0) {
        //options 为数组 并且长度大于
        let tempArr: number[] = []
        if (
          defaultValues &&
          defaultValues.filter((el) => {
            let temp = options.indexOf(el)
            if (temp !== -1) {
              tempArr.push(temp)
              return true
            }
            return false
          }).length > 0
        ) {
          fn(tempArr)
          return defaultValues
        }
        if (placeholder) {
          //如果有placehodler 不设默认值 优先级小于defaultValues
          return []
        }
      }
      //options不符合要求 返回空数组
      return []
    },
    [placeholder, options, defaultValues]
  )

  //控制select下拉icon 的状态
  const [flag, setFlag] = useState(true)
  /* mode === tags */
  //控制select的 value
  const [value, setValue] = useState('')
  //控制select active 的index
  const [actIndex, setActIndex] = useState(-1)
  /* mode ===  multiple*/
  //控制select的 value
  const [values, setValues] = useState<Array<string>>([''])
  //控制select active 的index
  const [actIndexs, setActIndexs] = useState<Array<number>>([])

  useEffect(() => {
    setValue(getRightdefaultValue(setActIndex))
    setValues(getRightdefaultValues(setActIndexs))
  }, [getRightdefaultValue, getRightdefaultValues])

  //init class
  const initSelectClass = () => {
    let className = 'rd-select'
    if (disabled) {
      className = `${className} rd-select-disabled`
    }
    return className
  }
  const initSelectIconClass = () => {
    if (allowClear && value !== '') {
      return 'iconfont icon-roundclose'
    }
    let className = 'iconfont icon-cl-icon-down'
    if (mode === 'multiple') {
      className = `${className} rd-select-multiple-icon`
    }

    if (!flag) {
      className = `${className} rd-select-down-rotate`
    } else {
      className = `${className} rd-select-down-default`
    }

    return className
  }
  const getModalClass = () => {
    let className = 'rd-select-modal'
    if (flag) {
      return `${className} rd-select-modal-close`
    }
    return className
  }
  const getOptionsItemClass = (index: number) => {
    if (optionsDisabledarr.includes(index)) {
      return 'rd-select-modal-disabled'
    }
    let clasName = ''
    if (mode === 'tags' && index === actIndex) {
      clasName = 'rd-select-modal-active'
    }
    if (mode === 'multiple' && actIndexs.includes(index)) {
      clasName = 'rd-select-modal-active'
    }
    return clasName
  }

  //handle click
  const selectClick = () => {
    //select 框点击 ,控制模态框隐藏,icon的rotate
    if (disabled) {
      return null
    }
    setFlag((pre) => !pre)
  }

  const setMultipleModeState = (index: number) => {
    //设置多选状态下的 state
    setValues((pre) => {
      pre.splice(index, 1)
      let res = Array.from(pre)
      onChange && onChange(res)
      return res
    })
    setActIndexs((pre) => {
      pre.splice(index, 1)

      return Array.from(pre)
    })
  }
  return (
    <div className={initSelectClass()} {...res}>
      {/* select单选框 */}
      {mode === 'tags' ? (
        <Input
          placeholder={placeholder}
          suffix={
            <span
              className={initSelectIconClass()}
              onClick={(e) => {
                //icon click
                if (allowClear && value !== '') {
                  e.stopPropagation()
                  if (!disabled) {
                    setValue('')
                    onChange && onChange('')
                  }
                }
              }}
            />
          }
          value={value}
          onClick={selectClick}
          onChange={() => {}}
        />
      ) : (
        <div
          className={
            disabled
              ? 'rd-select-multiple rd-select-multiple-disabled'
              : 'rd-select-multiple'
          }
          onClick={selectClick}
        >
          {/* select多选框 */}
          {/* placeholder */}
          {values.length <= 0 && placeholder ? (
            <span className="rd-select-multiple-placeholder">
              {placeholder}
            </span>
          ) : null}
          {/* 存放tags */}
          {values.map((el, index) => {
            return (
              <Tag
                closable={!disabled}
                key={index + el}
                onClose={(e) => {
                  e.stopPropagation()
                  setMultipleModeState(index)
                }}
                type={(tagType && tagType[index]) || 'default'}
              >
                {el}
              </Tag>
            )
          })}
          {/* icon */}
          <span className={initSelectIconClass()} />
        </div>
      )}
      {/* 模态框 */}
      <ul className={getModalClass()}>
        {options?.map((el, index) => {
          /* 模态框item */
          return (
            <li
              key={index + el}
              className={getOptionsItemClass(index)}
              onClick={() => {
                //item click
                if (optionsDisabledarr.includes(index)) {
                  return null
                }
                if (mode === 'tags') {
                  setValue(el)
                  onChange && onChange(el)
                  setActIndex(index)
                }
                if (mode === 'multiple') {
                  const temp = values.indexOf(el)
                  if (temp === -1) {
                    setValues((pre) => {
                      let res = pre.concat(el)
                      onChange && onChange(res)
                      return res
                    })
                    setActIndexs((pre) => pre.concat(index))
                  } else {
                    setMultipleModeState(temp)
                  }
                }
                setFlag((pre) => !pre)
              }}
            >
              {el}
              {actIndexs.includes(index) ? (
                <span className="iconfont icon-ziyuan" />
              ) : null}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
