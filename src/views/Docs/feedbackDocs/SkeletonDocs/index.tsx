import React, { useState } from 'react'
import { Table, DemoBox } from 'src/components'
import Marked from 'src/util/Marked'
import {
  Skeleton,
  SkeletonAvatar,
  SkeletonInput,
  ButtonGroup,
  Button,
  Switch,
} from 'src/UI'
import './index.less'
export default function () {
  return (
    <>
      <h2>Skeleton 骨架屏</h2>
      <p>在需要等待加载内容的位置提供一个占位图形组合。</p>
      <DemoBox
        title="基础用法"
        desp="最简单的占位效果"
        Components={<Skeleton />}
        Code={Marked({
          text: '<Skeleton />',
        })}
      />
      <DemoBox
        title="显示avatar"
        desp="更复杂的组合。"
        Components={<Skeleton avatar={true} rows={3} />}
        Code={Marked({
          text: '<Skeleton active={false} avatar={true} rows={3} />',
        })}
      />
      <DemoBox
        title="显示动画效果"
        desp=""
        Components={<Skeleton active={true} />}
        Code={Marked({
          text: '<Skeleton active={true} />',
        })}
      />
      <DemoBox
        title="骨架头像和输入框。"
        desp="你将使用二次封装的的组件进行占位"
        Components={SkeletonDemo()}
        Code={SkeletonDemoCode()}
      />
      <DemoBox
        title="控制 Skeleteon "
        desp="使用 loading 控制骨架屏的显示与隐藏"
        Components={SkeletonShowDemo()}
        Code={Marked({
          text: `   import {Skeleton , Switch} from 'src/UI'

          const SkeletonShow = () => {
            const [loading, setLoading] = useState(true)
            return (
              <>
                <Switch type="colorful" onChange={() => setLoading(!loading)} />
                <Skeleton loading={loading} />
              </>
            )`,
        })}
      />
      <h2>Api - Skeleton</h2>
      <SkeleteonApi />
      <h2>Api - SkeletonAvatar</h2>
      <SkeletonAavatarApi />
      <h2>Api - SkeletonInput</h2>
      <SkeletonInputApi />
    </>
  )
}
/* 骨架头像和输入框。 */
const SkeletonDemo = () => {
  // avatar state
  const [avatar, setAvatar] = useState<{
    acitve: boolean
    size: 'default' | 'small' | 'large'
    shape: 'circle' | 'square'
  }>({
    acitve: false,
    size: 'default',
    shape: 'circle',
  })
  // input state
  const [input, setInput] = useState<{
    acitve: boolean
    size: 'default' | 'small' | 'large'
  }>({
    acitve: false,
    size: 'default',
  })

  return (
    <>
      {/* avatar */}
      <div className="SkeletonDemo">
        <span>Avatar Acitve:</span>
        <Switch
          onChange={() => {
            setAvatar((prev) => {
              prev.acitve = !prev.acitve
              return { ...prev }
            })
          }}
          initState={false}
        />
        <span>Avatar Size:</span>
        <ButtonGroup>
          <Button
            type="primary"
            onClick={() => {
              setAvatar((prev) => {
                prev.size = 'small'
                return { ...prev }
              })
            }}
          >
            Small
          </Button>
          <Button
            type="primary"
            onClick={() => {
              setAvatar((prev) => {
                prev.size = 'default'
                return { ...prev }
              })
            }}
          >
            Default
          </Button>
          <Button
            type="primary"
            onClick={() => {
              setAvatar((prev) => {
                prev.size = 'large'
                return { ...prev }
              })
            }}
          >
            Large
          </Button>
        </ButtonGroup>
        <span>Avatar Shape:</span>
        <ButtonGroup>
          <Button
            type="primary"
            onClick={() => {
              setAvatar((prev) => {
                prev.shape = 'circle'
                return { ...prev }
              })
            }}
          >
            Circle
          </Button>
          <Button
            type="primary"
            onClick={() => {
              setAvatar((prev) => {
                prev.shape = 'square'
                return { ...prev }
              })
            }}
          >
            Square
          </Button>
        </ButtonGroup>
      </div>

      <SkeletonAvatar
        acitve={avatar.acitve}
        size={avatar.size}
        shape={avatar.shape}
      />
      {/* input */}
      <div className="SkeletonDemo">
        <span>Input Acitve:</span>
        <Switch
          onChange={() => {
            setInput((prev) => {
              prev.acitve = !prev.acitve
              return { ...prev }
            })
          }}
          initState={false}
        />
        <span>Input Size:</span>
        <ButtonGroup>
          <Button
            type="primary"
            onClick={() => {
              setInput((prev) => {
                prev.size = 'small'
                return { ...prev }
              })
            }}
          >
            Small
          </Button>
          <Button
            type="primary"
            onClick={() => {
              setInput((prev) => {
                prev.size = 'default'
                return { ...prev }
              })
            }}
          >
            Default
          </Button>
          <Button
            type="primary"
            onClick={() => {
              setInput((prev) => {
                prev.size = 'large'
                return { ...prev }
              })
            }}
          >
            Large
          </Button>
        </ButtonGroup>
      </div>
      <SkeletonInput acitve={input.acitve} size={input.size} />
    </>
  )
}
const SkeletonDemoCode = () => {
  return Marked({
    text: `import {
      Skeleton,
      SkeletonAvatar,
      SkeletonInput,
      ButtonGroup,
      Button,
      Switch,
    } from 'src/UI'

    const SkeletonDemo = () => {
      // avatar state
      const [avatar, setAvatar] = useState<{
        acitve: boolean
        size: 'default' | 'small' | 'large'
        shape: 'circle' | 'square'
      }>({
        acitve: false,
        size: 'default',
        shape: 'circle',
      })
      // input state
      const [input, setInput] = useState<{
        acitve: boolean
        size: 'default' | 'small' | 'large'
      }>({
        acitve: false,
        size: 'default',
      })
    
      return (
        <>
          {/* avatar */}
          <div className="SkeletonDemo">
            <span>Avatar Acitve:</span>
            <Switch
              onChange={() => {
                setAvatar((prev) => {
                  prev.acitve = !prev.acitve
                  return { ...prev }
                })
              }}
              initState={false}
            />
            <span>Avatar Size:</span>
            <ButtonGroup>
              <Button
                type="primary"
                onClick={() => {
                  setAvatar((prev) => {
                    prev.size = 'small'
                    return { ...prev }
                  })
                }}
              >
                Small
              </Button>
              <Button
                type="primary"
                onClick={() => {
                  setAvatar((prev) => {
                    prev.size = 'default'
                    return { ...prev }
                  })
                }}
              >
                Default
              </Button>
              <Button
                type="primary"
                onClick={() => {
                  setAvatar((prev) => {
                    prev.size = 'large'
                    return { ...prev }
                  })
                }}
              >
                Large
              </Button>
            </ButtonGroup>
            <span>Avatar Shape:</span>
            <ButtonGroup>
              <Button
                type="primary"
                onClick={() => {
                  setAvatar((prev) => {
                    prev.shape = 'circle'
                    return { ...prev }
                  })
                }}
              >
                Circle
              </Button>
              <Button
                type="primary"
                onClick={() => {
                  setAvatar((prev) => {
                    prev.shape = 'square'
                    return { ...prev }
                  })
                }}
              >
                Square
              </Button>
            </ButtonGroup>
          </div>
    
          <SkeletonAvatar
            acitve={avatar.acitve}
            size={avatar.size}
            shape={avatar.shape}
          />
          {/* input */}
          <div className="SkeletonDemo">
            <span>Input Acitve:</span>
            <Switch
              onChange={() => {
                setInput((prev) => {
                  prev.acitve = !prev.acitve
                  return { ...prev }
                })
              }}
              initState={false}
            />
            <span>Input Size:</span>
            <ButtonGroup>
              <Button
                type="primary"
                onClick={() => {
                  setInput((prev) => {
                    prev.size = 'small'
                    return { ...prev }
                  })
                }}
              >
                Small
              </Button>
              <Button
                type="primary"
                onClick={() => {
                  setInput((prev) => {
                    prev.size = 'default'
                    return { ...prev }
                  })
                }}
              >
                Default
              </Button>
              <Button
                type="primary"
                onClick={() => {
                  setInput((prev) => {
                    prev.size = 'large'
                    return { ...prev }
                  })
                }}
              >
                Large
              </Button>
            </ButtonGroup>
          </div>
          <SkeletonInput acitve={input.acitve} size={input.size} />
        </>
      )
    }`,
  })
}
/* 控制显示与隐藏 */
const SkeletonShowDemo = () => {
  const [loading, setLoading] = useState(true)
  return (
    <>
      <Switch type="colorful" onChange={() => setLoading(!loading)} />
      <Skeleton loading={loading} />
    </>
  )
}

