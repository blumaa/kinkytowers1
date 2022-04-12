import React from 'react'
import { motion } from 'framer-motion'

const Section = React.forwardRef(({ children, style, variants, animate, transition }, ref) => {
  // console.log('transition', transition)
  return (
    <section style={{ ...style }}
    >
      <motion.div
        ref={ref}
        variants={variants}
        initial="initial"
        animate={animate}
        transition={{...transition}}
      >
        {children}
      </motion.div>
    </section>
  )
})

export default Section
