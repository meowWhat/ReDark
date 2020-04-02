import React, { cloneElement } from 'react'
import './index.less'
import { DemoBox, Table } from '../../../components'
import { Button, ButtonGroup } from '../../../UI'
import Marked from '../../../util/Marked'
export default function() {
  return (
    <>
      <h2>Button 按钮</h2>
      <DemoBox
        title="基础语法"
        desp="基础按钮的用法"
        Components={TypeButton()}
        Code={TypeButtonCode()}
      />
      <DemoBox
        title="禁用状态"
        desp="按钮不可用状态。"
        Components={DisabledButton()}
        Code={DisabledButtonCode()}
      />
      <DemoBox
        title="不同尺寸"
        desp="改变按钮的大小"
        Components={SizeButton()}
        Code={SizeButtonCode()}
      />
      <DemoBox
        title="按钮群"
        desp="多个按钮在一起时应该使用ButtonGroup"
        Components={Group()}
        Code={GroupCode()}
      />
      <h2>Api</h2>
      <p>
        通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：type -> size ->
        shape -> disabled。 支持原生按钮的所有属性 。
      </p>
      <br />
      <p>按钮的属性说明如下</p>
      <br />
      <Api></Api>
    </>
  )
}

/* 要展示的初始化组件 */
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

/* type属性展示 */
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

/* disabled 属性展示 */
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

/* size 属性展示 */
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

/* 按钮群展示 */
const Group = () => {
  return (
    <>
      <ButtonGroup>
        <Button type="primary">
          <span className="iconfont icon-arrow_left"></span>上一页
        </Button>
        <Button type="primary">
          下一页&nbsp;<span className="iconfont icon-xiangyou"></span>
        </Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button type="info">
          <span className={`iconfont ${iconClass[1]}`}></span>
        </Button>
        <Button type="info">
          <span className={`iconfont ${iconClass[2]}`}></span>
        </Button>
        <Button type="info">
          <span className={`iconfont ${iconClass[3]}`}></span>
        </Button>
        <Button type="info">
          <span className={`iconfont ${iconClass[4]}`}></span>
        </Button>
      </ButtonGroup>
    </>
  )
}

const GroupCode = () => {
  return (
    <Marked
      text={`<ButtonGroup>
  <Button type="primary">
    <span className="iconfont icon-arrow_left"></span>上一页
  </Button>
  <Button type="primary">
    下一页&nbsp;<span className="iconfont icon-xiangyou"></span>
  </Button>
  </ButtonGroup>`}
    ></Marked>
  )
}

/* Api文档 */
const Api = () => {
  const thead: any = ['属性', '说明', '类型', '默认值']
  const tbody: any = [
    ['disabled', '按钮失效状态', 'boolean', 'false'],
    [
      'href',
      '点击跳转的地址，指定此属性 button 的行为和 a 链接一致',
      'string',
      '-'
    ],
    [
      'shape',
      '指定按钮的形状 可选值 round | circle | defult',
      'string',
      'default'
    ],
    [
      'type',
      '按钮的类型 可选值 default | primary | danger | success | info | warning | secondary',
      'string',
      'default'
    ],
    ['size', '按钮的大小 可选值 large | middle | small', 'string', 'middle'],
    [
      'target',
      '按钮设置了href后的行为 可选值 _blank | _self | _parent',
      'string',
      '_self'
    ],
    ['onClick', '点击事件的回调函数', '(e:MouseEvent)=>void', '-']
  ]
  return <Table thead={thead} tbody={tbody}></Table>
}
