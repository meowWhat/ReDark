/* 文档统一管理 */
import React from 'react'

const SwitchDocs = React.lazy(() => import('./SwitchDocs'))
const BackTopDocs = React.lazy(() => import('./BackTopDocs'))
const ButtonDocs = React.lazy(() => import('./ButtonDocs'))

export { SwitchDocs, BackTopDocs, ButtonDocs }
