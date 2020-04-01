/* 文档统一管理 */
import React from 'react'

/* 单一组件 */
const SwitchDocs = React.lazy(() => import('./SwitchDocs'))
const BackTopDocs = React.lazy(() => import('./BackTopDocs'))
const ButtonDocs = React.lazy(() => import('./ButtonDocs'))
const TagDocs = React.lazy(() => import('./TagDocs'))
const SpinDocs = React.lazy(() => import('./SpinDocs/index'))

/* ... */


export { SwitchDocs, BackTopDocs, ButtonDocs, TagDocs, SpinDocs }
