import React, { useRef, useEffect, useMemo } from 'react'
import marked from 'marked'
import '../../../node_modules/highlight.js/styles/atom-one-dark-reasonable.css'
import hljs from 'highlight.js'
import './index.less'
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  pedantic: false,
  sanitize: false,
  breaks: true,
  smartLists: true,
  smartypants: true,
  highlight: function (code) {
    return hljs.highlightAuto(code).value
  },
})

export default function (props: { text: string }) {
  let el = useRef<any>()

  const getMarked = useMemo(() => { 
    let text = `\`\`\`javascript
    ${props.text}
\`\`\``
    return marked(text)
  }, [props.text])

  useEffect(() => {
    if (el.current) {
      el.current.innerHTML = getMarked
    }
  }, [getMarked, el])

  const copy = () => {
    const input = document.createElement('input')
    document.body.appendChild(input)
    input.setAttribute('value', props.text)
    input.select()
    if (document.execCommand('copy')) {
      document.execCommand('copy')
    }
    document.body.removeChild(input)
  }
  return (
    <>
      <div ref={el}></div>
      <span className="iconfont icon-plus-copy copy" onClick={copy}>
        &nbsp;复制
      </span>
    </>
  )
}
