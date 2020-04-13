import React from 'react'
import { Table, DemoBox } from 'src/components'
import Marked from 'src/util/Marked'
import { Input } from 'src/UI'
export default function () {
  return (
    <>
      <h2>Input 输入框</h2>
      <p>通过鼠标或键盘输入内容,是最基础的表单域的包装。</p>
      <DemoBox
        title="基础使用"
        desp="当type为password时默认提供suffix,当然你也可以自定义 prefix && suffix"
        Components={basicDemo()}
        Code={basicDemoCode()}
      />
      <DemoBox
        title="基础使用"
        desp="当type为password时默认提供suffix,当然你也可以自定义 prefix && suffix"
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
    <form>
      <div className="rd-row">
        <div className="rd-col" style={{ width: '65%' }}>
          <Input type="text" placeholder="请输入账号" />
        </div>
      </div>
      <div className="rd-row">
        <div className="rd-col" style={{ width: '65%' }}>
          <Input type="password" placeholder="请输入密码" />
        </div>
      </div>
      <div className="rd-col" style={{ width: '65%' }}>
        <Input
          type="text"
          placeholder="enter your username"
          prefix={<span className="iconfont icon-account" />}
          suffix={<span className="iconfont icon-info" />}
        />
      </div>
    </form>
  )
}
const basicDemoCode = () => {
  return Marked({
    text: ` `,
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
