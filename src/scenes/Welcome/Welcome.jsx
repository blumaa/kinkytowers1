import React from 'react'
import { motion } from 'framer-motion'

const Welcome = () => {
  return(
    <motion.div
      className='Welcome'
      key='welcome'
      initial={{ opacity: 0, x: -1000 }}
      animate={{ opacity: 1, x: 0 }}
      trainsition={{ duration: 3 }}
      exit={{ opacity: 0, x: 1000 }}
    >
      Welcome to Kinky Towers
    </motion.div>
  )
}

export default Welcome
