import React from 'react'
import { Table, DemoBox } from 'src/components'
import Marked from 'src/util/Marked'
import { Tree } from 'src/UI'
import './index.less'
export default function () {
  return (
    <>
      <h2>Tree 树形控件</h2>
      <p>多层次的结构列表。</p>
      <DemoBox
        title="基础用法"
        desp="通过initState 控制初始化伸展状态"
        Components={BasicDemo()}
        Code={BasicDemoCode()}
      />
      <h2>Api</h2>
      <Api />
    </>
  )
}

const BasicDemo = () => {
  const data = [
    {
      title: '树形控件Demo',
      children: [
        {
          title: '父节点1',
          children: [
            { title: '子节点1' },
            { title: '子节点2' },
            { title: '子节点3' },
          ],
        },
        {
          title: '父节点2',
          children: [
            { title: '子节点1' },
            {
              title: '子节点2',
              children: [
                { title: '孙子节点1' },
                { title: '孙子节点2' },
                { title: '孙子节点3' },
              ],
            },
          ],
        },
        {
          title: '父节点3',
          children: [{ title: '子节点1' }, { title: '子节点2' }],
        },
      ],
    },
  ]
  return (
    <div className="rd-tree-basicDemo">
      <div className="rd-tree-item">
        <Tree data={data} initState={true} />
      </div>
      <div className="rd-tree-item">
        <Tree data={data} />
      </div>
    </div>
  )
}
const BasicDemoCode = () => {
  return Marked({
    text: ` //TSX
    const BasicDemo = () => {
      const data = [
        {
          title: '树形控件Demo',
          children: [
            {
              title: '父节点1',
              children: [
                { title: '子节点1' },
                { title: '子节点2' },
                { title: '子节点3' },
              ],
            },
            {
              title: '父节点2',
              children: [
                { title: '子节点1' },
                {
                  title: '子节点2',
                  children: [
                    { title: '孙子节点1' },
                    { title: '孙子节点2' },
                    { title: '孙子节点3' },
                  ],
                },
              ],
            },
            {
              title: '父节点3',
              children: [{ title: '子节点1' }, { title: '子节点2' }],
            },
          ],
        },
      ]
      return (
        <div className="rd-tree-basicDemo">
          <div className="rd-tree-item">
            <Tree data={data} initState={true} />
          </div>
          <div className="rd-tree-item">
            <Tree data={data} />
          </div>
        </div>
      )
    }
    // style
    .rd-tree-basicDemo {
      overflow: hidden;
      .rd-tree-item {
        float: left;
        width: 45%;
        margin-right: 6px;
      }
    }
    `,
  })
}

const Api = () => {
  const thead = ['属性', '说明', '类型', '默认值']
  const tbody = [
    ['data', '需要展示的data数据', 'Array<dataItem>', 'undefined'],
    [
      'dataItem',
      'data数组的单条数据类型',
      '{title:string|ReactNode ,children:Array<dataItem>}',
      'undefined',
    ],
  ]
  return <Table thead={thead} tbody={tbody}></Table>
}
