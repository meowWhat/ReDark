import { lazy } from 'react'

import Nav from './Nav/Nav'
import Home from './Home/Home'

const Docs = lazy(() => import('./Docs'))
const Guide = lazy(() => import('./Guide/Guide'))
const NotFound = lazy(() => import('./NotFound/NotFound'))

export { Nav, Home, Docs, NotFound, Guide }
