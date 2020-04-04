import React, { useState } from 'react'
import { Table, DemoBox } from 'src/components'
import Marked from 'src/util/Marked'
import { Modal, Button, Alert } from 'src/UI'
export default function () {
  return (
    <>
      <h2>Modal 模态框</h2>
      <p>模态对话框。。</p>
      <DemoBox
        title="基础用法"
        desp="最简单的使用"
        Components={ModalDemo()}
        Code={ModalDemoCode()}
      />
      <h2>Api</h2>
      <Api />
    </>
  )
}

const ModalDemo = () => {
  const [basicFlag, setBasicFlag] = useState(false)
  const [customFlag, setCustomFlag] = useState(false)
  const basicModalHandle = () => {
    setBasicFlag(!basicFlag)
  }
  const basicCustomHandle = () => {
    setCustomFlag(!customFlag)
  }
  return (
    <>
      {/* basic modal */}
      <Button
        type="success"
        onClick={() => {
          setBasicFlag(!basicFlag)
        }}
      >
        Open Basic Modal
      </Button>
      <Modal
        isShow={basicFlag}
        onClose={basicModalHandle}
        title="Basic Modal"
        content={
          <>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </>
        }
        footer={
          <>
            <Button onClick={basicModalHandle}>取消</Button>
            <Button type="primary" onClick={basicModalHandle}>
              确定
            </Button>
          </>
        }
      />
      {/* custom modal */}
      <Button
        type="primary"
        onClick={() => {
          setCustomFlag(!customFlag)
        }}
        style={{ marginLeft: '20px' }}
      >
        Open Custom Modal
      </Button>
      <Modal
        isShow={customFlag}
        onClose={basicCustomHandle}
        title="Custom Modal"
        closeIcon="关闭"
        content={
          <Alert
            message="自定义模态框"
            type="info"
            description="Modal 的 body 支持嵌入 JSX , header支持自定义关闭文案 , footer 支持JSX 真正实现 灵活 , 低耦 , 简洁."
            showIcon={true}
          />
        }
        footer={
          <>
            <Button type="danger" onClick={basicCustomHandle}>
              取消
            </Button>
            <Button type="success" onClick={basicCustomHandle}>
              确定
            </Button>
          </>
        }
      />
    </>
  )
}
const ModalDemoCode = () => {
  return Marked({
    text: `import { Modal, Button } from 'src/UI'

    const ModalDemo = () => {
      const [basicFlag, setBasicFlag] = useState(false)
      const [customFlag, setCustomFlag] = useState(false)
      const basicModalHandle = () => {
        setBasicFlag(!basicFlag)
      }
      const basicCustomHandle = () => {
        setCustomFlag(!customFlag)
      }
      return (
        <>
          {/* basic modal */}
          <Button
            type="success"
            onClick={() => {
              setBasicFlag(!basicFlag)
            }}
          >
            Open Basic Modal
          </Button>
          <Modal
            isShow={basicFlag}
            onClose={basicModalHandle}
            title="Basic Modal"
            content={
              <>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </>
            }
            footer={
              <>
                <Button onClick={basicModalHandle}>取消</Button>
                <Button type="primary" onClick={basicModalHandle}>
                  确定
                </Button>
              </>
            }
          />
          {/* custom modal */}
          <Button
            type="primary"
            onClick={() => {
              setCustomFlag(!customFlag)
            }}
            style={{ marginLeft: '20px' }}
          >
            Open Custom Modal
          </Button>
          <Modal
            isShow={customFlag}
            onClose={basicCustomHandle}
            title="Custom Modal"
            closeIcon="关闭"
            content={
              <Alert
                message="自定义模态框"
                type="info"
                description="Modal 的 body 支持嵌入 JSX , header支持自定义关闭文案 , footer
                 支持JSX 真正实现 灵活 , 低耦 , 简洁."
                showIcon={true}
              />
            }
            footer={
              <>
                <Button type="danger" onClick={basicCustomHandle}>
                  取消
                </Button>
                <Button type="success" onClick={basicCustomHandle}>
                  确定
                </Button>
              </>
            }
          />
        </>
      )
    }`,
  })
}

const Api = () => {
  const thead = ['属性', '说明', '类型', '默认值']
  const tbody = [
    ['isShow', '控制模态框的展示与隐藏', 'boolean', '无'],
    [
      'onClose',
      'header 内关闭icon 点击的回调函数',
      '(e:MouseEvent)=>void',
      'undefined',
    ],
    ['closeIcon', '关闭的icon', 'string', 'X'],
    ['title', 'Modal 的标题', 'string', '无'],
    ['content', 'Modal 的内容', 'ReactNode|string', '无'],
    ['footer', 'Modal 的底部', 'ReactNode|string', '无'],
  ]
  return <Table thead={thead} tbody={tbody}></Table>
}
