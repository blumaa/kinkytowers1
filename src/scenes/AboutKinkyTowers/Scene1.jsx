import React from 'react'
import BlobWave from './BlobWave'
import FlyingTit from '../../assets/animations/FlyingTit'
import { motion } from 'framer-motion'
import Parallax from '../../components/shared/scroll/Parallax'
import PausePlay from './BoatScene/PausePlayCopy'

const Scene1 = () => {
  const [isPlaying, setIsPlaying] = React.useState(false)

  return (
    <div className='Scene1'>
      <div className='Scene1__top'>
        <div className='Scene1__top-left'>
          <Parallax offset={300}>
            <div className='Scene1__top-left-text'>
              Welcome. <br />
              <br />
              So, you have finally arrived at Kinky Towers. This is the start of
              a grand idea, a creative and cosmic intersection of sorts. <br />
              <br />
              We are currently crafting the first chapters of The Beast Book: A
              cosomorgasmic odyssey full of surrealist smut, spicy revelations,
              starring a Magician and a High Priestess, a beast and a titmouse,
              two cosmic fools, really: <br />
              <br />
              Desmond Blume and Rosa Ray.
            </div>
          </Parallax>
        </div>
        <Parallax offset={300} horizontal>
          <motion.div
            className='Scene1__top-right'
            animate={{ y: 400, scale: [1.1, 0.9], originX: 0.5, originY: 0.5 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            <FlyingTit isPlaying={isPlaying} />
          </motion.div>
        </Parallax>
      </div>
      <div className='Scene1__bottom'>
        <BlobWave isPlaying={isPlaying} />
      </div>
      <PausePlay isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
    </div>
  )
}

export default Scene1
