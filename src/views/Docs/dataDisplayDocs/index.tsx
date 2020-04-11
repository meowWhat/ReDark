/* dataDisplay 数据展示 组件文档 */

import React from 'react'
const BadgeDocs = React.lazy(() => import('./BadgeDocs'))
const TreeDocs = React.lazy(() => import('./TreeDocs'))
const StatisticDocs = React.lazy(() => import('./StatisticDocs'))
const TabsDocs = React.lazy(() => import('./TabsDocs'))

export { BadgeDocs, TreeDocs, StatisticDocs, TabsDocs }
