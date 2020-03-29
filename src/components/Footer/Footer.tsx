/**
 * @Footer 网站的权限协议
 */
import React from 'react'
import './Footer.less'

/**
 * @text 协议的内容
 */
export default function Footer(props: { text: string }) {
  return <footer className="rd-footer">{props.text}</footer>
}
