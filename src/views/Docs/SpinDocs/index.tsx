import React, { useState } from 'react'
import { Table, DemoBox } from '../../../components'
import Marked from '../../../util/Marked'
import { Spin, Switch } from '../../../UI'
import './index.less'
export default function() {
  return (
    <>
      <h2>Spin 加载中</h2>
      <p>用于页面和区块的加载中状态。</p>
      <DemoBox
        title="基础用法"
        desp="最简单的使用"
        Components={SpinDemo()}
        Code={SpinDemoCode()}
      />
      <DemoBox
        title="综合运用"
        desp="轻点开关尝试一下！！"
        Components={
          <div className="spinTipDemo">
            <SpinTipDemo delay={0} />
            <SpinTipDemo delay={1000} />
          </div>
        }
        Code={SpinTipDemoCode()}
      />
      <h2>Api</h2>
      <Api />
    </>
  )
}

/* 基础用法 */
const SpinDemo = () => {
  return (
    <>
      <Spin size="small" color="#f81d22" spinning={true} />
      <Spin spinning={true} />
      <Spin size="large" color="#1890ff" spinning={true} />
    </>
  )
}
const SpinDemoCode = () => {
  return Marked({
    text: `  <Spin size="small" color="#f81d22" spinning={true} />
    <Spin spinning={true} />
    <Spin size="large" color="#1890ff" spinning={true} />`
  })
}

/* 支持tip  */
const SpinTipDemo = (props: { delay: number }) => {
  const [flag, setFlag] = useState(false)
  return (
    <div className="spinTipDemoItem">
      <Spin tip="文字描述" spinning={flag} delay={props.delay}>
        <p>
          spin支持自定义颜色,拥有多种大小,支持自定义描述文案。将spin放入容器中,需要给spin的父盒子一个宽度,并将容器组件放在spin的children中.而且你还可以用spinning属性控制spin的显示与隐藏.！！
        </p>
      </Spin>
      <br />
      Spin 开关 {props.delay} 延迟: &nbsp;
      <Switch
        type="colorful"
        initState={false}
        onChange={() => {
          setFlag(!flag)
        }}
      />
    </div>
  )
}
const SpinTipDemoCode = () => {
  return Marked({
    text: `//tsx
    const SpinTipDemo = (props: { delay: number }) => {
      const [flag, setFlag] = useState(false)
      return (
        <div className="spinTipDemoItem">
          <Spin tip="文字描述" spinning={flag} delay={props.delay}>
            <p>
              spin支持自定义颜色,拥有多种大小,支持自定义描述文案。将spin放入容器中,需要给spin的
              父盒子一个宽度,并将容器组件放在spin的children中.而且你还可以用spinning属性控制
              spin的显示与隐藏.！！
            </p>
          </Spin>
          <br />
          Spin 开关 {props.delay} 延迟: &nbsp;
          <Switch
            type="colorful"
            initState={false}
            onChange={() => {
              setFlag(!flag)
            }}
          />
        </div>
      )
    }
    React.render(
  <div className="spinTipDemo">
    <SpinTipDemo delay={0} />
    <SpinTipDemo delay={1000} />
  </div>
  ,document.querySelector('#root'))

  //style
  .spinTipDemo {
    padding: 10px;
    &::after {
      display: block;
      content: '';
      clear: both;
    }
    .spinTipDemoItem {
      width: 45%;
      float: left;
      &:nth-child(1) {
        margin-right: 70px;
      }
    }
  }
    `
  })
}
const Api = () => {
  const thead = ['属性', '说明', '类型', '默认值']
  const tbody = [
    ['spinning', '控制spin的显示与隐藏', 'boolean', 'false'],
    ['size', '控制spin的大小 可选default | small | large', 'string', 'default'],
    ['color', '控制spin的主题颜色', 'string', '#3eaf7c'],
    ['tip', 'spin的描述文案', 'string', 'undefined'],
    ['delay', '延迟显示加载效果的时间（防止闪烁）', 'number', '0']
  ]
  return <Table thead={thead} tbody={tbody}></Table>
}
