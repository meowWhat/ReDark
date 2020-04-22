import React, { useState } from 'react'
import { Table, DemoBox } from 'src/components'
import Marked from 'src/util/Marked'
import { Message, Button } from 'src/UI'
export default function () {
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
interface Notice {
  delay?: number
  text?: string
  type?: 'success' | 'error' | 'warning' | 'info' | 'loading'
  isShow?: boolean
  color?: string
  onClose?: () => void
}
const MessageDemo = () => {
  const [arr, setArr] = useState<Array<Notice>>([])
  return (
    <>
      <Message notices={arr} />
      <span className="rd-col">
        <Button
          type="success"
          onClick={() => {
            setArr((prev) => {
              return prev.concat({
                text: 'this is a success message',
                type: 'success',
                delay: 1000,
                onClose: () => {
                  setArr((prev) => {
                    prev.shift()
                    return prev
                  })
                },
              })
            })
          }}
        >
          get success message
        </Button>
      </span>
      <span className="rd-col">
        <Button
          type="info"
          onClick={() => {
            setArr((prev) => {
              return prev.concat({
                text: 'this is a info message',
                type: 'info',
                delay: 1000,
                onClose: () => {
                  setArr((prev) => {
                    prev.shift()
                    return prev
                  })
                },
              })
            })
          }}
        >
          get info message
        </Button>
      </span>
      <span className="rd-col">
        <Button
          type="warning"
          onClick={() => {
            setArr((prev) => {
              return prev.concat({
                text: 'this is a warning message',
                type: 'warning',
                delay: 1000,
                onClose: () => {
                  setArr((prev) => {
                    prev.shift()
                    return prev
                  })
                },
              })
            })
          }}
        >
          get warning message
        </Button>
      </span>
      <span className="rd-col">
        <Button
          type="danger"
          onClick={() => {
            setArr((prev) => {
              return prev.concat({
                text: 'this is a error message',
                type: 'error',
                delay: 1000,
                onClose: () => {
                  setArr((prev) => {
                    prev.shift()
                    return prev
                  })
                },
              })
            })
          }}
        >
          get error message
        </Button>
      </span>
    </>
  )
}
const MessageDemoCode = () => {
  return Marked({
    text: `const MessageDemo = () => {
      const [arr, setArr] = useState<Array<Notice>>([])
      return (
        <>
          <Message notices={arr} />
          <span className="rd-col">
            <Button
              type="success"
              onClick={() => {
                setArr((prev) => {
                  return prev.concat({
                    text: 'this is a success message',
                    type: 'success',
                    delay: 1000,
                    onClose: () => {
                      setArr((prev) => {
                        prev.shift()
                        return prev
                      })
                    },
                  })
                })
              }}
            >
              get success message
            </Button>
          </span>
          <span className="rd-col">
            <Button
              type="info"
              onClick={() => {
                setArr((prev) => {
                  return prev.concat({
                    text: 'this is a info message',
                    type: 'info',
                    delay: 1000,
                    onClose: () => {
                      setArr((prev) => {
                        prev.shift()
                        return prev
                      })
                    },
                  })
                })
              }}
            >
              get info message
            </Button>
          </span>
          <span className="rd-col">
            <Button
              type="warning"
              onClick={() => {
                setArr((prev) => {
                  return prev.concat({
                    text: 'this is a warning message',
                    type: 'warning',
                    delay: 1000,
                    onClose: () => {
                      setArr((prev) => {
                        prev.shift()
                        return prev
                      })
                    },
                  })
                })
              }}
            >
              get warning message
            </Button>
          </span>
          <span className="rd-col">
            <Button
              type="danger"
              onClick={() => {
                setArr((prev) => {
                  return prev.concat({
                    text: 'this is a error message',
                    type: 'error',
                    delay: 1000,
                    onClose: () => {
                      setArr((prev) => {
                        prev.shift()
                        return prev
                      })
                    },
                  })
                })
              }}
            >
              get error message
            </Button>
          </span>
        </>
      )
    }`,
  })
}

const Api = () => {
  const thead = ['属性', '说明', '类型', '默认值']
  const tbody = [
    [
      'type',
      'message的类型 可选值 success | info | warning | error | loading',
      'string',
      'success',
    ],
    ['delay', 'message关闭的时延', 'number', '0'],
    ['color', 'message为loading状态时 spin的颜色', 'string', '#3eaf7c'],
    ['onClose', 'message关闭的回调函数', '()=>void', 'undefined'],
  ]
  return <Table thead={thead} tbody={tbody}></Table>
}
