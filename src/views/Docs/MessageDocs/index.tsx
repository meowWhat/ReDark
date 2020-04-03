import React from 'react'
import { Table, DemoBox } from '../../../components'
import Marked from '../../../util/Marked'
import { Message } from '../../../UI'
import './index.less'
export default function() {
  return (
    <>
      <h2>Message 全局提示</h2>
      <p>全局展示操作反馈信息。</p>
      <DemoBox
        title="基础用法"
        desp="最简单的使用"
        Components={MessageDemo()}
        Code={MessageDemoCode()}
      />
      <h2>Api</h2>
      <Api />
    </>
  )
}

const MessageDemo = () => {
  return (
    <>
      <Message></Message>
    </>
  )
}
const MessageDemoCode = () => {
  return Marked({
    text: `<Switch type="colorful" />
  <Switch />
  <Switch type="colorful" disabled={true} />
  <Switch disabled={true} />`
  })
}

const Api = () => {
  const thead = ['属性', '说明', '类型', '默认值']
  const tbody = [
    ['type', '开关的类型 可选值default | colorful', 'string', 'default'],
    ['initState', '开关初始状态 ture=>open | false=>close', 'boolean', 'true'],
    ['disabled', '禁用开关', 'boolean', 'false'],
    ['onChange', '开关状态改变的回调函数', '(e:MouseEvent)=>void', 'undefined']
  ]
  return <Table thead={thead} tbody={tbody}></Table>
}
