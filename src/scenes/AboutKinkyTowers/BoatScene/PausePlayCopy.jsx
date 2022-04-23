import React from 'react'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'

const strokeStyle = {
  cursor: 'pointer',
  fill: 'white',
  // stroke: "white",
  strokeWidth: '15px',
}

const buttonVariants = {
  initial: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 3,
    },
  },
}

const unSeenVariants = {
  initial: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
  visible: {
    opacity: 1,
    x: 10,
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: 'reverse',
      repeatDelay: 0.3,
    },
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
  }, [hasSeenHandle, unSeenControls])

  return (
    <motion.svg
      id='Layer_1'
      data-name='Layer 1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 945.57 607'
      variants={unSeenVariants}
      animate={unSeenControls}
      // drag={handleGrab ? "x" : false}
      drag='x'
      dragConstraints={{ right: 0, left: -200 }}
      // dragSnapToOrigin
      className='PausePlay'
    >
      <g onClick={() => setIsPlaying(!isPlaying)}>
        <g id='background'>
          <path
            d='M35.2,533.5a83.8,83.8,0,0,1-83.7-83.7V35.2A83.8,83.8,0,0,1,35.2-48.5H449.8a83.8,83.8,0,0,1,83.7,83.7V449.8a83.8,83.8,0,0,1-83.7,83.7Z'
            transform='translate(399.57 61)'
          />
          <path
            d='M449.8-36A71.23,71.23,0,0,1,521,35.2V449.8A71.23,71.23,0,0,1,449.8,521H35.2A71.23,71.23,0,0,1-36,449.8V35.2A71.23,71.23,0,0,1,35.2-36H449.8m0-25H35.2A96.24,96.24,0,0,0-61,35.2V449.8A96.24,96.24,0,0,0,35.2,546H449.8A96.24,96.24,0,0,0,546,449.8V35.2A96.24,96.24,0,0,0,449.8-61Z'
            transform='translate(399.57 61)'
            fill='#fcd4ff'
          />
        </g>
        <motion.g
          id='rewind'
          initial='initial'
          animate={isPlaying ? 'visible' : 'initial'}
          style={{ cursor: 'pointer' }}
          variants={buttonVariants}
          exit='exit'
        >
          <path
            d='M242.51,27.75a214.82,214.82,0,0,1,83.57,412.64A214.82,214.82,0,0,1,158.92,44.61a213.41,213.41,0,0,1,83.59-16.86m0-31C106.78-3.25-3.25,106.78-3.25,242.5s110,245.75,245.75,245.75,245.75-110,245.75-245.75S378.22-3.25,242.51-3.25Z'
            transform='translate(399.57 61)'
            fill='#7700d0'
          />
          <path
            d='M353.18,244.64l.36.62h-.72l.36-.62m-117-144.55c-78.53,0-142.41,63.87-142.41,142.4S157.62,384.9,236.14,384.9C302,384.9,357.46,340,373.71,279.27h38.73L353.18,176.64,293.93,279.26h34a99,99,0,1,1-20.39-105.11l22.34-38.71a141.72,141.72,0,0,0-93.76-35.35Z'
            transform='translate(399.57 61)'
            fill='#eb00ff'
          />
        </motion.g>
        <motion.g
          id='start'
          initial='initial'
          animate={isPlaying ? 'initial' : 'visible'}
          style={{ cursor: 'pointer' }}
          variants={buttonVariants}
          exit='exit'
        >
          <path
            d='M242.5,15h0m0,0h0m.1,0h0m-.2,0h0m.3,0A227.39,227.39,0,0,1,470,242.3C469.9,117,368,15.1,242.7,15m-.4,0C117,15.1,15.1,117,15,242.3A227.39,227.39,0,0,1,242.3,15M470,242.3h0m-455,0h0m455,.1h0m-455,0h0m455,.1h0m-455,0h0m455,.1h0m-455,0h0m455,.1A227.39,227.39,0,0,1,242.7,470C368,469.9,469.9,368,470,242.7m-455,0C15.1,368,117,469.9,242.3,470A227.39,227.39,0,0,1,15,242.7M242.7,470h0m-.4,0h0m.3,0h0M242.5,0A242.54,242.54,0,0,0,71,414,242.54,242.54,0,0,0,414,71,240.91,240.91,0,0,0,242.5,0Zm0,455C125.3,455,30,359.7,30,242.5S125.3,30,242.5,30,455,125.3,455,242.5,359.7,455,242.5,455Z'
            transform='translate(399.57 61)'
            fill='#7700d0'
          />
          <path
            d='M235.1,242l.9.5-.9.5v-1m-54-93.6V336.6L344,242.5,181.1,148.4Z'
            transform='translate(399.57 61)'
            fill='#45ff4d'
          />
        </motion.g>
      </g>
      <motion.g
        id='handle'
        whileHover={() => setHandleGrab(true)}
        style={{ cursor: 'pointer' }}
        onHoverEnd={() => setHandleGrab(false) && setHasSeenHandle(false)}
      >
        <path
          d='M-75.47,46.05c10.3,0,18.6,7.4,18.6,16.4s-8.4,16.4-18.6,16.4h-.3l-85.5,29.2-.2.1c-3.9,2.2-7.6,4.2-11.2,6.2-53.7,29.7-78.2,43.3-86.7,132.6-3.8,39.3,3.2,68.2,22,90.7,16,19.2,40.8,34.1,80.6,48.6l80.8,29.2h.3c10.3,0,18.6,7.4,18.6,16.4s-8.4,16.4-18.6,16.4H-226c-93.2,0-169.1-90.1-169.1-200.9,0-111,75.8-201.3,169.1-201.4h150.5Z'
          transform='translate(399.57 61)'
          fill='#3e254a'
          stroke='#fcd4ff'
          strokeMiterlimit='10'
          strokeWidth='9'
        />
        <g>
          <path
            d='M-50.37,386.35c12.9,0,23.7,20.8,23.7,45.5s-10.9,45.5-23.7,45.5c-4.7,0-8-8.7-8-16.4s3.3-16.4,8-16.4c4.3,0,7.7-5.5,7.7-12.6s-3.3-12.6-7.7-12.6c-4.7,0-8-8.7-8-16.4S-55.07,386.35-50.37,386.35Z'
            transform='translate(399.57 61)'
            fill='#3e254a'
          />
          <path
            d='M-50.37,475.35c-2.4,0-6-5.8-6-14.4s3.6-14.4,6-14.4c5.5,0,9.7-6.3,9.7-14.6s-4.2-14.6-9.7-14.6c-2.4,0-6-5.8-6-14.4s3.6-14.4,6-14.4c5.2,0,10.6,4.3,14.7,11.8,4.6,8.4,7.1,19.6,7.1,31.6s-2.5,23.2-7.1,31.6c-4.2,7.4-9.5,11.8-14.7,11.8m0,4c14.2,0,25.7-21.3,25.7-47.5s-11.5-47.5-25.7-47.5c-5.5,0-10,8.3-10,18.4s4.5,18.4,10,18.4c3.1,0,5.7,4.7,5.7,10.6s-2.6,10.6-5.7,10.6c-5.5,0-10,8.3-10,18.4s4.4,18.6,10,18.6Z'
            transform='translate(399.57 61)'
            fill='#fcd4ff'
          />
        </g>
        <g>
          <path
            d='M-50.37,17c12.9,0,23.7,20.8,23.7,45.5S-37.57,108-50.37,108c-4.7,0-8-8.7-8-16.4s3.3-16.4,8-16.4c4.4,0,7.7-5.4,7.7-12.6S-46,50-50.37,50c-4.7,0-8-8.7-8-16.4S-55.07,17-50.37,17Z'
            transform='translate(399.57 61)'
            fill='#3e254a'
          />
          <path
            d='M-50.37,106c-2.4,0-6-5.8-6-14.4s3.6-14.4,6-14.4c5.5,0,9.7-6.3,9.7-14.6S-44.87,48-50.37,48c-2.4,0-6-5.8-6-14.4s3.6-14.4,6-14.4c5.2,0,10.6,4.3,14.7,11.8,4.6,8.4,7.1,19.6,7.1,31.6s-2.5,23.2-7.1,31.6c-4.2,7.5-9.5,11.8-14.7,11.8m0,4c14.2,0,25.7-21.3,25.7-47.5S-36.17,15-50.37,15c-5.5,0-10,8.3-10,18.4s4.5,18.4,10,18.4c3.1,0,5.7,4.7,5.7,10.6S-47.27,73-50.37,73c-5.5,0-10,8.3-10,18.4,0,10.3,4.4,18.6,10,18.6Z'
            transform='translate(399.57 61)'
            fill='#fcd4ff'
          />
        </g>
        {/* <text transform="translate(94.55 153.27)" writing-mode="tb" glyph-orientation-vertical="0deg" font-size="28.14" fill="#fff" font-family="AmericanTypewriter, American Typewriter" style="text-orientation: upright">Click<tspan x="0" y="140.72"> </tspan><tspan x="0" y="147.76" letter-spacing="0em">-</tspan><tspan x="0" y="175.91"> </tspan><tspan x="0" y="182.94">Drag</tspan></text> */}
      </motion.g>
    </motion.svg>
  )
}

export default PausePlay
