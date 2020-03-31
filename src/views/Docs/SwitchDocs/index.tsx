import React from 'react'
import { Table, DemoBox } from '../../../components'
import Marked from '../../../util/Marked'
import { Switch } from '../../../UI'
import './index.less'
export default function() {
  return (
    <>
      <h2>Switch 开关</h2>
      <p>开表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>
      <DemoBox
        title="基础用法"
        desp="最简单的使用"
        Components={SwitchDemo()}
        Code={SwitchDemoCode()}
      />
      <h2>Api</h2>
      <Api />
    </>
  )
}

const SwitchDemo = () => {
  return (
    <>
      <Switch type="colorful" />
      <Switch />
      <Switch type="colorful" disabled={true} />
      <Switch disabled={true} />
    </>
  )
}
const SwitchDemoCode = () => {
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
    ['disabled', '禁用开关', 'boolean', 'false'],
    ['onChange', '开关状态改变的回调函数', '()=>void', 'undefined']
  ]
  return <Table thead={thead} tbody={tbody}></Table>
}
