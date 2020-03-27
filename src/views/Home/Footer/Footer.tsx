import React from 'react'
import './Footer.less'

export default function Footer(props: { text: string }) {
  return <footer className="footer">{props.text}</footer>
}
