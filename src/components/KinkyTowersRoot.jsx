import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import '../assets/stylesheets/_default.scss'
import BubblingTowerAndMoon from '../scenes/BubblingTowerAndMoon/index'
import KinkyTower1 from '../routes/KinkyTower1'
import KinkyTower2 from '../routes/KinkyTower2'
import { Welcome } from '../scenes/Welcome/index'
// import KinkyTowers1 from './routes/KinkyTowers1'
import TitmouseFlight from '../routes/TitmouseFlight'
import Theatre from '../components/theatre/index.js'
import PageLayout from './PageLayout'

function KinkyTowersRoot() {
  const location = useLocation()
  const [isLoading, setIsLoading] = React.useState(true)

  // const handleLoading = () => {
  //   setIsLoading(false)
  // }
  //
  // React.useEffect(() => {
  //   window.addEventListener('load', handleLoading)
  //   window.addEventListener('load', (event) => {
  //     console.log('page is fully loaded')
  //   })
  //
  //   return () => window.removeEventListener('load', handleLoading)
  // }, [])

  React.useEffect(() => {
      // Loading function to load data or
      // fake it using setTimeout;
      const loadData = async () => {

        // Wait for two second
        // await new Promise((r) => setTimeout(r, 2000));

        // Toggle loading state
        setIsLoading((isLoading) => true);

        await new Promise((r) => setTimeout(r, 2000));

        setIsLoading((isLoading) => false);
      };

      loadData();
    }, [location])

  return (
    <PageLayout setIsLoading={setIsLoading}>
      <Theatre isLoading={isLoading} setIsLoading={setIsLoading}>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            {/* choose a show */}
            <Route path='/' element={<Welcome />} />
            <Route path='kinkytower-1' element={<KinkyTower1 />} />
            <Route path='titmouse-flight' element={<TitmouseFlight />} />
            <Route
              path='kinkytower-2'
              element={<KinkyTower2 />}
            />
            <Route
              path='kinkytowers-1'
              element={<BubblingTowerAndMoon />}
            />
            <Route
              path='*'
              element={
                <main style={{ padding: '1rem' }}>
                  <p>The Tower has fallen!</p>
                </main>
              }
            />
          </Routes>
        </AnimatePresence>
      </Theatre>
    </PageLayout>
  )
}

export default KinkyTowersRoot
