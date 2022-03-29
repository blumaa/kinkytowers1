import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../assets/stylesheets/_default.scss'
import KinkyTowers1 from '../routes/KinkyTowers1'
import KinkyTower1 from '../routes/KinkyTower1'
import KinkyTower2 from '../routes/KinkyTower2'
// import KinkyTowers1 from './routes/KinkyTowers1'
import TitmouseFlight from '../routes/TitmouseFlight'
import Theatre from  '../components/theatre/index.js'
import PageLayout from './PageLayout'

function KinkyTowersRoot() {
  return (
    <Router>
      <PageLayout>
        <Theatre>
          {/* choose a show */}
          <Routes>
            <Route path='/' element={<div>top</div>} />
            <Route path='kinkytower-1' element={<KinkyTower1 />} />
            <Route path='titmouse-flight' element={<TitmouseFlight />} />
            <Route path='kinkytower-2' element={<KinkyTower2 />} />
            <Route path='kinkytowers-1' element={<KinkyTowers1 />} />
            <Route
              path='*'
              element={
                <main style={{ padding: '1rem' }}>
                  <p>The Tower has fallen!</p>
                </main>
              }
            />
          </Routes>
        </Theatre>
      </PageLayout>
    </Router>
  )
}

export default KinkyTowersRoot 

