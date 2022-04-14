import React from 'react'
import Parallax from '../Parallax'

import { motion } from 'framer-motion';

const FlashingCircle = ({ offset, fill, flashDuration }) => {
  return (
    <motion.div height="50" width="50" initial={{ opacity: .1 }} animate={{ opacity: 1 }} transition={{ duration: flashDuration, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }} style={{ overflowY: "visible"}}>
      <Parallax offset={offset}>
        <svg height="10" width="10" >
          <circle cx="5" cy="5" r="3.5" stroke="gold" strokeWidth="1" fill={`#${fill}`} />
        </svg>
      </Parallax>
    </motion.div>
  )
}


export default FlashingCircle 
