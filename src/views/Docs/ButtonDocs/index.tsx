import React, { cloneElement, useEffect } from 'react'
import './index.less'

import { Route } from 'react-router-dom'
import { Button, DemoBox } from '../../../components'
import '../../../../node_modules/highlight.js/styles/default.css'
import marked from 'marked'
import hljs from 'highlight.js'
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  pedantic: false,
  sanitize: false,
  breaks: true,
  smartLists: true,
  smartypants: true,
  highlight: function(code) {
    return hljs.highlightAuto(code).value
  }
})

export default function() {
  useEffect(() => {
    hljs.initHighlightingOnLoad()
  })
  return (
    <Route path="/docs/button">
      <h1>Button 按钮</h1>
      <DemoBox
        title="基础语法"
        desp="基础按钮的用法"
        Components={TypeButton()}
        Code={TypeButtonCode()}
      ></DemoBox>
      <DemoBox
        title="禁用状态"
        desp="按钮不可用状态。"
        Components={DisabledButton()}
        Code={'```'}
      ></DemoBox>
      <DemoBox
        title="不同尺寸"
        desp="改变按钮的大小"
        Components={SizeButton()}
        Code={'```'}
      ></DemoBox>
    </Route>
  )
}

const basicComp = [
  <Button key="defalut">default</Button>,
  <Button type="primary" key="primary">
    primary
  </Button>,
  <Button type="success" key="success">
    success
  </Button>,
  <Button type="danger" key="danger">
    danger
  </Button>,
  <Button type="warning" key="warning">
    warning
  </Button>,
  <Button type="secondary" key="secondary">
    secondary
  </Button>,
  <Button type="info" key="info">
    info
  </Button>
]
const iconClass = [
  'icon-sousuo',
  'icon-biaoqian',
  'icon-ziyuan',
  'icon-shanchu',
  'icon-shoucang',
  'icon-icon-',
  'icon-connect'
]

const TypeButton = () => {
  return (
    <>
      <div className="rd-row">{basicComp}</div>
      <div className="rd-row">
        {basicComp.map((el) => {
          return cloneElement(el, {
            shape: 'round',
            children: '圆角按钮'
          })
        })}
      </div>
      <div className="rd-row">
        {basicComp.map((el, index) => {
          return cloneElement(el, {
            shape: 'circle',
            children: <span className={`iconfont ${iconClass[index]}`}></span>
          })
        })}
      </div>
    </>
  )
}
const TypeButtonCode = () => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: marked(`  
  \`\`\`javascript
    var a = 10
  \`\`\`  `)
      }}
    ></div>
  )
}

const DisabledButton = () => {
  return (
    <>
      <div className="rd-row">
        {basicComp.map((el) => {
          return cloneElement(el, { disabled: true })
        })}
      </div>
    </>
  )
}

const SizeButton = () => {
  return (
    <>
      <div className="rd-row">
        <Button type="success" size="large">
          Large
        </Button>
        <Button size="middle">Middle</Button>
        <Button type="primary" size="small">
          Small
        </Button>
      </div>
      <Button type="info" block={true}>
        Block
      </Button>
    </>
  )
}
