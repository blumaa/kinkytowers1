import React from 'react'
import Parallax from '../Parallax'

import { motion } from 'framer-motion';

const FlashingSquare = ({ offset, fill, flashDuration }) => {
  console.log(fill)
  return (
    <motion.div height="50" width="50" initial={{ opacity: .1 }} animate={{ opacity: 1 }} transition={{ duration: flashDuration, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }} style={{ overflowY: "visible"}}>
      <Parallax offset={offset}>
        <svg height="50" width="50" >
  <rect x="10" y="10" rx="3" ry="3" width="10" height="10" stroke={`#${fill}`} fill="transparent" strokeWidth="10"/>
        </svg>
      </Parallax>
    </motion.div>
  )
}


export default FlashingSquare 
