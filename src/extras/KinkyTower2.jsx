import React from 'react'
import { motion } from 'framer-motion'
import LittleBeast from '../assets/stylesheets/animations/LittleBeast.jsx'
import LittleTitmouse from '../assets/stylesheets/animations/LittleTitmouse.jsx'

const KinkyTower2 = () => {
  return (
    <motion.div
      className='KinkyTower2'
      key='kinky-tower-2'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>KinkyTower2</h1>
      {/* <div className="KinkyTower2__little-beast"> */}
      {/*     <LittleBeast /> */}
      {/* </div> */}
      <div className='KinkyTower2__little-titmouse'>
        <LittleTitmouse />
      </div>
    </motion.div>
  )
}

export default KinkyTower2
