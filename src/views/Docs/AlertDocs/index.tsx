import React from 'react'
import { Table, DemoBox } from '../../../components'
import Marked from '../../../util/Marked'
import { Alert } from '../../../UI'
import './index.less'
export default function() {
  return (
    <>
      <h2>Alert 警告提示</h2>
      <p>警告提示，展现需要关注的信息。</p>
      <DemoBox
        title="基础用法"
        desp="页面中的非浮层元素，不会自动消失。"
        Components={AlertDemo()}
        Code={AlertDemoCode()}
      />
      <DemoBox
        title="含有辅助性文字介绍"
        desp=""
        Components={AlertDespDemo()}
        Code={AlertDespDemoCode()}
      />
      <h2>Api</h2>
      <Api />
    </>
  )
}
/* basic */
const AlertDemo = () => {
  return (
    <>
      <Alert type="success" message="default success" />
      <Alert type="info" message="可关闭 Alert" closable={true} />
      <Alert
        type="warning"
        message="自定义可关闭文案 Alert"
        closable={true}
        closeText="知道啦！"
      />
      <Alert message="Success withIcon" type="success" showIcon={true} />
      <Alert message="info withIcon" type="info" showIcon={true} />
      <Alert message="Warning withIcon" type="warning" showIcon={true} />
      <Alert message="Error withIcon" type="error" showIcon={true} />
    </>
  )
}
const AlertDemoCode = () => {
  return Marked({
    text: `  <Alert type="success" message="default success" />
    <Alert type="info" message="可关闭 Alert" closable={true} />
    <Alert
      type="warning"
      message="自定义可关闭文案 Alert"
      closable={true}
      closeText="知道啦！"
    />
    <Alert message="Success withIcon" type="success" showIcon={true} />
    <Alert message="info withIcon" type="info" showIcon={true} />
    <Alert message="Warning withIcon" type="warning" showIcon={true} />
    <Alert message="Error withIcon" type="error" showIcon={true} />`
  })
}

/* with desp */
const AlertDespDemo = () => {
  return (
    <>
      <Alert
        type="success"
        message="default success"
        description="default success without icon ,it is easy to use !"
      />
      <Alert
        message="Success withIcon"
        type="success"
        description="Detailed description and advice about successful copywriting."
        showIcon={true}
      />
      <Alert
        message="info withIcon"
        type="info"
        description="Additional description and information about copywriting."
        showIcon={true}
      />
      <Alert
        message="Warning withIcon"
        type="warning"
        description="This is a warning notice about copywriting."
        showIcon={true}
        closable={true}
      />
      <Alert
        message="Error withIcon"
        type="error"
        description="This is an error message about copywriting."
        showIcon={true}
        closable={true}
        closeText={'关闭'}
      />
    </>
  )
}
const AlertDespDemoCode = () => {
  return Marked({
    text: ` <Alert
    type="success"
    message="default success"
    description="default success without icon ,it is easy to use !"
  />
  <Alert
    message="Success withIcon"
    type="success"
    description="Detailed description and advice about successful copywriting."
    showIcon={true}
  />
  <Alert
    message="info withIcon"
    type="info"
    description="Additional description and information about copywriting."
    showIcon={true}
  />
  <Alert
    message="Warning withIcon"
    type="warning"
    description="This is a warning notice about copywriting."
    showIcon={true}
    closable={true}
  />
  <Alert
    message="Error withIcon"
    type="error"
    description="This is an error message about copywriting."
    showIcon={true}
    closable={true}
    closeText={'关闭'}
  />`
  })
}

const Api = () => {
  const thead = ['属性', '说明', '类型', '默认值']
  const tbody = [
    [
      'type',
      'alert的类型必须传入 可选值为 success | info | warning | error',
      'string',
      '无'
    ],
    ['message', 'alert的信息,必须传入', 'string', '无'],
    ['description', '辅助性文字介绍', 'string', 'undefined'],
    ['showIcon', '是否展示icon 默认不展示', 'boolean', 'false'],
    ['closable', '是否显示关闭操作 默认不显示', 'boolean', 'false'],
    ['closeText', '自定义关闭文案 仅在closable为true下生效', 'string', 'x'],
    ['onClose', '关闭时触发的回调函数', '(e:MouseEvent)=>void', 'undefined']
  ]
  return <Table thead={thead} tbody={tbody}></Table>
}
