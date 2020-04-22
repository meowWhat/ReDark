import React from 'react'
import { Table, DemoBox } from 'src/components'
import Marked from 'src/util/Marked'
import { Upload, Alert } from 'src/UI'
export default function () {
  return (
    <>
      <h2>Upload 文件上传</h2>
      <p>
        组件需要与后端配合使用,想获取成功的演示结果,请将服务器端代码COPY 在
        本地开启对应服务 ！！
      </p>
      <DemoBox
        title="基础使用"
        desp="设置上传接口,与请求方式,服务器会接受到rdFiles:{File}"
        Components={basicDemo()}
        Code={basicDemoCode()}
      />
      <DemoBox
        title="删除操作"
        desp="设置sereve.delete,需要手动返回一个请求参数"
        Components={deleteDemo()}
        Code={deleteDemoCode()}
      />
      <DemoBox
        title="服务端对应操作,请仔细阅读！"
        desp=""
        Components={serveDemo()}
        Code={serveCode()}
      />
      <h2>Upload组件Api</h2>
      <UploadApi />
      <h2>serve.upload Api</h2>
      <UploadServeApi />
      <h2>serve.delete Api 继承自serve.upload</h2>
      <DeleteServeApi />
    </>
  )
}
/* basic */
const basicDemo = () => {
  return (
    <div style={{ width: '400px' }}>
      <Upload
        serve={{
          upload: {
            url: 'http://localhost:3888/',
            method: 'POST',
          },
        }}
      />
    </div>
  )
}
const basicDemoCode = () => {
  return Marked({
    text: `const basicDemo = () => {
      return (
        <div style={{ width: '400px' }}>
          <Upload
            serve={{
              upload: {
                url: 'http://localhost:3888/',
                method: 'POST',
              },
            }}
          />
        </div>
      )
    }`,
  })
}

/* delete */
const deleteDemo = () => {
  return (
    <div style={{ width: '400px' }}>
      <Upload
        serve={{
          upload: {
            url: 'http://localhost:3888/',
            method: 'POST',
          },
          delete: {
            url: 'http://localhost:3888/delete',
            method: 'POST',
            deleteBody: (name, index) => {
              //获取需要删除的文件名 与 对应索引
              //我们要求你返回一个数值,用作发送请求的body
              //当然我们利用 json 格式进行前后端交互
              return {
                name,
                index,
              }
            },
            onResolve: (res) => {
              console.log(res)
            },
            onReject: (res) => {
              console.log(res)
            },
            onError: (res) => {
              console.log(res)
            },
          },
        }}
      />
    </div>
  )
}
const deleteDemoCode = () => {
  return Marked({
    text: `/* delete */
    const deleteDemo = () => {
      return (
        <div style={{ width: '400px' }}>
          <Upload
            serve={{
              upload: {
                url: 'http://localhost:3888/',
                method: 'POST',
              },
              delete: {
                url: 'http://localhost:3888/delete',
                method: 'POST',
                deleteBody: (name, index) => {
                  //获取需要删除的文件名 与 对应索引
                  //我们要求你返回一个数值,用作发送请求的body
                  //当然我们利用 json 格式进行前后端交互
                  return {
                    name,
                    index,
                  }
                },
                onResolve: (res) => {
                  console.log(res)
                },
                onReject: (res) => {
                  console.log(res)
                },
                onError: (res) => {
                  console.log(res)
                },
              },
            }}
          />
        </div>
      )
    }`,
  })
}

/* serveCode */
const serveDemo = () => {
  return (
    <Alert
      type="warning"
      message="Upload组件与后端配合须知"
      description="服务器端需要对跨域进行设置,并会接受一个key为rdFiles 的File对象,同时需要后端返回结果或者设置state=200,否则Upload组件会判断结果为上传失败.若进行删除操作,我们利用json通讯,参数为 deleteBody 的返回值.可以参考下面以node编写的服务器端代码"
      showIcon
    />
  )
}
const serveCode = () => {
  return Marked({
    text: `/* node + koa + koa-body */
const Koa = require('koa')
const koaBody = require('koa-body')
const app = new Koa()

app.use(
  koaBody({
    multipart: true,
  })
)

app.use((ctx, next) => {
  //需要设置CORS
  if (ctx.method === 'OPTIONS') {
    ctx.status = 200
  }
  ctx.set({
    'Access-Control-Allow-Origin': ctx.header.origin,
    'Access-Control-Allow-Headers': 'X-Token,Content-Type',
    'Access-Control-Allow-Methods': 'PUT,DELETE',
    'Access-Control-Allow-Credentials': 'true',
  })

  next()
})

app.use(async (ctx) => {
  if (ctx.url === '/' && ctx.method === 'POST') {
    // const file = ctx.request.files.rdFiles 利用rdFiles字段获取File对象
    ctx.body = {
      res: 'bla bla',
    }
  }
  if (ctx.url === '/delete' && ctx.method === 'POST') {
    ctx.body = {
      res: ctx.request.body,
    }
  }
})
app.listen(3888, () => {
  console.log('serve on')
})

`,
  })
}

/* Api */
const UploadApi = () => {
  const thead = ['属性', '说明', '类型', '默认值']
  const tbody = [
    ['limitSize', '限制文件大小单位bytes', 'number', '8888'],
    ['maxList', '限制上传数量', 'number', '3'],
    ['serve', '配置upload与delete请求', 'UploadServe && DeleteServe', '无'],
  ]
  return <Table thead={thead} tbody={tbody}></Table>
}
const UploadServeApi = () => {
  const thead = ['属性', '说明', '类型', '默认值']
  const tbody = [
    ['url', '接口地址,必传参数', 'string', '无'],
    ['mehod', '请求方式', 'string', '无'],
    ['onResolve', '请求成功回调', '(res:any)=>void', 'undefined'],
    ['onReject', '服务端驳回回调', '(res:any)=>void', 'undefined'],
    [
      'onResolve',
      '服务器崩溃或波动 ,导致请求异常回调',
      '(err:any)=>void',
      'undefined',
    ],
  ]
  return <Table thead={thead} tbody={tbody}></Table>
}
const DeleteServeApi = () => {
  const thead = ['属性', '说明', '类型', '默认值']
  const tbody = [
    [
      'deleteBody',
      '文件ListItem删除回调,获得文件名称与列表索引,需要返回一个body作为删除操作的网络请求参数',
      '(name?:string,index?:number)=>any',
      'undefined',
    ],
  ]
  return <Table thead={thead} tbody={tbody}></Table>
}
