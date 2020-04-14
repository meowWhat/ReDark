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
        desp="通过 options绑定value, onChange获取value"
        Components={basicDemo()}
        Code={basicDemoCode()}
      />
      <DemoBox
        title="Select的禁用与清除"
        desp=""
        Components={disabledDemo()}
        Code={disabledDemoCode()}
      />
      <DemoBox
        title="多选框"
        desp=""
        Components={multipleDemo()}
        Code={multipleDemoCode()}
      />
      <h2>Api</h2>
      <Api />
    </>
  )
}
const options = ['黄金糕', '双皮奶', '千层饼', '龙须面', '北京烤鸭']

/* basic */
const basicDemo = () => {
  return (
    <>
      <div style={{ width: '180px' }} className="rd-col">
        <Select
          options={options}
          placeholder={'请选择食物'}
          onChange={(value) => {
            console.log(value)
          }}
        />
      </div>
      <div style={{ width: '180px' }} className="rd-col">
        <Select options={options} defaultValue="千层饼" />
      </div>
    </>
  )
}
const basicDemoCode = () => {
  return Marked({
    text: `const options = ['黄金糕', '双皮奶', '千层饼', '龙须面', '北京烤鸭']
    /* basic */
    const basicDemo = () => {
      return (
        <>
          <div style={{ width: '180px' }} className="rd-col">
            <Select
              options={options}
              placeholder={'请选择食物'}
              onChange={(value) => {
                console.log(value)
              }}
            />
          </div>
          <div style={{ width: '180px' }} className="rd-col">
            <Select options={options} defaultValue="千层饼" />
          </div>
        </>
      )
    }`,
  })
}
/* disabled */
const disabledDemo = () => {
  return (
    <>
      <div style={{ width: '180px' }} className="rd-col">
        <Select options={options} placeholder={'请选择食物'} disabled />
      </div>
      <div style={{ width: '180px' }} className="rd-col">
        <Select
          options={options}
          defaultValue="千层饼"
          optionsDisabledarr={[0, 1]}
        />
      </div>
      <div style={{ width: '180px' }} className="rd-col">
        <Select options={options} defaultValue="千层饼" allowClear />
      </div>
    </>
  )
}
const disabledDemoCode = () => {
  return Marked({
    text: `const options = ['黄金糕', '双皮奶', '千层饼', '龙须面', '北京烤鸭']
    /* disabled */
const disabledDemo = () => {
  return (
    <>
      <div style={{ width: '180px' }} className="rd-col">
        <Select options={options} placeholder={'请选择食物'} disabled />
      </div>
      <div style={{ width: '180px' }} className="rd-col">
        <Select
          options={options}
          defaultValue="千层饼"
          optionsDisabledarr={[0, 1]}
        />
      </div>
      <div style={{ width: '180px' }} className="rd-col">
      <Select options={options} defaultValue="千层饼" allowClear />
    </div>
    </>
  )
}`,
  })
}
/* 多选框 */
const multipleDemo = () => {
  return (
    <>
      <div className="rd-row" style={{ width: '85%' }}>
        <Select
          options={options}
          placeholder={'请选择食物'}
          mode="multiple"
          onChange={(value) => {
            console.log(value)
          }}
        />
      </div>
      <div className="rd-row" style={{ width: '85%' }}>
        <Select
          options={options}
          placeholder={'请选择食物'}
          mode="multiple"
          defaultValues={['黄金糕', '龙须面']}
          optionsDisabledarr={[4]}
        />
      </div>
      <div className="rd-row" style={{ width: '85%' }}>
        <Select mode="multiple" disabled placeholder={'请选择食物'} />
      </div>
    </>
  )
}
const multipleDemoCode = () => {
  return Marked({
    text: `const options = ['黄金糕', '双皮奶', '千层饼', '龙须面', '北京烤鸭']
    /* disabled */
const disabledDemo = () => {
  return (
    <>
      <div style={{ width: '180px' }} className="rd-col">
        <Select options={options} placeholder={'请选择食物'} disabled />
      </div>
      <div style={{ width: '180px' }} className="rd-col">
        <Select
          options={options}
          defaultValue="千层饼"
          optionsDisabledarr={[0, 1]}
        />
      </div>
      <div style={{ width: '180px' }} className="rd-col">
      <Select options={options} defaultValue="千层饼" allowClear />
    </div>
    </>
  )
}`,
  })
}
const Api = () => {
  const thead = ['属性', '说明', '类型', '默认值']
  const tbody = [
    ['options', '选项数组', 'string[]', 'undefined'],
    ['placeholder', 'select占位符', 'string', '请输入内容'],
    ['mode', 'select的类型 单选 or 多选', 'multiple|tags', 'tags'],
    [
      'onChange',
      '内置value改变时的回调',
      '(value:string|string[])=>void',
      'undefined',
    ],
    ['defaultValue', '单选框默认选中值', 'string', '空字符串'],
    ['defaultValues', '多选框默认选中值', 'string[]', "['']"],
    ['disabled', 'select是否禁用', 'boolean', 'false'],
    ['optionsDisabledarr', '设置禁用选项', 'number[]', '[]'],
    ['allowClear', '单选框是否允许清除', 'boolean', 'false'],
  ]
  return <Table thead={thead} tbody={tbody}></Table>
}
