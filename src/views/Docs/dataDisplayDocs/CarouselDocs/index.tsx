import React from 'react'
import { Table, DemoBox } from 'src/components'
import Marked from 'src/util/Marked'
import { Carousel } from 'src/UI'
import './index.less'
export default function () {
  return (
    <>
      <h2>Carousel 走马灯</h2>
      <p>旋转木马，一组轮播的区域。</p>
      <DemoBox
        title="基础用法"
        desp=""
        Components={BasicDemo()}
        Code={BasicDemoCode()}
      />
      <h2>Api</h2>
      <Api />
    </>
  )
}
const content = [<div>1</div>, <div>2</div>, <div>3</div>, <div>4</div>]
const BasicDemo = () => {
  return (
    <div className="rd-carousel-demo">
      <Carousel content={content} width={426} height={160} />
    </div>
  )
}
const BasicDemoCode = () => {
  return Marked({
    text: `//JSX
    import './index.less'
    const content = [<div>1</div>, <div>2</div>, <div>3</div>, <div>4</div>]
    const BasicDemo = () => {
      return (
        <div className="rd-carousel-demo">
          <Carousel content={content} width={426} height={160} />
        </div>
      )
    }
    //index.less
    .rd-carousel-demo {
      div {
        background-color: #364d79;
        color: #fff;
        line-height: 160px;
        text-align: center;
      }
    } 
    `,
  })
}

const Api = () => {
  const thead = ['属性', '说明', '类型', '默认值']
  const tbody = [
    ['content', '轮播图展示的内容', 'Array<ReactElement>', '[ ]'],
    ['width', 'carousel的宽度', 'number', '400'],
    ['height', 'carousel的高度', 'number', '400'],
    ['delay', '轮播的时延', 'number', '1500'],
  ]
  return <Table thead={thead} tbody={tbody}></Table>
}
