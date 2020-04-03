/* feedback 反馈组件文档 */

import React from 'react'

const SpinDocs = React.lazy(() => import('./SpinDocs'))
const AlertDocs = React.lazy(() => import('./AlertDocs'))
const MessageDocs = React.lazy(() => import('./MessageDocs'))

export { SpinDocs, AlertDocs, MessageDocs }