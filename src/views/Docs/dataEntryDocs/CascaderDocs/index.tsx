import React from 'react'
import { Table, DemoBox } from 'src/components'
import Marked from 'src/util/Marked'
import { Cascader } from 'src/UI'
export default function () {
  return (
    <>
      <h2>Cascader 级联选择器</h2>
      <DemoBox
        title="基础使用"
        desp="通过options与resOptions驱动cascader. 通过onChange事件获取value,类型为string[]"
        Components={basicDemo()}
        Code={basicDemoCode()}
      />
      <DemoBox
        title="默认值与禁用参数"
        desp=""
        Components={setDefaultValueDemo()}
        Code={setDefaultValueDemoCode()}
      />
      <h2>Input Api</h2>
      <Api />
    </>
  )
}

const province = ['湖北省', '河南省', '浙江省']
const city = new Map([
  ['湖北省', { value: ['武汉', '黄冈', '随州'] }],
  ['河南省', { value: ['郑州'] }],
  ['浙江省', { value: ['杭州', '温州'] }],
])
const area = new Map([
  ['武汉', { value: ['江岸区', '硚口区', '洪山区'], disabled: [1] }],
  ['黄冈', { value: ['黄州区', '华容区'], disabled: [0] }],
  ['随州', { value: ['曾都区'] }],
  ['郑州', { value: ['金水区', '惠济区'] }],
  ['杭州', { value: ['西湖区', '余杭区'] }],
  ['温州', { value: ['龙湾区'] }],
])

/* basic */
const basicDemo = () => {
  return (
    <>
      <div style={{ width: '350px' }} className="rd-row">
        <Cascader
          options={province}
          restOptions={[city]}
          onChange={(value) => {
            console.log(value)
          }}
        />
      </div>
      <div style={{ width: '350px' }}>
        <Cascader
          options={province}
          restOptions={[city]}
          placehodler={['请选择省级', '请选择市级']}
        />
      </div>
    </>
  )
}
const basicDemoCode = () => {
  return Marked({
    text: `const province = ['湖北省', '河南省', '浙江省']
    const city = new Map([
      ['湖北省', { value: ['武汉', '黄冈', '随州'] }],
      ['河南省', { value: ['郑州'] }],
      ['浙江省', { value: ['杭州', '温州'] }],
    ])
    const basicDemo = () => {
      return (
        <div style={{ width: '350px' }}>
          <Cascader options={province} restOptions={[city]} />
        </div>
      )
    }`,
  })
}
/* defaultValue */
const setDefaultValueDemo = () => {
  return (
    <>
      <div style={{ width: '450px' }} className="rd-row">
        <Cascader
          options={province}
          restOptions={[city, area]}
          defaultValues={['湖北省', '武汉', '江岸区']}
        />
      </div>
      <div style={{ width: '450px' }}>
        <Cascader
          options={province}
          restOptions={[city, area]}
          optionsDisabledarr={[1]}
        />
      </div>
    </>
  )
}
const setDefaultValueDemoCode = () => {
  return Marked({
    text: `//add area from basicDemo
    const area = new Map([
      ['武汉', { value: ['江岸区', '硚口区', '洪山区'], disabled: [1] }],
      ['黄冈', { value: ['黄州区', '华容区'], disabled: [0] }],
      ['随州', { value: ['曾都区'] }],
      ['郑州', { value: ['金水区', '惠济区'] }],
      ['杭州', { value: ['西湖区', '余杭区'] }],
      ['温州', { value: ['龙湾区'] }],
    ])
    const setDefaultValueDemo = () => {
      return (
        <>
          <div style={{ width: '450px' }} className="rd-row">
            <Cascader
              options={province}
              restOptions={[city, area]}
              defaultValues={['湖北省', '武汉', '江岸区']}
            />
          </div>
          <div style={{ width: '450px' }}>
            <Cascader
              options={province}
              restOptions={[city, area]}
              optionsDisabledarr={[1]}
            />
          </div>
        </>
      )
    }
    `,
  })
}

const Api = () => {
  const thead = ['属性', '说明', '类型', '默认值']
  const tbody = [
    ['options', '最顶端的数据源', 'string[]', 'undefined'],
    [
      'resOptions',
      '基于options衍生的联动数据源.需要传递一个Map数组,Map选取Opitons[index]为key,{value:数据源,disbaled:禁用数组}为value',
      'Array<Map<string, { value: string[]; disabled?: number[] }>>',
      'undefined',
    ],
    ['defaultValues', '默认的选中项', 'string[]', 'undefined'],
    ['optionsDisabledarr', '顶端数据源禁用数组', 'Array<number>', 'undefined'],
    ['placehodler', 'cascader占位符', 'string[]', 'undefined'],
    ['onChange', 'value改变回调函数', '(value:string[])=>void', 'undefined'],
  ]
  return <Table thead={thead} tbody={tbody}></Table>
}
