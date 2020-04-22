import React from 'react'
import './Guide.less'
import { Alert } from 'src/UI'
import Marked from 'src/util/Marked'
import { Link } from 'react-router-dom'
export default function Guide() {
  return (
    <div className="rd-guide">
      <h1>使用指南</h1>
      <Alert
        type="warning"
        message="使用前准备"
        description="请确保你的电脑安装过Node.js并且Node.js的版本大于8."
        showIcon
      />
      <h1>全局安装</h1>
      <p>现在让我们尝试安装ReDark吧!</p>
      <div className="rd-guide-demo">
        <Marked
          text={`# 安装
    yarn global add redark-cli # 或者：npm install -g redark-cli
    
    # 使用cli创建项目  
    redark-cli create  demo
    
    # 安装项目依赖    
    cd ./demo  &&  yarn  
    
    # 开启服务器 ,看见hello world  
    yarn start `}
          type="bash"
        />
      </div>
      <h1>快速使用</h1>
      <p>我们只需要导入@rd,然后在项目中使用！！</p>
      <div className="rd-guide-demo">
        <Marked
          text={`   
    import React from 'react'
    import ReactDOM from 'react-dom'

    // 导入 redark
    import { Button } from '@rd'

    // 使用
    ReactDOM.render(<Button>Hello World</Button>, document.querySelector('#root')) 
    `}
        />
      </div>
      <p>
        请参考 redark 的<Link to="/docs/button">使用文档</Link>
        ,来了解更多的组件,和详细的API.
      </p>
    </div>
  )
}
