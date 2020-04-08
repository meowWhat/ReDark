import React, { useState } from 'react'
import { Table, DemoBox } from 'src/components'
import Marked from 'src/util/Marked'
import { Badge, Button, ButtonGroup, Tag, Switch } from 'src/UI'
export default function () {
  return (
    <>
      <h2>Badge 徽标</h2>
      <p>图标右上角的圆形徽标数字。</p>
      <DemoBox
        title="基础用法"
        desp=""
        Components={BasicDemo()}
        Code={BasicDemoCode()}
      />
      <DemoBox
        title="控制Badge"
        desp=""
        Components={ControlDemo()}
        Code={ControlDemoCoded()}
      />
      <h2>Api</h2>
      <Api />
    </>
  )
}
/* basic Demo */
const BasicDemo = () => {
  return (
    <>
      <div className="rd-row">
        <Badge count={5}>
          <Button>basic Badge</Button>
        </Badge>
        <Badge count={100}>
          <Button>use default overflowCount</Button>
        </Badge>
        <Badge count={100} overflowCount={50}>
          <Button>custom overflowCount</Button>
        </Badge>
      </div>
      <div className="rd-row">
        <Badge count={60} color="#52c41a">
          <Button>custom color</Button>
        </Badge>
        <Badge dot={true}>
          <Button>Badge wihout count</Button>
        </Badge>
      </div>
    </>
  )
}
const BasicDemoCode = () => {
  return Marked({
    text: `import { Badge, Button } from 'src/UI'

  const BasicDemo = () => {
      return (
        <>
          <div className="rd-row">
            <Badge count={5}>
              <Button>basic Badge</Button>
            </Badge>
            <Badge count={100}>
              <Button>use default overflowCount</Button>
            </Badge>
            <Badge count={100} overflowCount={50}>
              <Button>custom overflowCount</Button>
            </Badge>
          </div>
          <div className="rd-row">
            <Badge count={60} color="#52c41a">
              <Button>custom color</Button>
            </Badge>
            <Badge dot={true}>
              <Button>Badge wihout count</Button>
            </Badge>
          </div>
        </>
      )
    }    
    `,
  })
}

/* control Badge */
const ControlDemo = () => {
  const [count, setCount] = useState(5)
  const [flag, setFlag] = useState(true)
  return (
    <>
      {/* 改变 count */}
      <span className="rd-col">
        <Badge count={count}>
          <Tag type="volcano" style={{ margin: 0 }}>
            basic Badge
          </Tag>
        </Badge>
      </span>
      <span className="rd-col">
        <ButtonGroup>
          <Button
            type="success"
            onClick={() => setCount((pre) => pre - 1)}
            disabled={count <= 0}
          >
            ➖
          </Button>
          <Button type="success" onClick={() => setCount((pre) => pre + 1)}>
            ➕
          </Button>
        </ButtonGroup>
      </span>

      {/* 隐藏Badge */}
      <span className="rd-col">
        <Badge dot={flag}>
          <Tag type="volcano" style={{ margin: 0 }}>
            basic Badge
          </Tag>
        </Badge>
      </span>
      <Switch onChange={() => setFlag((pre) => !pre)} type="colorful" />
    </>
  )
}
const ControlDemoCoded = () => {
  return Marked({
    text: `import { Badge, Button, ButtonGroup, Tag, Switch } from 'src/UI'

    const ControlDemo = () => {
      const [count, setCount] = useState(5)
      const [flag, setFlag] = useState(true)
      return (
        <>
          {/* 改变 count */}
          <span className="rd-col">
            <Badge count={count}>
              <Tag type="volcano" style={{ margin: 0 }}>
                basic Badge
              </Tag>
            </Badge>
          </span>
          <span className="rd-col">
            <ButtonGroup>
              <Button
                type="success"
                onClick={() => setCount((pre) => pre - 1)}
                disabled={count <= 0}
              >
                ➖
              </Button>
              <Button type="success" onClick={() => setCount((pre) => pre + 1)}>
                ➕
              </Button>
            </ButtonGroup>
          </span>
    
          {/* 隐藏Badge */}
          <span className="rd-col">
            <Badge dot={flag}>
              <Tag type="volcano" style={{ margin: 0 }}>
                basic Badge
              </Tag>
            </Badge>
          </span>
          <Switch onChange={() => setFlag((pre) => !pre)} type="colorful" />
        </>
      )
    }    `,
  })
}

const Api = () => {
  const thead = ['属性', '说明', '类型', '默认值']
  const tbody = [
    ['color', '自定义Badge的背景颜色', 'string', '无'],
    [
      'count',
      '展示的数字,大于overflowCount显示为${overflowCount}+ 小于等于0时隐藏',
      'number',
      '0',
    ],
    ['dot', '不展示数字,只有一个小点', 'boolean', 'false'],
    ['overflowCount', '封顶的数字值', 'number', '99'],
    ['children', '被Badge包裹的节点', 'ReactNode', '无'],
  ]
  return <Table thead={thead} tbody={tbody}></Table>
}
