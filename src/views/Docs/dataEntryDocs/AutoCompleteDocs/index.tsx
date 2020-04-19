import React, { useState } from 'react'
import { Table, DemoBox } from 'src/components'
import Marked from 'src/util/Marked'
import { AutoComplete, InputWithAddon, Button } from 'src/UI'

export default function () {
  return (
    <>
      <h2>AutoComplete 自动完成</h2>
      <p>输入框自动完成功能。</p>
      <DemoBox
        title="基础使用"
        desp="基本使用。通过 options 设置自动完成的数据源."
        Components={BasicDemo()}
        Code={basicDemoCode()}
      />

      <h2>Input Api</h2>
      <Api />
    </>
  )
}

/* basic */
const Addon = InputWithAddon(AutoComplete)
const BasicDemo = () => {
  const [options, setOptions] = useState<Array<string>>([])
  const mockVal = (str: string, repeat: number = 1) => str.repeat(repeat)
  return (
    <>
      <div className="rd-row" style={{ width: '350px' }}>
        <AutoComplete
          options={options}
          onSearch={(searchText) => {
            setOptions(
              !searchText
                ? []
                : [
                    mockVal(searchText),
                    mockVal(searchText, 2),
                    mockVal(searchText, 3),
                  ]
            )
          }}
        />
      </div>
      <div style={{ width: '350px' }}>
        <Addon
          addonafter={
            <Button type="success">
              <span className="iconfont icon-search"></span>
            </Button>
          }
          options={options}
          onSearch={(searchText: string) => {
            setOptions(
              !searchText
                ? []
                : [
                    mockVal(searchText),
                    mockVal(searchText, 2),
                    mockVal(searchText, 3),
                  ]
            )
          }}
        />
      </div>
    </>
  )
}
const basicDemoCode = () => {
  return Marked({
    text: `import { AutoComplete, InputWithAddon, Button } from '@rd'
    const Addon = InputWithAddon(AutoComplete)
    const BasicDemo = () => {
      const [options, setOptions] = useState<Array<string>>([])
      const mockVal = (str: string, repeat: number = 1) => str.repeat(repeat)
      return (
        <>
          <div className="rd-row" style={{ width: '350px' }}>
            <AutoComplete
              options={options}
              onSearch={(searchText) => {
                setOptions(
                  !searchText
                    ? []
                    : [
                        mockVal(searchText),
                        mockVal(searchText, 2),
                        mockVal(searchText, 3),
                      ]
                )
              }}
            />
          </div>
          <div style={{ width: '350px' }}>
            <Addon
              addonafter={
                <Button type="success">
                  <span className="iconfont icon-search"></span>
                </Button>
              }
              options={options}
              onSearch={(searchText: string) => {
                setOptions(
                  !searchText
                    ? []
                    : [
                        mockVal(searchText),
                        mockVal(searchText, 2),
                        mockVal(searchText, 3),
                      ]
                )
              }}
            />
          </div>
        </>
      )
    }`,
  })
}

const Api = () => {
  const thead = ['属性', '说明', '类型', '默认值']
  const tbody = [
    ['options', '自动完成的数据源,内置不具备匹配算法', 'string[]', 'undefined'],
    [
      'onSearch',
      '用户输入内容后触发事件,应该这个回调中改变options',
      '(value: string) => void',
      'undefined',
    ],
    [
      '...res',
      '剩余参数,与Input组件的Api相同,同时支持InputWithAddon的使用',
      'Input.props',
      'undefined',
    ],
  ]
  return <Table thead={thead} tbody={tbody}></Table>
}
