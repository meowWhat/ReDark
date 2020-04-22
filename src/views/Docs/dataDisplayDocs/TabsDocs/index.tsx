import React, { ReactNode, useState } from 'react'
import { Table, DemoBox } from 'src/components'
import Marked from 'src/util/Marked'
import { Tabs, Button, ButtonGroup } from 'src/UI'

export default function () {
  return (
    <>
      <h2>Tabs 标签页</h2>
      <p>选项卡切换组件。</p>
      <DemoBox
        title="基础用法"
        desp="基于数组驱动"
        Components={BasicDemo()}
        Code={BasicDemoCode()}
      />
      <DemoBox
        title="选项卡样式"
        desp=""
        Components={DiffTypeDemo()}
        Code={DiffTypeDemoCode()}
      />
      <DemoBox
        title="可关闭选项卡 与 defaultActiveKey"
        desp=""
        Components={ColsableDemo()}
        Code={ColsableDemoCode()}
      />
      <DemoBox
        title="自定义position"
        desp=""
        Components={DiffPositionDemo()}
        Code={DiffPositionDemoCode()}
      />
      <h2>Api</h2>
      <Api />
    </>
  )
}
const arr: Array<{
  title: string | ReactNode
  content: string | ReactNode
  closable?: boolean
}> = [
  { title: '用户管理', content: '用户管理' },
  { title: '配置管理', content: '配置管理' },
  { title: '角色管理', content: '角色管理' },
  { title: '定时任务补偿', content: '定时任务补偿' },
]
/* 基础 Demo */
const BasicDemo = () => <Tabs arr={arr} />
const BasicDemoCode = () => {
  return Marked({
    text: `const arr: Array<{
      title: string | ReactNode
      content: string | ReactNode
      closable?: boolean
    }> = [
      { title: '用户管理', content: '用户管理' },
      { title: '配置管理', content: '配置管理' },
      { title: '角色管理', content: '角色管理' },
      { title: '定时任务补偿', content: '定时任务补偿' },
    ]
    /* 基础 Demo */
    const BasicDemo = () => <Tabs arr={arr} />`,
  })
}

/* type = card */
const DiffTypeDemo = () => <Tabs arr={arr} type="card" />
const DiffTypeDemoCode = () => {
  return Marked({
    text: `<Tabs arr={arr} type="card" />`,
  })
}
/* 可关闭选项卡 与 defaultActiveKey*/
const ColsableDemo = () => {
  return (
    <Tabs
      arr={arr.concat({ title: '可关闭', content: '可关闭', closable: true })}
      defaultActiveKey={2}
      type="card"
    />
  )
}
const ColsableDemoCode = () => {
  return Marked({
    text: `/* 可关闭选项卡 与 defaultActiveKey*/
    const ColsableDemo = () => {
      return (
        <Tabs
          arr={arr.concat({ title: '可关闭', content: '可关闭', closable: true })}
          defaultActiveKey={2}
          type="card"
        />
      )
    }`,
  })
}

/* 调节选项卡位置 */
const DiffPositionDemo = () => {
  const [position, setPosition] = useState<'default' | 'left' | 'right'>('left')
  return (
    <>
      <div className="rd-row">
        <ButtonGroup>
          <Button type="success" onClick={() => setPosition('default')}>
            default
          </Button>
          <Button type="success" onClick={() => setPosition('left')}>
            left
          </Button>
          <Button type="success" onClick={() => setPosition('right')}>
            right
          </Button>
        </ButtonGroup>
      </div>
      <Tabs position={position} arr={arr}></Tabs>
    </>
  )
}
const DiffPositionDemoCode = () => {
  return Marked({
    text: `import { Tabs, Button, ButtonGroup } from 'src/UI'
  const DiffPositionDemo = () => {
  const [position, setPosition] = useState<'default' | 'left' | 'right'>('left')
      return (
        <>
          <div className="rd-row">
            <ButtonGroup>
              <Button type="success" onClick={() => setPosition('default')}>
                default
              </Button>
              <Button type="success" onClick={() => setPosition('left')}>
                left
              </Button>
              <Button type="success" onClick={() => setPosition('right')}>
                right
              </Button>
            </ButtonGroup>
          </div>
          <Tabs position={position} arr={arr}></Tabs>
        </>
      )
    }`,
  })
}
/* Api */
const Api = () => {
  const thead = ['属性', '说明', '类型', '默认值']
  const tbody = [
    ['arr', '基于arr渲染tabs', '参考基础用法的arr类型', '[ ]'],
    ['onChange', 'tab栏切换回调函数', '()=>void', 'undefined'],
    ['defaultActiveKey', '初始化活跃的tab栏', 'number', '0'],
    ['type', 'tabs样式选择', 'card|default', 'default'],
    ['position', 'tabs的布局位置', 'left|right|default', 'default'],
  ]
  return <Table thead={thead} tbody={tbody}></Table>
}
