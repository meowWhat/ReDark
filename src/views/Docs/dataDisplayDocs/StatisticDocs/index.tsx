import React from 'react'
import { Table, DemoBox } from 'src/components'
import Marked from 'src/util/Marked'
import { Statistic } from 'src/UI'

export default function () {
  return (
    <>
      <h2>Statistic 统计数值</h2>
      <p>
        当需要突出某个或某组数字时,当需要展示带描述的统计类数据时,展示统计数值。
      </p>
      <DemoBox
        title="基础用法"
        desp="支持精度设置,支持前缀和后缀,支持自定义样式"
        Components={BasicDemo()}
        Code={BasicDemoCode()}
      />
      <DemoBox
        title="倒计时组件"
        desp="支持精度设置,支持前缀和后缀,支持自定义样式"
        Components={CountDownDemo()}
        Code={CountDownDemoCode()}
      />
      <h2>StatisticApi</h2>
      <StatisticApi />
      <h2>Statistic.CountdownApi</h2>
      <CountdownApi />
    </>
  )
}
/* 基础Demo */
const BasicDemo = () => {
  return (
    <>
      {/* 基础使用 */}
      <span className="rd-col">
        <Statistic title="Active Users" value={112893} />
      </span>
      {/* 设置精度 */}
      <span className="rd-col">
        <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
      </span>
      {/* 设置前缀 */}
      <span className="rd-col">
        <Statistic
          title="Feedback"
          value={1128}
          prefix={
            <span role="img" aria-labelledby="feedback">
              👍
            </span>
          }
        />
      </span>
      {/* 设置后缀 */}
      <span className="rd-col">
        <Statistic value={93} suffix="/ 100" title="Unmerged" />
      </span>
      {/* 自定义样式 */}
      <span className="rd-col">
        <Statistic
          title="Active"
          value={11.28}
          precision={2}
          valueStyle={{ color: '#3f8600' }}
          prefix={<span className="iconfont icon-cl-icon-d-up"></span>}
          suffix="%"
        />
      </span>
      <span className="rd-col">
        <Statistic
          title="Idle"
          value={9.3}
          precision={2}
          valueStyle={{ color: '#cf1322' }}
          prefix={<span className="iconfont icon-cl-icon-d-down"></span>}
          suffix="%"
        />
      </span>
    </>
  )
}
const BasicDemoCode = () => {
  return Marked({
    text: `const BasicDemo = () => {
      return (
        <>
          {/* 基础使用 */}
          <span className="rd-col">
            <Statistic title="Active Users" value={112893} />
          </span>
          {/* 设置精度 */}
          <span className="rd-col">
            <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
          </span>
          {/* 设置前缀 */}
          <span className="rd-col">
            <Statistic
              title="Feedback"
              value={1128}
              prefix={
                <span role="img" aria-labelledby="feedback">
                  👍
                </span>
              }
            />
          </span>
          {/* 设置后缀 */}
          <span className="rd-col">
            <Statistic value={93} suffix="/ 100" title="Unmerged" />
          </span>
          {/* 自定义样式 */}
          <span className="rd-col">
            <Statistic
              title="Active"
              value={11.28}
              precision={2}
              valueStyle={{ color: '#3f8600' }}
              prefix={<span className="iconfont icon-cl-icon-d-up"></span>}
              suffix="%"
            />
          </span>
          <span className="rd-col">
            <Statistic
              title="Idle"
              value={9.3}
              precision={2}
              valueStyle={{ color: '#cf1322' }}
              prefix={<span className="iconfont icon-cl-icon-d-down"></span>}
              suffix="%"
            />
          </span>
        </>
      )
    }
    `,
  })
}

/* 倒计时 */
const { Countdown } = Statistic

const CountDownDemo = () => {
  const deadline = 1000 * 60 * 60 * 16 * 2
  return <Countdown title="Countdown" value={deadline} />
}

const CountDownDemoCode = () => {
  return Marked({
    text: `  const { Countdown } = Statistic
    const CountDownDemo = () => {
      const deadline = 1000 * 60 * 60 * 16 * 2
      return <Countdown title="Countdown" value={deadline} />
    }    
    `,
  })
}

/* Api */
const StatisticApi = () => {
  const thead = ['属性', '说明', '类型', '默认值']
  const tbody = [
    ['title', '数值的标题', 'string | ReactNode', 'undefined'],
    ['value', '数值内容', 'string | number', '0'],
    ['valueStyle', '设置数值的样式', 'React.CSSProperties', 'undefined'],
    ['prefix', '	设置数值的前缀', 'string | ReactNode', 'undefined'],
    ['suffix', '设置数值的后缀', 'string | ReactNode', 'undefined'],
    ['precision', '	数值精度', 'number', 'undefined'],
  ]
  return <Table thead={thead} tbody={tbody}></Table>
}
const CountdownApi = () => {
  const thead = ['属性', '说明', '类型', '默认值']
  const tbody = [
    ['title', '数值的标题', 'string | ReactNode', 'undefined'],
    ['value', '倒计时的时间戳', 'number', 'undefined'],
    ['valueStyle', '设置数值的样式', 'React.CSSProperties', 'undefined'],
    ['onFinished', '倒计时结束时的触发回调函数', '()=>void', 'undefined'],
  ]
  return <Table thead={thead} tbody={tbody}></Table>
}
