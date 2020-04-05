/* feedback 反馈组件文档 */

import React from 'react'

const SpinDocs = React.lazy(() => import('./SpinDocs'))
const AlertDocs = React.lazy(() => import('./AlertDocs'))
const MessageDocs = React.lazy(() => import('./MessageDocs'))
const ResultDocs = React.lazy(() => import('./ResultDocs'))
const ModalDocs = React.lazy(() => import('./ModalDocs'))
const SkeletonDocs = React.lazy(() => import('./SkeletonDocs'))

export { SpinDocs, AlertDocs, MessageDocs, ResultDocs, ModalDocs, SkeletonDocs }
