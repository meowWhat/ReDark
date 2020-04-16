import React, { ReactNode, JSXElementConstructor } from 'react'

import './InputWithAddon.less'

interface InputWithAddon {
  addonbefore?: string | ReactNode
  addonafter?: string | ReactNode
}

export function InputWithAddon<T>(Comp: JSXElementConstructor<T>) {
  //我需要 给 泛型 T 添加 额外的 props 用到了 &
  return (props: InputWithAddon & T) => {
    //const { addonAfter, addonBefore, ...res } = props
    const { addonafter, addonbefore } = props
    return (
      <div className="rd-input-addon">
        {addonbefore ? (
          <div className="rd-input-addon-item rd-input-addon-before">
            {addonbefore}
          </div>
        ) : null}
        <div className="rd-input-addon-wrapper">
          {/*  <Comp {...res} /> */}
          <Comp {...props} />
        </div>
        {addonafter ? (
          <div className="rd-input-addon-item rd-input-addon-after">
            {addonafter}
          </div>
        ) : null}
      </div>
    )
  }
}
