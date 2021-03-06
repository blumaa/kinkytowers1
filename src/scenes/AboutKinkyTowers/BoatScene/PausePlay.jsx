import React from "react"
import { motion, AnimatePresence, useAnimation } from 'framer-motion'

const strokeStyle = {
  cursor: "pointer",
  fill: "white",
  // stroke: "white",
  strokeWidth: "15px",
}

const buttonVariants = {
  initial: {
    opacity: 0,
    transition: {
      duration: 1
    }
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 3
    }
  }
}

const unSeenVariants = {
  initial: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1
    }
  },
  visible: {
    opacity: 1,
    x: 10,
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: .3
    }
  },
}

const PausePlay = ({ isPlaying, setIsPlaying }) => {
  const unSeenControls = useAnimation()
  const [handleGrab, setHandleGrab] = React.useState(false)
  const [hasSeenHandle, setHasSeenHandle] = React.useState(false)

  React.useEffect(() => {
    !hasSeenHandle && unSeenControls.start('visible')
    hasSeenHandle && unSeenControls.start('initial')
    // unSeenControls.start('initial')
  }, [hasSeenHandle, unSeenControls]);

  return (
      <motion.svg
        id="Layer_1"
        data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 949.05 607.04"
        variants={unSeenVariants}
        animate={unSeenControls}
        drag={handleGrab ? "x" : false}
        // drag="x"
        dragConstraints={{ left: 0, right: 200 }}
      // dragSnapToOrigin
        className="PausePlay"
      >
        <g
          onClick={() => setIsPlaying(!isPlaying)}
        >
          <g id="background">
            <rect x="12.5" y="12.5" width="582.04" height="582.04" rx="83.71" />
            <path d="M449.81-36A71.28,71.28,0,0,1,521,35.19V449.81A71.28,71.28,0,0,1,449.81,521H35.19A71.28,71.28,0,0,1-36,449.81V35.19A71.28,71.28,0,0,1,35.19-36H449.81m0-25H35.19A96.2,96.2,0,0,0-61,35.19V449.81A96.2,96.2,0,0,0,35.19,546H449.81A96.2,96.2,0,0,0,546,449.81V35.19A96.2,96.2,0,0,0,449.81-61Z" transform="translate(61.02 61.02)" fill="#fcd4ff" />
          </g>
          <motion.g id="stop"
            initial="initial"
            animate={isPlaying ? "visible" : "initial"}
            style={{ cursor: "pointer" }}
            variants={buttonVariants}
            exit="exit"
          >
            <g id="background-2" data-name="background">
              <path d="M388.79,25A71.29,71.29,0,0,1,460,96.2V388.79A71.28,71.28,0,0,1,388.79,460H96.2A71.29,71.29,0,0,1,25,388.79V96.2A71.3,71.3,0,0,1,96.2,25H388.79m0-25H96.2A96.22,96.22,0,0,0,0,96.2V388.79A96.21,96.21,0,0,0,96.2,485H388.79A96.2,96.2,0,0,0,485,388.79V96.2A96.21,96.21,0,0,0,388.79,0Z" transform="translate(61.02 61.02)" fill="#7700d0" />
            </g>
            <rect x="201.02" y="201.02" width="205" height="205" fill="#eb00ff" />
          </motion.g>
          <motion.g id="start"
            initial="initial"
            animate={isPlaying ? "initial" : "visible"}
            style={{ cursor: "pointer" }}
            variants={buttonVariants}
            exit="exit"
          >
            <path d="M242.5,15h0m0,0h0m.09,0h0m-.18,0h0m.27,0A227.49,227.49,0,0,1,470,242.32C469.9,117,368,15.1,242.68,15m-.36,0C117,15.1,15.1,117,15,242.32A227.49,227.49,0,0,1,242.32,15M470,242.32v0m-455,0v0m455,.09v0m-455,0v0m455,.09v0m-455,0v0m455,.09v0m-455,0v0m455,.09A227.49,227.49,0,0,1,242.68,470C368,469.9,469.9,368,470,242.68m-455,0C15.1,368,117,469.9,242.32,470A227.49,227.49,0,0,1,15,242.68M242.68,470h0m-.36,0h0m.27,0h0M242.5,0A242.5,242.5,0,0,0,71,414,242.5,242.5,0,1,0,414,71,240.92,240.92,0,0,0,242.5,0Zm0,455C125.33,455,30,359.67,30,242.5S125.33,30,242.5,30,455,125.33,455,242.5,359.67,455,242.5,455Z" transform="translate(61.02 61.02)" fill="#7700d0" />
            <path d="M235.06,242l.91.53-.91.53V242m-54-93.55V336.58L343.94,242.5,181.06,148.42Z" transform="translate(61.02 61.02)" fill="#45ff4d" />
          </motion.g>
        </g>
        <motion.g
          id="handle"
          whileHover={() => setHandleGrab(true)}
          style={{ cursor: "pointer" }}
          onHoverEnd={() => setHandleGrab(false) && setHasSeenHandle(false)}
        >
          <g>
            <path d="M566.51,443.61c-10.27,0-18.63-7.37-18.63-16.44s8.36-16.45,18.63-16.45h.33l85.5-29.19.16-.09q5.79-3.24,11.15-6.2c53.67-29.72,78.17-43.29,86.72-132.56,3.77-39.32-3.23-68.15-22-90.71-16-19.15-40.83-34.12-80.65-48.55L566.86,74.27h-.35c-10.27,0-18.63-7.38-18.63-16.45s8.36-16.45,18.63-16.45H717C810.19,41.37,886,131.49,886,242.26c0,111-75.84,201.35-169.06,201.35H566.51Z" transform="translate(61.02 61.02)" fill="#3e254a" />
            <path d="M717,43.37C809.09,43.37,884,132.6,884,242.26,884,352.18,809.09,441.61,717,441.61H566.51c-9.17,0-16.63-6.48-16.63-14.44s7.46-14.45,16.63-14.45h.66l.63-.21,85-29,.35-.12.32-.18q5.78-3.23,11.14-6.19c54.31-30.07,79.09-43.8,87.74-134.12,8-83.43-33.86-115.93-104-141.33l-80.5-29-.66-.23h-.7c-9.17,0-16.63-6.48-16.63-14.45s7.46-14.45,16.63-14.45H717m0-4H566.51c-11.41,0-20.63,8.27-20.63,18.45s9.22,18.45,20.63,18.45l80.51,29C717,130.64,756.08,162.11,748.38,242.49c-9,94.09-34.91,102.51-96.86,137.2l-85,29h0c-11.41,0-20.63,8.25-20.63,18.45s9.22,18.44,20.63,18.44H717c94.31,0,171.06-91,171.06-203.35C888,130.38,811.28,39.37,717,39.37Z" transform="translate(61.02 61.02)" fill="#fcd4ff" />
          </g>
          <g>
            <path d="M541.44,103.3c-12.86,0-23.71-20.82-23.71-45.47s10.85-45.48,23.71-45.48c4.71,0,8,8.66,8,16.44s-3.28,16.45-8,16.45c-4.33,0-7.72,5.53-7.72,12.58s3.32,12.59,7.72,12.59c4.71,0,8,8.67,8,16.45S546.15,103.3,541.44,103.3Z" transform="translate(61.02 61.02)" fill="#3e254a" />
            <path d="M541.44,14.35c2.38,0,6,5.76,6,14.44s-3.61,14.45-6,14.45c-5.54,0-9.72,6.27-9.72,14.58s4.18,14.59,9.72,14.59c2.38,0,6,5.76,6,14.45s-3.61,14.44-6,14.44c-5.25,0-10.59-4.31-14.66-11.83-4.55-8.4-7-19.64-7-31.64s2.5-23.25,7-31.65c4.07-7.52,9.41-11.83,14.66-11.83m0-4c-14.18,0-25.71,21.3-25.71,47.48s11.53,47.47,25.71,47.47c5.52,0,10-8.26,10-18.44s-4.46-18.45-10-18.45c-3.15,0-5.72-4.74-5.72-10.59s2.57-10.58,5.72-10.58c5.52,0,10-8.27,10-18.45s-4.47-18.44-10-18.44Z" transform="translate(61.02 61.02)" fill="#fcd4ff" />
          </g>
          <g>
            <path d="M541.44,472.65c-12.86,0-23.71-20.82-23.71-45.48s10.85-45.47,23.71-45.48c4.71,0,8,8.67,8,16.45s-3.28,16.44-8,16.44c-4.4,0-7.72,5.42-7.72,12.59s3.32,12.59,7.72,12.59c4.71,0,8,8.67,8,16.45S546.15,472.65,541.44,472.65Z" transform="translate(61.02 61.02)" fill="#3e254a" />
            <path d="M541.44,383.69c2.38,0,6,5.77,6,14.45s-3.61,14.44-6,14.44c-5.54,0-9.72,6.28-9.72,14.59s4.18,14.59,9.72,14.59c2.38,0,6,5.76,6,14.44s-3.61,14.45-6,14.45c-5.25,0-10.59-4.31-14.66-11.83-4.55-8.4-7-19.64-7-31.65s2.5-23.24,7-31.64c4.07-7.52,9.41-11.83,14.66-11.84m0-4c-14.18,0-25.71,21.31-25.71,47.48s11.53,47.48,25.71,47.48c5.52,0,10-8.26,10-18.45s-4.46-18.44-10-18.44c-3.15,0-5.72-4.74-5.72-10.59s2.57-10.59,5.72-10.59c5.52,0,10-8.26,10-18.44s-4.46-18.45-10-18.45Z" transform="translate(61.02 61.02)" fill="#fcd4ff" />
          </g>
        </motion.g>
      </motion.svg>
  )
}


export default PausePlay
