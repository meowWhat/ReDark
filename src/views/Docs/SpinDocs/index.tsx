import React, { useState } from 'react'
import { Table, DemoBox } from '../../../components'
import Marked from '../../../util/Marked'
import { Spin, Switch, Alert } from '../../../UI'
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
            <SpinTipDemo delay={0} simple={false} />
            <SpinTipDemo delay={1000} simple={true} />
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
      <Spin size="small" color="#f81d22" spinning={true} simple={true} />
      <Spin spinning={true} simple={true} />
      <Spin size="large" color="#1890ff" spinning={true} simple={true} />
    </>
  )
}
const SpinDemoCode = () => {
  return Marked({
    text: `  <Spin size="small" color="#f81d22" spinning={true} />
    <Spin spinning={true} />
    <Spin size="large" color="#1890ff" spinning={true} />
    <Spin size="small" color="#f81d22" spinning={true} simple={true} />
    <Spin spinning={true} simple={true} />
    <Spin size="large" color="#1890ff" spinning={true} simple={true} />`
  })
}

/* 支持tip  */
const SpinTipDemo = (props: { delay: number; simple: boolean }) => {
  const [flag, setFlag] = useState(false)
  return (
    <div className="spinTipDemoItem">
      <Spin
        tip="文字描述"
        spinning={flag}
        delay={props.delay}
        simple={props.simple}
      >
        <Alert
          message="Spin-Tip-Demo"
          type="success"
          description="spin支持自定义颜色,拥有多种大小,支持自定义描述文案。将spin放入容器中,需要给spin的父盒子一个宽度,并将容器组件放在spin的children中.而且你还可以用spinning属性控制spin的显示与隐藏.还有delay功能,帮你解决spin闪烁的问题！"
          showIcon={true}
        />
      </Spin>
      <br />
      👻 {props.delay} ms 延迟: &nbsp;
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
    const SpinTipDemo = (props: { delay: number; simple: boolean }) => {
      const [flag, setFlag] = useState(false)
      return (
        <div className="spinTipDemoItem">
          <Spin
            tip="文字描述"
            spinning={flag}
            delay={props.delay}
            simple={props.simple}
          >
            <Alert
              message="Spin-Tip-Demo"
              type="success"
              description="spin支持自定义颜色,拥有多种大小,支持自定义描述文案。将spin放入容器
              中,需要给spin的父盒子一个宽度,并将容器组件放在spin的children中.而且你还可以用
              spinning属性控制spin的显示与隐藏.还有delay功能,帮你解决spin闪烁的问题！"
              showIcon={true}
            />
          </Spin>
          <br />
          👻 {props.delay} ms 延迟: &nbsp;
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
  <SpinTipDemo delay={0} simple={false} />
  <SpinTipDemo delay={1000} simple={true} />
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
    ['simple', '控制spin的样式', 'boolean', 'false'],
    ['spinning', '控制spin的显示与隐藏', 'boolean', 'false'],
    ['size', '控制spin的大小 可选default | small | large', 'string', 'default'],
    ['color', '控制spin的主题颜色', 'string', '#3eaf7c'],
    ['tip', 'spin的描述文案', 'string', 'undefined'],
    ['delay', '延迟显示加载效果的时间（防止闪烁）', 'number', '0']
  ]
  return <Table thead={thead} tbody={tbody}></Table>
}
