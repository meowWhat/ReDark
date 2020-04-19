import React, { useState } from 'react'
import { Table, DemoBox } from 'src/components'
import Marked from 'src/util/Marked'
import { FormRule, Input, Button } from 'src/UI'

export default function () {
  return (
    <>
      <h2>FormRule 表单验证工具</h2>
      <p>通过包装,对input增强,增加验证功能</p>
      <DemoBox
        title="基础用法"
        desp="基本的综合使用,对input输入进行提示,对button提交进行限制"
        Components={BasicDemo()}
        Code={basicDemoCode()}
      />
      <DemoBox
        title="自定义Rule"
        desp="通过回调函数,自定义验证表单的内容."
        Components={customRuleDemo()}
        Code={customRuleDemoCode()}
      />
      <h2>Api</h2>
      <Api />
    </>
  )
}
const RuleInput = FormRule.WithRule(Input)
const BasicDemo = () => {
  const [value, setValue] = useState('')
  const [value2, setValue2] = useState('')
  const [disabled, setDisabed] = useState({
    username: true,
    password: true,
  })
  const usernameHandle = (flag: boolean) => {
    setDisabed((pre) => ({ username: !flag, password: pre.password }))
  }
  const passwordHandle = (flag: boolean) => {
    setDisabed((pre) => ({ username: pre.username, password: !flag }))
  }
  return (
    <div>
      <RuleInput
        name="账号 :"
        rule={{
          require: {
            ruleValue: true,
            errorText: '账号必须输入',
          },
          len: {
            ruleValue: 5,
            errorText: '账号长度不能小于5',
          },
        }}
        placeholder="请输入账号"
        value={value}
        onChange={(e) => e && setValue(e.target.value)}
        isVerfyValue={usernameHandle}
      />
      <RuleInput
        name="密码 :"
        rule={{
          require: {
            ruleValue: true,
            errorText: '密码必须输入',
          },
          len: {
            ruleValue: 5,
            errorText: '密码长度不能小于5',
          },
        }}
        type="password"
        placeholder="请输入密码"
        value={value2}
        onChange={(e) => e && setValue2(e.target.value)}
        isVerfyValue={passwordHandle}
      />
      <div style={{ width: '500px', textAlign: 'center' }}>
        <Button
          onClick={() => {
            console.log('submit')
          }}
          disabled={disabled.username || disabled.password}
        >
          登 录
        </Button>
      </div>
    </div>
  )
}
const basicDemoCode = () => {
  return Marked({
    text: `import { FormRule, Input, Button } from '@rd'
    const RuleInput = FormRule.WithRule(Input)
    const BasicDemo = () => {
      const [value, setValue] = useState('')
      const [value2, setValue2] = useState('')
      const [disabled, setDisabed] = useState({
        username: true,
        password: true,
      })
      const usernameHandle = (flag: boolean) => {
        setDisabed((pre) => ({ username: !flag, password: pre.password }))
      }
      const passwordHandle = (flag: boolean) => {
        setDisabed((pre) => ({ username: pre.username, password: !flag }))
      }
      return (
        <div>
          <RuleInput
            name="账号 :"
            rule={{
              require: {
                ruleValue: true,
                errorText: '账号必须输入',
              },
              len: {
                ruleValue: 5,
                errorText: '账号长度不能小于5',
              },
            }}
            placeholder="请输入账号"
            value={value}
            onChange={(e) => e && setValue(e.target.value)}
            isVerfyValue={usernameHandle}
          />
          <RuleInput
            name="密码 :"
            rule={{
              require: {
                ruleValue: true,
                errorText: '密码必须输入',
              },
              len: {
                ruleValue: 5,
                errorText: '密码长度不能小于5',
              },
            }}
            type="password"
            placeholder="请输入密码"
            value={value2}
            onChange={(e) => e && setValue2(e.target.value)}
            isVerfyValue={passwordHandle}
          />
          <div style={{ width: '500px', textAlign: 'center' }}>
            <Button
              onClick={() => {
                console.log('submit')
              }}
              disabled={disabled.username || disabled.password}
            >
              登 录
            </Button>
          </div>
        </div>
      )
    }`,
  })
}

const customRuleDemo = () => {
  return (
    <RuleInput
      name="自定义验证 :"
      rule={{ require: { ruleValue: true, errorText: '内容不允许为空' } }}
      customRule={{
        fn: (value) => value === 'aaa',
        errorText: '输入内容必须全等于aaa',
      }}
    />
  )
}
const customRuleDemoCode = () => {
  return Marked({
    text: `import { FormRule, Input } from '@rd'
    const RuleInput = FormRule.WithRule(Input)
    const customRuleDemo = () => {
    return (
      <RuleInput
        name="自定义验证 :"
        rule={{ require: { ruleValue: true, errorText: '内容不允许为空' } }}
        customRule={{
          fn: (value) => value === 'aaa',
          errorText: '输入内容必须全等于aaa',
        }}
      />
    )
  }`,
  })
}
/* Api */
const Api = () => {
  const thead = ['属性', '说明', '类型', '默认值']
  const tbody = [
    ['name', '设置input前缀名称', 'string', '无'],
    ['rule', '基础规则', '{ require ,  len ?}', '无'],
    [
      'require',
      'rule.require,控制文本不为空',
      '{ ruleValue : boolean , errorText:string }',
      '无',
    ],
    [
      'len',
      'rule.len,控制文本长度',
      '{ ruleValue : number , errorText:string }',
      '无',
    ],
    ['isVerfyValue', '验证结果回调函数', '(res:boolean)=>void', '无'],
    [
      'customRule',
      '自定义Rule,需要传入的fn 返回一个boolean 来决定验证结果',
      '{ fn :( value: string) => boolean , errorText : string  }',
      '无',
    ],
  ]
  return <Table thead={thead} tbody={tbody}></Table>
}
