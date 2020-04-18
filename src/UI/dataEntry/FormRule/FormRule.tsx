import React, { JSXElementConstructor, useState } from 'react'
import './FormRule.less'

import { InputProps } from '../Input/Input'
import { Alert } from 'src/UI'
interface WithRule extends InputProps {
  name: string
  rule: {
    require: {
      ruleValue: boolean
      errorText: string
    }
    len?: {
      ruleValue: number
      errorText: string
    }
  }
  isVerfyValue?: (flag: boolean) => void
  customRule?: {
    //用户自定义 rule
    fn: (value: string) => boolean
    errorText: string
  }
}

function WithRule(Comp: JSXElementConstructor<InputProps>) {
  return function HOC(props: WithRule) {
    const { name, rule, onChange, isVerfyValue, customRule, ...res } = props
    const [info, setInfo] = useState('')
    const verifyInputValue = (value: string) => {
      if (rule.require.ruleValue && value.length <= 0) {
        setInfo(rule.require.errorText)
        isVerfyValue && isVerfyValue(false)
      } else if (rule.len && value.length <= rule.len.ruleValue) {
        setInfo(rule.len.errorText)
        isVerfyValue && isVerfyValue(false)
      } else if (customRule && !customRule.fn(value)) {
        //fn 返回值为 false
        setInfo(customRule.errorText)
        isVerfyValue && isVerfyValue(false)
      } else {
        setInfo('')
        isVerfyValue && isVerfyValue(true)
      }
    }
    const initClass = () => {
      let className = 'rd-with-rule'
      if (info.length > 0) {
        className = `${className} rd-with-rule-error`
      }
      return className
    }
    return (
      <div className={initClass()}>
        <div className="rd-with-rule-content">
          <span className="rd-with-rule-prefix">{name}</span>
          <div className="rd-with-rule-input">
            <Comp
              onChange={(e) => {
                e && verifyInputValue(e.target.value)
                onChange && onChange(e)
              }}
              {...res}
            />
          </div>
        </div>
        <div className="rd-with-rule-alert">
          <Alert type="error" message={info} showIcon />
        </div>
      </div>
    )
  }
}

export default { WithRule }
