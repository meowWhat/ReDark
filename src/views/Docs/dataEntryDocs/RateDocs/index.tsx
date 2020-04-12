import React from 'react'
import { Table, DemoBox } from 'src/components'
import Marked from 'src/util/Marked'
import { Rate, Tag } from 'src/UI'
export default function () {
  return (
    <>
      <h2>Rate 评分</h2>
      <p>评分组件。</p>
      <DemoBox
        title="代码演示"
        desp=""
        Components={basicDemo()}
        Code={basicDemoCode()}
      />
      <h2>Api</h2>
      <Api />
    </>
  )
}
/* basic */
const basicDemo = () => {
  return (
    <>
      <div className="rd-row">
        <div className="rd-col">
          <Tag color="#6c757d">默认</Tag>
          <Rate />
        </div>
        <div className="rd-col">
          <Tag color="#6c757d">显示半星</Tag>
          <Rate allowHalf value={2.5} />
        </div>
        <div className="rd-col">
          <Tag color="#6c757d">只读</Tag>
          <Rate disabled value={2} />
        </div>
      </div>
      <div className="rd-row">
        <div className="rd-col">
          <Tag color="#6c757d">禁止清除</Tag>
          <Rate allowClear={false} value={3} />
        </div>
        <div className="rd-col">
          <Tag color="#6c757d">自定义数量</Tag>
          <Rate count={7} value={5} />
        </div>
      </div>
      <div className="rd-row" style={{ marginTop: '-16px', marginBottom: 0 }}>
        <div className="rd-col">
          <Tag color="#6c757d">自定义字符</Tag>
          <Rate
            character={<span className="iconfont icon-cc-heart-o" />}
            allowHalf
            value={1.5}
          />
        </div>
        <div className="rd-col">
          <Tag color="#6c757d">自定义样式</Tag>
          <Rate
            character={'A'}
            characterStyle={{ fontSize: '36px' }}
            allowHalf
            value={1.5}
          />
        </div>
      </div>
    </>
  )
}
const basicDemoCode = () => {
  return Marked({
    text: `  import { Rate, Tag } from 'src/UI'
    const basicDemo = () => {
      return (
        <>
          <div className="rd-row">
            <div className="rd-col">
              <Tag color="#6c757d">默认</Tag>
              <Rate />
            </div>
            <div className="rd-col">
              <Tag color="#6c757d">显示半星</Tag>
              <Rate allowHalf value={2.5} />
            </div>
            <div className="rd-col">
              <Tag color="#6c757d">只读</Tag>
              <Rate disabled value={2} />
            </div>
          </div>
          <div className="rd-row">
            <div className="rd-col">
              <Tag color="#6c757d">禁止清除</Tag>
              <Rate allowClear={false} value={3} />
            </div>
            <div className="rd-col">
              <Tag color="#6c757d">自定义数量</Tag>
              <Rate count={7} value={5} />
            </div>
          </div>
          <div className="rd-row" style={{ marginTop: '-16px', marginBottom: 0 }}>
            <div className="rd-col">
              <Tag color="#6c757d">自定义字符</Tag>
              <Rate
                character={<span className="iconfont icon-cc-heart-o" />}
                allowHalf
                value={1.5}
              />
            </div>
            <div className="rd-col">
              <Tag color="#6c757d">自定义样式</Tag>
              <Rate
                character={'A'}
                characterStyle={{ fontSize: '36px' }}
                allowHalf
                value={1.5}
              />
            </div>
          </div>
        </>
      )
    }`,
  })
}

const Api = () => {
  const thead = ['属性', '说明', '类型', '默认值']
  const tbody = [
    ['allowHarl', '是否允许半选', 'boolean', 'false'],
    ['allowClear', '是否允许再次点击后清除', 'boolean', 'true'],
    ['value', '当前数,受控值,可以用作设置默认值', 'number', '0'],
    ['onChange', '选择时的回调 ', '(value: number)=>void', 'undefined'],
    ['disabled', '只读，无法进行交互', 'boolean', 'false'],
    ['count', '	star 总数', 'number', '5'],
    ['character', '自定义字符', 'ReactNode|string', 'undefined'],
    ['characterStyle', '自定义字符样式', 'React.CSSProperties', 'undefined'],
  ]
  return <Table thead={thead} tbody={tbody}></Table>
}
