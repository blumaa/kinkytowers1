import React, { lazy } from 'react'
import {
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import '../assets/stylesheets/_default.scss'
import { BubblingTowerAndMoon } from '../scenes/BubblingTowerAndMoon/index'
import KinkyTower1 from '../extras/KinkyTower1'
import KinkyTower2 from '../extras/KinkyTower2'
import { Welcome } from '../scenes/Welcome/index'
import { EvilBeast } from '../scenes/EvilBeast/index'
import { TitmouseFlight } from '../scenes/FlyingTitmouseScene/index'
import { HotCupOfTitTea } from '../scenes/HotCupOfTitTea/index'
// import KinkyTowers1 from './routes/KinkyTowers1'
// import TitmouseFlight from '../routes/TitmouseFlight'
import Theatre from '../components/theatre/index.js'
import PageLayout from './PageLayout'
import Television from './television/Television'
import TelevisionLayout from './television/TelevisionLayout'

const LazyMonsters = lazy(() => 
    import('../components/shared/MonsterSVGs')
)

const Transition = ({ children }) => {
  return (
    <motion.div
      className='Transition'
      key='transition'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        delay: 0,
        ease: 'easeOut',
        duration: 2,
      }}
    >
      {children}
    </motion.div>
  )
}

function KinkyTowersRoot() {
  const location = useLocation()
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    // Loading function to load data or
    // fake it using setTimeout;
    const loadData = async () => {
      // Wait for two second
      // await new Promise((r) => setTimeout(r, 2000));

      // Toggle loading state
      setIsLoading(() => true)

      await new Promise((r) => setTimeout(r, 2000))

      setIsLoading(() => false)
    }

    loadData()
  }, [location])

  return (
    <PageLayout setIsLoading={setIsLoading}>
      {/* <Theatre isLoading={isLoading} setIsLoading={setIsLoading}> */}
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            {/* choose a show */}
            <Route
              path='/'
              element={
                <Transition>
                  <Welcome />
                </Transition>
              }
            />
            <Route
              path='kinkytower-1'
              element={
                <Transition>
                  <KinkyTower1 />
                </Transition>
              }
            />
            <Route
              path='titmouse-flight'
              element={
                <Transition>
                  <TitmouseFlight />
                </Transition>
              }
            />
            <Route
              path='kinkytower-2'
              element={
                <Transition>
                  <KinkyTower2 />
                </Transition>
              }
            />
            <Route
              path='kinkytowers-1'
              element={
                <Transition>
                  <BubblingTowerAndMoon />
                </Transition>
              }
            />
            <Route
              path='evil-beast'
              element={
                <Transition>
                  <EvilBeast />
                </Transition>
              }
            />
            <Route
              path='monsters'
              element={
                <Transition>
                  <LazyMonsters />
                </Transition>
              }
            />
            <Route
              path='hot-cup-of-tit-tea'
              element={
                <Transition>
                  <HotCupOfTitTea />
                </Transition>
              }
            />
            <Route
              path='television'
              element={
                <Transition>
                  <TelevisionLayout />
                </Transition>
              }
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
      {/* </Theatre> */}
    </PageLayout>
  )
}

export default KinkyTowersRoot