/* skeleton API */
const SkeleteonApi = () => {
  const thead = ['属性', '说明', '类型', '默认值']
  const tbody = [
    ['avatar', '是否显示头像', 'boolean', 'false'],
    ['rows', 'skeleton-content 的占位行数', 'number', '2'],
    ['title', '是否显示title', 'boolean', 'true'],
    ['loading', '是否显示skeleton', 'boolean', 'true'],
    ['active', '是否加载动画', 'boolean', 'false'],
    ['footer', '是否显示footer', 'boolean', 'true'],
  ]
  return <Table thead={thead} tbody={tbody}></Table>
}
/* skeletonAavatar API */
const SkeletonAavatarApi = () => {
  const thead = ['属性', '说明', '类型', '默认值']
  const tbody = [
    [
      'size',
      '头像占位符的大小,可选值: default | small | large',
      'string',
      'default',
    ],
    ['shape', '头像占位符的形状,可选值: square | circle ', 'string', 'circle'],
    ['loading', '是否显示skeleton', 'boolean', 'true'],
    ['active', '是否加载动画', 'boolean', 'false'],
  ]
  return <Table thead={thead} tbody={tbody}></Table>
}

/* skeletonInput API */
const SkeletonInputApi = () => {
  const thead = ['属性', '说明', '类型', '默认值']
  const tbody = [
    [
      'size',
      'input 占位符的大小,可选值: default | small | large',
      'string',
      'default',
    ],
    ['loading', '是否显示skeleton', 'boolean', 'true'],
    ['active', '是否加载动画', 'boolean', 'false'],
  ]
  return <Table thead={thead} tbody={tbody}></Table>
}
