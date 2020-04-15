import React, { ReactNode, JSXElementConstructor } from 'react'
import { InputProps } from '../Input'
import './InputWithAddon.less'
interface InputWithAddonProps extends InputProps {
  addonBefore?: string | ReactNode
  addonAfter?: string | ReactNode
}
export function InputWithAddon(Comp: JSXElementConstructor<InputProps>) {
  return (props: InputWithAddonProps) => {
    const { addonAfter, addonBefore, ...res } = props
    return (
      <div className="rd-input-addon">
        {addonBefore ? (
          <div className="rd-input-addon-item rd-input-addon-before">
            {addonBefore}
          </div>
        ) : null}
        <div className="rd-input-addon-wrapper">
          <Comp {...res} />
        </div>
        {addonAfter ? (
          <div className="rd-input-addon-item rd-input-addon-after">
            {addonAfter}
          </div>
        ) : null}
      </div>
    )
  }
}
