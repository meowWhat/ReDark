import React from 'react'
import { Table, DemoBox } from 'src/components'
import Marked from 'src/util/Marked'
import { Result, Button } from 'src/UI'
import result403 from 'src/basic/img/403.jpg'
import result404 from 'src/basic/img/404.jpg'
import result500 from 'src/basic/img/500.jpg'
export default function () {
  return (
    <>
      <h2>Result 结果</h2>
      <p>用于反馈一系列操作任务的处理结果。</p>
      <DemoBox
        title="result success"
        desp=""
        Components={ResultSuccess()}
        Code={ResultSuccessCode()}
      />
      <DemoBox
        title="result info"
        desp=""
        Components={ResultInfo()}
        Code={ResultInfoCode()}
      />
      <DemoBox
        title="result warning"
        desp=""
        Components={ResultWarning()}
        Code={ResultWarningCode()}
      />
      <DemoBox
        title="result error"
        desp=""
        Components={ResultError()}
        Code={ResultErrorCode()}
      />
      <DemoBox
        title="result 403"
        desp=""
        Components={Result403()}
        Code={Result403Code()}
      />
      <DemoBox
        title="result 404"
        desp=""
        Components={Result404()}
        Code={Result404Code()}
      />
      <DemoBox
        title="result 500"
        desp=""
        Components={Result500()}
        Code={Result500Code()}
      />
      <h2>Api</h2>
      <Api />
    </>
  )
}

/*  result success*/
const ResultSuccess = () => {
  return (
    <Result
      type="success"
      title="Successfully Purchased Cloud Server ECS!"
      desp="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
      extra={
        <>
          <Button type="primary">Go Console</Button>
          <Button>Buy Again</Button>
        </>
      }
    />
  )
}
const ResultSuccessCode = () => {
  return Marked({
    text: `<Result
    type="success"
    title="Successfully Purchased Cloud Server ECS!"
    desp="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes,
     please wait."
    extra={
      <>
        <Button type="primary">Go Console</Button>
        <Button>Buy Again</Button>
      </>
    }
  />`,
  })
}

/* result info */
const ResultInfo = () => {
  return (
    <Result
      type="info"
      title="Your operation has been executed"
      extra={
        <>
          <Button type="primary">Go Console</Button>
        </>
      }
    />
  )
}
const ResultInfoCode = () => {
  return Marked({
    text: `<Result
    type="info"
    title="Your operation has been executed"
    extra={
      <>
        <Button type="primary">Go Console</Button>
      </>
    }
  />`,
  })
}

/* result warning */
const ResultWarning = () => {
  return (
    <Result
      type="warning"
      title="There are some problems with your operation."
      extra={
        <>
          <Button type="primary">Go Console</Button>
        </>
      }
    />
  )
}
const ResultWarningCode = () => {
  return Marked({
    text: `<Result
    type="warning"
    title="There are some problems with your operation."
    extra={
      <>
        <Button type="primary">Go Console</Button>
      </>
    }
  />`,
  })
}

/* result error */
const ResultError = () => {
  return (
    <Result
      type="error"
      title="Submission Failed"
      desp="Please check and modify the following information before resubmitting."
      extra={
        <>
          <Button type="primary">Go Console</Button>
          <Button>Buy Again</Button>
        </>
      }
    />
  )
}
const ResultErrorCode = () => {
  return Marked({
    text: `<Result
    type="error"
    title="Submission Failed"
    desp="Please check and modify the following information before resubmitting."
    extra={
      <>
        <Button type="primary">Go Console</Button>
        <Button>Buy Again</Button>
      </>
    }
  />`,
  })
}

/* result 403 */

const Result403 = () => {
  return (
    <Result
      imgSrc={result403}
      title="403"
      desp="Sorry, you are not authorized to access this page."
      extra={
        <>
          <Button type="primary">Back Home</Button>
        </>
      }
    />
  )
}
const Result403Code = () => {
  return Marked({
    text: `
import result403 from 'src/basic/img/403.jpg'

    <Result
    imgSrc={result403}
    title="403"
    desp="Sorry, you are not authorized to access this page."
    extra={
      <>
        <Button type="primary">Back Home</Button>
      </>
    }
  />`,
  })
}

/* result 404 */

const Result404 = () => {
  return (
    <Result
      imgSrc={result404}
      title="404"
      desp="Sorry, the page you visited does not exist."
      extra={
        <>
          <Button type="primary">Back Home</Button>
        </>
      }
    />
  )
}
const Result404Code = () => {
  return Marked({
    text: `
import result404 from 'src/basic/img/404.jpg'

    <Result
    imgSrc={result404}
    title="404"
    desp="Sorry, the page you visited does not exist."
    extra={
      <>
        <Button type="primary">Back Home</Button>
      </>
    }
  />`,
  })
}

/* result 500 */

const Result500 = () => {
  return (
    <Result
      imgSrc={result500}
      title="500"
      desp="Sorry, the server is wrong."
      extra={
        <>
          <Button type="primary">Back Home</Button>
        </>
      }
    />
  )
}
const Result500Code = () => {
  return Marked({
    text: `
import result500 from 'src/basic/img/500.jpg'

    <Result
    imgSrc={result500}
    title="500"
    desp="Sorry, the server is wrong."
    extra={
      <>
        <Button type="primary">Back Home</Button>
      </>
    }
  />`,
  })
}
const Api = () => {
  const thead = ['属性', '说明', '类型', '默认值']
  const tbody = [
    [
      'type',
      'result 类型可选值为 success | info | warning | error',
      'string',
      '无',
    ],
    ['imgSrc', '与type冲突,展示自定义result图片', 'string', '无'],
    ['title', 'result标题', 'string', '无'],
    ['desp', 'result描述文案', 'string', '无'],
    ['extra', '传入自定义组件 比如Button 按钮', 'ReactNode', '无'],
  ]
  return <Table thead={thead} tbody={tbody}></Table>
}
