import React from 'react'
import { motion } from 'framer-motion'

const defaultSectionStyle = {
  height: "101vh",
  width: "95vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  // border: "5px solid red",
  // padding: "2rem",
  // borderRadius: "2rem",
  // boxShadow:  "10px 10px 5px 0px #8a0000",
  // backgroundColor: "#140b34",
  // color: "lightgray",
  // border: "1px solid red",
  // backgroundColor: "#2d1176",
  // overflow: "auto",
  // color: "#fff"
};

const Section = React.forwardRef(({ children, style, variants, animate, transition }, ref) => {
  // console.log('transition', transition)
  return (
    <section style={ style ? {...style} : {...defaultSectionStyle}}
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
