import React from 'react'
import { Table, DemoBox } from 'src/components'
import Marked from 'src/util/Marked'
import { Input, InputWithAddon, Select, Button } from 'src/UI'
export default function () {
  return (
    <>
      <h2>Input 输入框</h2>
      <p>通过鼠标或键盘输入内容,是最基础的表单域的包装。</p>
      <DemoBox
        title="基础使用"
        desp="当type为password时默认提供suffix,当然你也可以自定义 prefix && suffix"
        Components={basicDemo()}
        Code={basicDemoCode()}
      />
      <DemoBox
        title="使用插件"
        desp="通过HOC手段增强input的功能"
        Components={addonDemo()}
        Code={addonDemoCode()}
      />
      <h2>Input Api</h2>
      <Api />
      <h2>InputWithAddon Api</h2>
      <Api2 />
    </>
  )
}
/* basic */
const basicDemo = () => {
  return (
    <form>
      <div className="rd-row" style={{ width: '65%' }}>
        <Input type="text" placeholder="请输入账号" />
      </div>
      <div className="rd-row" style={{ width: '65%' }}>
        <Input type="password" placeholder="请输入密码" />
      </div>
      <div style={{ width: '65%' }}>
        <Input
          type="text"
          placeholder="enter your username"
          prefix={<span className="iconfont icon-account" />}
          suffix={<span className="iconfont icon-info" />}
        />
      </div>
    </form>
  )
}
const basicDemoCode = () => {
  return Marked({
    text: `/* basic */
    const basicDemo = () => {
      return (
        <form>
          <div className="rd-row" style={{ width: '65%' }}>
            <Input type="text" placeholder="请输入账号" />
          </div>
          <div className="rd-row" style={{ width: '65%' }}>
            <Input type="password" placeholder="请输入密码" />
          </div>
          <div style={{ width: '65%' }}>
            <Input
              type="text"
              placeholder="enter your username"
              prefix={<span className="iconfont icon-account" />}
              suffix={<span className="iconfont icon-info" />}
            />
          </div>
        </form>
      )
    }`,
  })
}
/* addon */
const WithAddon = InputWithAddon(Input)
const addonDemo = () => {
  return (
    <>
      <div className="rd-row" style={{ width: '65%' }}>
        <WithAddon
          placeholder="mysite"
          addonbefore="http://"
          addonafter=".com"
        />
      </div>

      <div className="rd-row" style={{ width: '65%' }}>
        <WithAddon placeholder="mysite" addonbefore="http://" suffix=".com" />
      </div>
      <div className="rd-row" style={{ width: '65%' }}>
        <WithAddon
          placeholder="mysite"
          addonbefore={
            <Select options={['http://', 'https://']} defaultValue="http://" />
          }
          addonafter={
            <Select options={['.com', '.cn', '.site']} defaultValue=".com" />
          }
        />
      </div>
      <div className="rd-row" style={{ width: '65%' }}>
        <WithAddon
          placeholder="mysite"
          addonbefore={
            <div style={{ width: '180px' }}>
              <Select
                options={['自定义宽度', '适于过长的选项']}
                defaultValue="自定义宽度"
              />
            </div>
          }
        />
      </div>
      <div className="rd-row" style={{ width: '65%' }}>
        <WithAddon
          placeholder="mysite"
          addonafter={
            <span
              className="iconfont icon-set"
              style={{ fontSize: '20px' }}
            ></span>
          }
        />
      </div>
      <div className="rd-row" style={{ width: '65%' }}>
        <WithAddon
          placeholder="mysite"
          addonafter={<Button type="success">Search</Button>}
        />
      </div>
      <div className="rd-row" style={{ width: '65%' }}>
        <WithAddon
          placeholder="mysite"
          addonafter={
            <Button type="success">
              <span className="iconfont icon-sousuo"></span>
            </Button>
          }
        />
      </div>
    </>
  )
}
const addonDemoCode = () => {
  return Marked({
    text: `import { Input, InputWithAddon, Select } from 'src/UI'
    /* addon */
const WithAddon = InputWithAddon(Input)
const addonDemo = () => {
  return (
    <>
      <div className="rd-row" style={{ width: '65%' }}>
        <WithAddon
          placeholder="mysite"
          addonbefore="http://"
          addonafter=".com"
        />
      </div>

      <div className="rd-row" style={{ width: '65%' }}>
        <WithAddon placeholder="mysite" addonbefore="http://" suffix=".com" />
      </div>
      <div className="rd-row" style={{ width: '65%' }}>
        <WithAddon
          placeholder="mysite"
          addonbefore={
            <Select options={['http://', 'https://']} defaultValue="http://" />
          }
          addonafter={
            <Select options={['.com', '.cn', '.site']} defaultValue=".com" />
          }
        />
      </div>
      <div className="rd-row" style={{ width: '65%' }}>
        <WithAddon
          placeholder="mysite"
          addonbefore={
            <div style={{ width: '180px' }}>
              <Select
                options={['自定义宽度', '适于过长的选项']}
                defaultValue="自定义宽度"
              />
            </div>
          }
        />
      </div>
      <div className="rd-row" style={{ width: '65%' }}>
        <WithAddon
          placeholder="mysite"
          addonafter={
            <span
              className="iconfont icon-set"
              style={{ fontSize: '20px' }}
            ></span>
          }
        />
      </div>
      <div className="rd-row" style={{ width: '65%' }}>
        <WithAddon
          placeholder="mysite"
          addonafter={<Button type="success">Search</Button>}
        />
      </div>
      <div className="rd-row" style={{ width: '65%' }}>
        <WithAddon
          placeholder="mysite"
          addonafter={
            <Button type="success">
              <span className="iconfont icon-sousuo"></span>
            </Button>
          }
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
    ['placehodler', '预设占位符', 'string', '请输入内容'],
    ['type', '输入类型', 'text|password', 'text'],
    ['prefix', '前缀', 'string|ReactNode', '无'],
    ['sufffix', '后缀', 'string|ReactNode', '无'],
    ['value', 'input受控制', 'string', "''"],
    ['onChange', 'value改变回调函数', '(e:changeEvent)=>void', 'undefined'],
    ['onClick', 'input点击时回调函数', '(e:MouseEvent)=>void', 'undefined'],
    ['defaultValue', 'input的defaultvalue', 'string', "''"],
  ]
  return <Table thead={thead} tbody={tbody}></Table>
}

const Api2 = () => {
  const thead = ['属性', '说明', '类型', '默认值']
  const tbody = [
    ['addonbefore', '设置前置插件', 'string|ReactNode', '无'],
    ['addonafter', '设置后置插件', 'string|ReactNode', '无'],
  ]
  return <Table thead={thead} tbody={tbody}></Table>
}
