import React, { lazy } from 'react'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'

const TVBackground = ({ power }) => {
  const backgroundControls = useAnimation()
  const backgroundVariants = {
    visible: {
      fill: '#261B00',
    },
    initial: {
      fill: '#000',
    },
  }

  React.useEffect(() => {
    power && backgroundControls.start('visible')
    !power && backgroundControls.start('initial')
  }, [power])

  return (
    <svg
      id='Layer_1'
      data-name='Layer 1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 512 489.2'
    >
      <motion.rect
        y='96.67'
        width='512'
        height='392.53'
        rx='62.92'
        variants={backgroundVariants}
        animate={backgroundControls}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 2,
          mass: 1,
        }}
      />
    </svg>
  )
}

export default TVBackground 
