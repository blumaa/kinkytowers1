import React, { lazy } from 'react'
import { EvilBeast } from '../../scenes/EvilBeast/index'
import LittleBeast from '../../assets/stylesheets/animations/LittleBeast'
import LittleTitmouse from '../../assets/stylesheets/animations/LittleTitmouse'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import TVFrame from './parts/TVFrame'
import TVBackground from './parts/TVBackground'

const Television = () => {
  const [channel, setChannel] = React.useState(1)
  const [power, setPower] = React.useState(false)
  const changeChannel = () => {
    if (channel === 1) {
      return <LittleBeast />
    } else if (channel === 2) {
      return <LittleTitmouse />
    }
  }
  return (
    <div className='TelevisionLayout2'>
      <div className='TelevisionLayout2__outer'>
        <div className='TelevisionLayout2__top'>
          <TVFrame
            channel={channel}
            setChannel={setChannel}
            power={power}
            setPower={setPower}
          />
        </div>
        <AnimatePresence>
          {power && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                type: 'spring',
                stiffness: 50,
                damping: 0.8,
                mass: 1,
              }}
              // style={{ backgroundColor: "orange"}}
              className='TelevisionLayout2__below'
            >
              {changeChannel()}
            </motion.div>
          )}
          u{' '}
        </AnimatePresence>
        <div className='TelevisionLayout2__below-2'>
          <TVBackground power={power} />
        </div>
      </div>
    </div>
  )
}
export default Television
