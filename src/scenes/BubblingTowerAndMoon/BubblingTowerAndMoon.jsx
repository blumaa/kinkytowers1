import React from 'react'
import { motion } from 'framer-motion'
import KinkyTowers1 from './KinkyTowers1'
import LittleBeast from '../../assets/stylesheets/animations/LittleBeast'
import LittleTitmouse from '../../assets/stylesheets/animations/LittleTitmouse'
import BellSound from '../../assets/sounds/bell-sound.mp3'

const BubblingTowerAndMoon = () => {
  const towerRef = React.useRef()
  const [reset, setReset] = React.useState(false)

  let audio = new Audio(BellSound)

  const start = () => {
    audio.play()
  }

  React.useEffect(() => {
    console.log('reset', reset)
    setTimeout(() => {
      setReset(false)
    }, 5000);
  }, [reset])

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
      <motion.div onClick={() => {

        !reset && setReset(true)
        start()
      }
      } className="TowerScene__reset"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        Make a call from the tower!
      {/* <button onClick={start}>Play</button> */}
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
      {/* <div class="TowerScene__four">Four</div> */}
      {/* <div class="TowerScene__five">Five</div> */}
      {/* <div class="TowerScene__six">Six</div> */}
      {/* <TitmouseBeastKiss /> */}
    </div>
  )
}

export default BubblingTowerAndMoon
