/* commonDocs 通用组件文档 */

import React from 'react'

const SwitchDocs = React.lazy(() => import('./SwitchDocs'))
const BackTopDocs = React.lazy(() => import('./BackTopDocs'))
const ButtonDocs = React.lazy(() => import('./ButtonDocs'))
const TagDocs = React.lazy(() => import('./TagDocs'))

export { SwitchDocs, BackTopDocs, ButtonDocs, TagDocs }
