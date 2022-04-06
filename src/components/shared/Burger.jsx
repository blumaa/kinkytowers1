import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const Burger = ({ isDrawerOpen, setIsDrawerOpen}) => {

  const topLine = {
    visible: { rotate: 45},
    hidden: { rotate: 0},
  }
  const centerLine = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

  const bottomLine = {
    visible: { rotate: -45},
    hidden: { rotate: 0},
  }

    return(
    <div className="Burger" onClick={()=> setIsDrawerOpen(!isDrawerOpen)}>
      <motion.svg 
        initial={{ opacity: .2 }}
        whileHover={{ scale: 1.2, opacity: 1}}
        style={{ transformBox: 'fill-box', originX: "50%", originY: "50%" }}
        id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"
        className="Burger__svg"
      >
          <motion.path 
            animate={{
                scale: isDrawerOpen ? 0.8 : 1,
                opacity: isDrawerOpen ? 0  : 1 
            }}
            className="centerLine" 
            d="M900,400H100a100,100,0,0,0,0,200H900a100,100,0,0,0,0-200Z" fill="#fff"/>
        <motion.path
          animate={{
            // y: isDrawerOpen ? "-15%" : '0%',
            translateX: isDrawerOpen ? 50 : 0,
            translateY: isDrawerOpen ? -50 : 0,
            rotate: isDrawerOpen ? -45 : 0
          }}
          style={{ originX: 0, transformBox: "content-box" }}
          className="bottomLine"
          d="M900,800H100a100,100,0,0,0,0,200H900a100,100,0,0,0,0-200Z"
          fill="#fff"
        />
        <motion.path
          animate={{
            // y: isDrawerOpen ? "15%" : '0%',
            translateX: isDrawerOpen ? 50 : 0,
            translateY: isDrawerOpen ? 50 : 0,
            rotate: isDrawerOpen ? 45 : 0
          }}
          style={{ originX: 0, transformBox: "fill-box" }}
          className="topLine"
          d="M900,0H100a100,100,0,0,0,0,200H900A100,100,0,0,0,900,0Z"
          fill="#fff"
        />          
      </motion.svg>
    </div>
    )
  }

export default Burger
