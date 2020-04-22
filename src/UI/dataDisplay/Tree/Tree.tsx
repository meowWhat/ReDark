import React, { useState, ReactNode, createContext, useContext } from 'react'

import './Tree.less'

const context = createContext(false)
const { Provider } = context

interface TreeNode {
  title: string | ReactNode
  children?: Array<TreeNode>
}

const TreeNode = (props: { data: TreeNode }) => {
  const { title, children } = props.data
  const [open, setOpen] = useState(useContext(context))
  const isFolder = Array.isArray(children)

  const toggle = () => {
    if (isFolder) {
      setOpen((pre) => !pre)
    }
  }

  return (
    <ul className="rd-tree">
      <li>
        <div onClick={toggle} className="rd-tree-content">
          <span className="rd-tree-icon">
            {isFolder ? (
              <span>
                {open ? (
                  <span className="iconfont icon-cl-icon-down"></span>
                ) : (
                  <span className="iconfont icon-cl-icon-right" />
                )}
              </span>
            ) : null}
          </span>
          <span className="rd-tree-tittle"> {title}</span>
        </div>
      </li>
      {isFolder ? (
        <ul className={open ? 'rd-tree rd-tree-open' : 'rd-tree rd-tree-close'}>
          {children &&
            children.map((el, index) => {
              return <TreeNode data={el} key={index} />
            })}
        </ul>
      ) : null}
    </ul>
  )
}

interface Tree {
  data?: Array<TreeNode>
  initState?: boolean
  [key: string]: any
}

export default (props: Tree) => {
  const { data, initState = false, ...res } = props

  return (
    <Provider value={initState}>
      <div {...res}>
        {data?.map((el, index) => {
          return <TreeNode data={el} key={index} />
        })}
      </div>
    </Provider>
  )
}
