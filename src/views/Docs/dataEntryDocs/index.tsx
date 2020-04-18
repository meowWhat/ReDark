import React from 'react'

const RateDocs = React.lazy(() => import('./RateDocs'))
const InputDocs = React.lazy(() => import('./InputDocs'))
const SelectDocs = React.lazy(() => import('./SelectDocs'))
const CascaderDocs = React.lazy(() => import('./CascaderDocs'))
const AutoCompleteDocs = React.lazy(() => import('./AutoCompleteDocs'))
const UploadDocs = React.lazy(() => import('./UploadDocs'))
const FormRuleDocs = React.lazy(() => import('./FormRuleDocs'))

export {
  RateDocs,
  InputDocs,
  SelectDocs,
  CascaderDocs,
  AutoCompleteDocs,
  UploadDocs,
  FormRuleDocs,
}
