/**
 * @DemoBox 组件的展示以及code展示
 */
import React, { useState, ReactNode } from 'react'
import './DemoBox.less'

/**
 * @Compoents 要展示的组件群 样式自写。
 * @Code 要展示的代码,-- 编译后的md 代码块
 */
interface DemoBox {
  Components: ReactNode
  Code: ReactNode
}
export default function(props: DemoBox) {
  const { Components, Code } = props
  const [flag, setFlag] = useState(false)
  const showCode = () => {
    setFlag(!flag)
  }
  return (
    <section className="demo-box">
      <section className="demo-box-component">{Components}</section>
      {flag ? <section className="demo-box-code">{Code}</section> : <></>}
      <div
        className={flag ? 'demo-box-hidden' : 'demo-box-open'}
        onClick={showCode}
      >
        {flag ? '隐藏代码' : '显示代码'}
      </div>
    </section>
  )
}
