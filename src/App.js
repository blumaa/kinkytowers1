import React, { lazy, Suspense } from 'react'
import BeaverMoonLoader from './components/shared/spinners/BeaverMoonLoader'

const LazyLoadedRoot = lazy(() =>
  import('./components/KinkyTowersRoot')
)

const LazyLoader = lazy(() =>
  import('./components/shared/spinners/BeaverMoonLoader')
)

const App = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <LazyLoadedRoot />
    </Suspense>
  )
}

export default App

