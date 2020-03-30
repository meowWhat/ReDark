import React, { cloneElement } from 'react'
import './index.less'

import { Route } from 'react-router-dom'
import { Button, DemoBox } from '../../../components'

import Marked from '../../../util/Marked'
export default function() {
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
        Code={DisabledButtonCode()}
      ></DemoBox>
      <DemoBox
        title="不同尺寸"
        desp="改变按钮的大小"
        Components={SizeButton()}
        Code={SizeButtonCode()}
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
    <Marked
      text={`
      //第一列 

      <Button>default</Button> 
      <Button shape="round">圆角按钮</Button>
      <Button><span className="iconfont icon-sousuo"></span></Button>

      //第二列

      <Button type="primary">primary</Button> 
      <Button shape="round" type="primary">圆角按钮</Button>
      <Button type="primary"><span className="iconfont icon-biaoqian"></span></Button>
   `}
    ></Marked>
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

const DisabledButtonCode = () => {
  return (
    <Marked
      text={`
      <Button disabled={true}></Button>
   `}
    ></Marked>
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
const SizeButtonCode = () => {
  return (
    <Marked
      text={`
      <Button type="success" size="large">Large</Button>
      <Button size="middle">Middle</Button>
      <Button type="primary" size="small" >Small</Button>
      <Button type="info" block={true}></Button>
   `}
    ></Marked>
  )
}
