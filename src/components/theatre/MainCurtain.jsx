import React from 'react'
import Curtain from '../../images/closed-curtains.gif'
import { motion } from 'framer-motion'

const MainCurtain = () => {
  const [isCurtainOpen, setIsCurtainOpen] = React.useState(true)
  return (
      <motion.img
        animate={{
          y: isCurtainOpen ? -700 : 0,
        }}
        transition={{ ease: 'easeOut', duration: 5 }}
        onClick={() => setIsCurtainOpen(!isCurtainOpen)}
        className='Theatre__main-curtain'
        src={Curtain}
        alt='curtain'
      />
  )
}

export default MainCurtain
