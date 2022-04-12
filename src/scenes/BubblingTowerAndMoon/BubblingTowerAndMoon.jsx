import React from 'react'
import { useAnimation, motion } from 'framer-motion'
import KinkyTowers1 from './KinkyTowers1'
import LittleBeast from '../../assets/stylesheets/animations/LittleBeast'
import LittleTitmouse from '../../assets/stylesheets/animations/LittleTitmouse'
import BellSound from '../../assets/sounds/bell-sound.mp3'
import Bell from '../../assets/stylesheets/animations/Bell'

const durationNum = 2 
const bellVariants = {
  visible: { opacity: 1, scale: [1.1, 0.9, 1.2, 0.8, 1.1, 0.9, 1], rotate: [20, -20, 0, 15, -15, 0, 10, -10, 0, 5, -5, 0, 2, -2, 0 ], transition: { duration: durationNum, ease: "easeOut" } },
  initial: { opacity: 1, scale: 1, transition: { duration: durationNum } },
};
const BubblingTowerAndMoon = () => {
  const towerRef = React.useRef()
  const [reset, setReset] = React.useState(false)
  const [ bellRing, setBellRing] = React.useState(false)
  const bellControls = useAnimation();

  let audio = new Audio(BellSound)

  const start = () => {
    audio.play()
  }

  React.useEffect(() => {
    console.log('reset', reset)
  reset && setTimeout(() => {
      setReset(false)
    }, 5000);
  }, [reset])

  React.useEffect(() => {
    bellRing && bellControls.start("visible") && setBellRing(false)
  }, [bellControls, bellRing]);

  return (
    <div
      ref={towerRef}
      className='TowerScene'
      key='tower-scene'
    // initial={{ opacity: 0 }}
    // animate={{ opacity: 1 }}
    // exit={{ opacity: 0 }}
    // transition={{
    //   delay: 0,
    //   ease: 'easeOut',
    //   duration: 2,
    // }}
    >
      <motion.div
        onClick={() => {
          !reset && setReset(true)
          start()
          setBellRing(true)
        }}
        className="TowerScene__reset-wrapper"
        whileHover={{ scale: 1.2 }}
          initial="initial"
          variants={bellVariants}
          animate={bellControls}
        // whileTap={{ scale: [0.9, 1.1, 0.8, 1.2, 1] }}
      >
          <Bell className="TowerScene__bell" />
      </motion.div>
      <div className='TowerScene__beast'>
        <LittleBeast towerRef={towerRef} reset={reset} isDraggable={"x"} />
      </div>
      <div className='TowerScene__tit'>
        <LittleTitmouse towerRef={towerRef} reset={reset} isDraggable={"y"} />
      </div>
      <div className='TowerScene__three'>
        <KinkyTowers1 reset={reset} />
      </div>
    </div>
  )
}

export default BubblingTowerAndMoon
