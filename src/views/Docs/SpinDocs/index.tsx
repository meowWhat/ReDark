import React from 'react'
import { Table, DemoBox } from '../../../components'
import Marked from '../../../util/Marked'
import { Spin } from '../../../UI'

export default function() {
  return (
    <>
      <h2>Spin 加载中</h2>
      <p>用于页面和区块的加载中状态。</p>
      <DemoBox
        title="基础用法"
        desp="最简单的使用"
        Components={SpinDemo()}
        Code={SpinDemoCode()}
      />
      <h2>Api</h2>
      <Api />
    </>
  )
}

const SpinDemo = () => {
  return (
    <>
      <Spin></Spin>
    </>
  )
}
const SpinDemoCode = () => {
  return Marked({
    text: ` <Spin></Spin>`
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
