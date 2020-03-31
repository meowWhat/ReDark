/**@Switch 开关组件 */
import React, { useState } from 'react'
import './Switch.less'

interface Switch {}

export default function(props?: Switch) {
  const [flag, setFlag] = useState(true)
  const changeSwitch = () => {
    setFlag(!flag)
  }
  const changeClass = () => {
    return flag ? '' : 'rd-switch-close'
  }
  return (
    <span
      className={`rd-switch ${changeClass()}`}
      onClick={changeSwitch}
    ></span>
  )
}
