import React, { useState } from 'react'
import { Table, DemoBox } from 'src/components'
import Marked from 'src/util/Marked'
import { Tag } from 'src/UI'
export default function () {
  return (
    <>
      <h2>Tag 标签</h2>
      <p>用于标记和选择。</p>
      <DemoBox
        title="基础用法"
        desp=""
        Components={TypeTag()}
        Code={TypeTagCode()}
      />
      <DemoBox
        title="自定义color"
        desp="注意 ！自定义color 与 type 冲突"
        Components={ColorTag()}
        Code={ColorTagCode()}
      />
      <DemoBox
        title="可关闭标签"
        desp="通过改变visible属性来隐藏标签"
        Components={ClosableTag()}
        Code={ClosableTagCode()}
      />
      <h2>Api</h2>
      <Api />
    </>
  )
}
/* type属性展示 */
const TypeTag = () => {
  return (
    <>
      <div className="rd-row">
        <Tag type="magenta">magenta</Tag>
        <Tag type="red">red</Tag>
        <Tag type="volcano">volcano</Tag>
        <Tag type="orange">orange</Tag>
        <Tag type="gold">gold</Tag>
        <Tag type="lime">lime</Tag>
      </div>
      <Tag type="green">green</Tag>
      <Tag type="cyan">cyan</Tag>
      <Tag type="blue">blue</Tag>
      <Tag type="geekblue">geekblue</Tag>
      <Tag type="purple">purple</Tag>
    </>
  )
}
const TypeTagCode = () => {
  return Marked({
    text: `  <Tag type="magenta">magenta</Tag>
    <Tag type="red">red</Tag>
    <Tag type="volcano">volcano</Tag>
    <Tag type="orange">orange</Tag>
    <Tag type="gold">gold</Tag>
    <Tag type="lime">lime</Tag>
    <Tag type="green">green</Tag>
    <Tag type="cyan">cyan</Tag>
    <Tag type="blue">blue</Tag>
    <Tag type="geekblue">geekblue</Tag>
    <Tag type="purple">purple</Tag>`,
  })
}

/* color 属性展示 */
const ColorTag = () => {
  return (
    <>
      <Tag color="#f50">#f50</Tag>
      <Tag color="#2db7f5">#2db7f5</Tag>
      <Tag color="#87d068">#87d068</Tag>
      <Tag color="#108ee9">#108ee9</Tag>
    </>
  )
}
const ColorTagCode = () => {
  return Marked({
    text: `  <Tag color="#f50">#f50</Tag>
    <Tag color="#2db7f5">#2db7f5</Tag>
    <Tag color="#87d068">#87d068</Tag>
    <Tag color="#108ee9">#108ee9</Tag>`,
  })
}
/* closable 属性展示 */
const ClosableTag = () => {
  const [flag, setFlag] = useState(true)
  const tagClose = () => {
    setFlag(!flag)
  }
  return (
    <>
      <Tag type="cyan" closable={true} onClose={tagClose} visible={flag}>
        cyan
      </Tag>
    </>
  )
}

const ClosableTagCode = () => {
  return Marked({
    text: `  function Demo() {
      const [flag, setFlag] = useState(true)
      const tagClose = () => {
        setFlag(!flag)
      }
      return (
        <>
          <Tag type="cyan" closable={true} onClose={tagClose} visible={flag}>
            cyan
          </Tag>
        </>
      )
    }
    `,
  })
}

const Api = () => {
  const thead = ['属性', '说明', '类型', '默认值']
  const tbody = [
    ['type', '标签的官方颜色 可选值如基础用法', 'string', 'default'],
    ['color', '自定义颜色', 'string', 'undefined'],
    ['closable', '标签是否可关闭', 'boolean', 'false'],
    ['visible', '标签是否可见', 'boolean', 'true'],
    ['onClose', '标签关闭的回调函数', '(e: MouseEvent )=>void', 'undefined'],
  ]
  return <Table thead={thead} tbody={tbody}></Table>
}
