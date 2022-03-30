import React from 'react'
import { motion } from 'framer-motion'
import KinkyTowers1 from './KinkyTowers1'
import LittleBeast from '../../assets/stylesheets/animations/LittleBeast'
import LittleTitmouse from '../../assets/stylesheets/animations/LittleTitmouse'

const BubblingTowerAndMoon = () => {
  return (
    <motion.div
      className='TowerScene'
      key='tower-scene'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, delay: 2 }}
      transition={{
        delay: 1,
        x: { type: 'spring', stiffness: 100 },
        default: { duration: 2 },
      }}
    >
      <div className='TowerScene__one'>
        <LittleBeast />
      </div>
      <div className='TowerScene__two'>
        <LittleTitmouse />
      </div>
      <div className='TowerScene__three'>
        <KinkyTowers1 />
      </div>
      {/* <div class="TowerScene__four">Four</div> */}
      {/* <div class="TowerScene__five">Five</div> */}
      {/* <div class="TowerScene__six">Six</div> */}
      {/* <TitmouseBeastKiss /> */}
    </motion.div>
  )
}

export default BubblingTowerAndMoon
