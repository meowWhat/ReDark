import React from 'react'
import { Table, DemoBox } from '../../../components'
import Marked from '../../../util/Marked'
import { Switch } from '../../../UI'
export default function() {
  return (
    <>
      <h2>Switch 开关</h2>
      <p>开表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>
      <DemoBox
        title="基础用法"
        desp="最简单的使用"
        Components={Switch()}
        Code={Marked({ text: 'Switch()' })}
      />
      <h2>Api</h2>
      <Api></Api>
    </>
  )
}

const Api = () => {
  const thead = ['属性', '说明', '类型', '默认值']
  const tbody = [
    ['showHeight', '展示BackTop的距离页面顶部的距离', 'number', '120'],
    ['right', 'BackTop距离页面右边的距离', 'number', '40'],
    ['bottom', 'BackTop距离页面底部的距离', 'number', '40'],
    ['color', 'BackTop图标的颜色', 'string', '-'],
    ['size', 'BackTop图标的大小', 'number', '30']
  ]
  return <Table thead={thead} tbody={tbody}></Table>
}
