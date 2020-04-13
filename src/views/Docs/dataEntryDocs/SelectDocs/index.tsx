import React from 'react'
import { Table, DemoBox } from 'src/components'
import Marked from 'src/util/Marked'
import { Select } from 'src/UI'
export default function () {
  return (
    <>
      <h2>Select 选择器</h2>
      <p>下拉选择器。</p>
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
  return <Select />
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
