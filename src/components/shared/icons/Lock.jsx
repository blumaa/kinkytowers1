import React from 'react'
import { motion } from 'framer-motion'

const Lock = ({ locked, setLocked }) => {
  const topLine = {
    visible: { rotate: 45 },
    hidden: { rotate: 0 },
  }
  const centerLine = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
  return (
    <svg className="Lock" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 41.6" onClick={() => setLocked(!locked)}>
      <g id="Layer_1-2" data-name="Layer 1">
        <motion.g id="handle"
          animate={{
            rotate: locked ? 0 : -45,
            originX: 0,
            originY: 1,
          }}
        >
          <g opacity="0.2">
            <path d="M45.5,33.2h-5V25.9a8.5,8.5,0,0,0-17,0v7.3h-5V25.9a13.5,13.5,0,0,1,27,0Z" transform="translate(-14 -10.4)"
              fill="#231f20"
            />

          </g>
          <path d="M45.5,31.2h-5V23.9a8.5,8.5,0,0,0-17,0v7.3h-5V23.9a13.5,13.5,0,0,1,27,0Z" transform="translate(-14 -10.4)" fill="#4f5d73" />
        </motion.g>
        <path d="M32,32a4,4,0,0,0-4,4,3.76,3.76,0,0,0,2,3.4V42a2,2,0,0,0,4,0V39.4A4,4,0,0,0,32,32Z" transform="translate(-14 -10.4)" fill="#4f5d73" />
        <g opacity="0.2">
          <path d="M47,27H17a3,3,0,0,0-3,3V49a3,3,0,0,0,3,3H47a3,3,0,0,0,3-3V30A3,3,0,0,0,47,27ZM34,41.4V44a2,2,0,0,1-4,0V41.4A4,4,0,1,1,36,38,3.76,3.76,0,0,1,34,41.4Z" transform="translate(-14 -10.4)" fill="#231f20" />
        </g>
        <motion.path d="M47,25H17a3,3,0,0,0-3,3V47a3,3,0,0,0,3,3H47a3,3,0,0,0,3-3V28A3,3,0,0,0,47,25ZM34,39.4V42a2,2,0,0,1-4,0V39.4A4,4,0,1,1,36,36,3.76,3.76,0,0,1,34,39.4Z" transform="translate(-14 -10.4)"
          fill="#fff"
          animate={{
            fill: locked ? "red" : 'green'
          }}
        />
      </g>
    </svg >

  )
}

export default Lock
