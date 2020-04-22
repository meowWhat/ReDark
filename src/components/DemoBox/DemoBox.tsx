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
  title: string
  desp: string
  Components: ReactNode
  Code: ReactNode
}
export default function(props: DemoBox) {
  const { Components, Code, title, desp } = props
  const [flag, setFlag] = useState(false)
  const showCode = () => {
    setFlag(!flag)
  }
  return (
    <>
      <h2 className="demo-title">{title}</h2>
      <p className="demo-desp">{desp}</p>
      <section className="demo-box">
        <section className="demo-box-component">{Components}</section>
        <section className={flag ? 'demo-box-code' : 'demo-box-code-hidden'}>
          {Code}
        </section>
        <div
          className={flag ? 'demo-box-hidden' : 'demo-box-open'}
          onClick={showCode}
        >
          {flag ? '隐藏代码' : '显示代码'}
        </div>
      </section>
    </>
  )
}
