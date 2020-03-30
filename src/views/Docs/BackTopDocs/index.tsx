import React from 'react'
import { Table, DemoBox } from '../../../components'
import { Route } from 'react-router-dom'
import Marked from '../../../util/Marked'

export default function() {
  return (
    <Route path="/docs/backTop">
      <h2>BackTop 回到顶部</h2>
      <p>返回页面顶部的操作按钮</p>
      <DemoBox
        title="基础用法"
        desp="滑动页面即可看到右下方的按钮。"
        Components={`Scroll down to see the bottom-right button.`}
        Code={Marked({ text: 'bla bla' })}
      />
      <h2>Api</h2>
      <Api></Api>
    </Route>
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