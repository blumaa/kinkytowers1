import React from 'react'
import Parallax from '../scroll/Parallax'
import Star from './Star'

import { motion } from 'framer-motion';

const defaultStyle = {
  overflowY: "visible",
  // border: "1px solid yellow"
}

const FlashingStar = ({ offset, fill, flashDuration }) => {
  return (
    <motion.div height="50" width="50" initial={{ opacity: .1 }} animate={{ opacity: 1 }} transition={{ duration: flashDuration, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }} style={{ ...defaultStyle }}>
      <Parallax offset={offset}>
        <Star fill={fill} />
      </Parallax>
    </motion.div>
  )
}


export default FlashingStar 
  //       <svg height="250" width="250" >
  // <polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
  //     stroke={`#${fill}`} fill="transparent" stroke-width="5"/>
  //       </svg>
