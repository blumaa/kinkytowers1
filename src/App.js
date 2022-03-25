import React, { lazy, Suspense } from 'react'

const LazyLoadedRoot = lazy(() => 
    import('./components/KinkyTowersRoot')
)

const App = () => {
  return (
    <Suspense fallback={"loading"}>
      <LazyLoadedRoot />
    </Suspense>
  )
}

export default App
