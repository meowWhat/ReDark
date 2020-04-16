import React from 'react'

const RateDocs = React.lazy(() => import('./RateDocs'))
const InputDocs = React.lazy(() => import('./InputDocs'))
const SelectDocs = React.lazy(() => import('./SelectDocs'))
const CascaderDocs = React.lazy(() => import('./CascaderDocs'))
const AutoCompleteDocs = React.lazy(() => import('./AutoCompleteDocs'))

export { RateDocs, InputDocs, SelectDocs, CascaderDocs, AutoCompleteDocs }
