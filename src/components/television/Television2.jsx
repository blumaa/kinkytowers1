import React, { lazy } from 'react'
import { EvilBeast } from '../../scenes/EvilBeast/index'
import LittleBeast from '../../assets/stylesheets/animations/LittleBeast'
import LittleTitmouse from '../../assets/stylesheets/animations/LittleTitmouse'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'

const activeChannel = '#00F9FF'

const TVFrame = ({ channel, setChannel, power, setPower }) => {
  const powerButtonControls = useAnimation()
  const antennaeControls = useAnimation()
  const powerButtonVariants = {
    visible: {
      fill: '#00F9FF',
      opacity: 0.5,
      transition: { duration: 2 },
    },
    initial: {
      fill: '#000',
      opacity: 1,
      transition: { duration: 2 },
    },
  }
  const antennaeVariants = {
    visible: {
      // rotate: [2, -2],
      scale: 1.2,
      // originY: 1,
      transition: { duration: 5, repeat: Infinity, repeatType: 'reverse' },
    },
    initial: {
      // rotate: 0,
      scale: 1,
      // originY: 1,
      transition: { duration: 2 },
    },
  }

  React.useEffect(() => {
    power && powerButtonControls.start('visible')
    power && antennaeControls.start('visible')
    !power && powerButtonControls.start('initial')
    !power && antennaeControls.start('initial')
  }, [power])
  return (
    <svg
      id='Layer_1'
      data-name='Layer 1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 512 489.2'
    >
      <motion.g variants={antennaeVariants} animate={antennaeControls}>
      <ellipse cx='256' cy='94.2' rx='60.5' ry='38' fill='#5f4600' />
        <path
          id='antennae'
          d='M200.1,98.43a76,76,0,0,0-10.54,14,8.53,8.53,0,1,0,14.76,8.55,59.64,59.64,0,0,1,103.36,0,8.53,8.53,0,1,0,14.76-8.55,76,76,0,0,0-10.54-14L373,37.37A8.53,8.53,0,0,0,360.9,25.3l-62,62.05a75.43,75.43,0,0,0-85.69,0l-62.06-62A8.53,8.53,0,0,0,139,37.37Z'
          transform='translate(0 -22.8)'
        />
      </motion.g>
      {/* <rect y='96.67' width='512' height='392.53' rx='62.92' fill='#5f4600' /> */}
      <path
        d='M449.08,119.47H62.92A62.92,62.92,0,0,0,0,182.39V449.08A62.92,62.92,0,0,0,62.92,512H449.08A62.92,62.92,0,0,0,512,449.08V182.39A62.92,62.92,0,0,0,449.08,119.47ZM409.6,358.61A119.25,119.25,0,0,1,290.34,477.87H153.39A119.26,119.26,0,0,1,34.13,358.61V272.86A119.27,119.27,0,0,1,153.39,153.6h137A119.26,119.26,0,0,1,409.6,272.86Z'
        transform='translate(0 -22.8)'
        fill='#5f4600'
      />
      <path
        d='M354.16,159.78c-1.47-.37-36.85-8.94-132.29-8.94s-130.83,8.57-132,8.88c-25.86,5.71-43.13,22.9-49.95,49.76C39.51,211,30.93,246,30.93,315.74s8.58,104.78,9,106.43c7.22,26.42,23.43,42.62,49.65,49.52,1.46.37,36.85,8.94,132.29,8.94s130.82-8.57,131.92-8.86c24.62-5,41.9-22.12,50.07-49.78.37-1.47,8.94-36.56,8.94-106.26s-8.57-104.78-8.87-106C398.44,183.94,381.24,166.65,354.16,159.78Zm33,257.64C380.8,438.77,368.76,451,350,454.85c-.34.08-35.37,8.42-128.09,8.42s-127.75-8.34-128-8.39c-20.15-5.31-31.63-16.81-37.19-37.09-.08-.35-8.42-34.79-8.42-102.05s8.34-101.71,8.41-102C61.94,193.11,74,181,93.78,176.62c.34-.08,35.36-8.42,128.09-8.42s127.75,8.34,128,8.41c20.79,5.27,32.91,17.31,37.11,37.07.08.35,8.42,34.79,8.42,102.05S387.11,417.42,387.12,417.42Z'
        transform='translate(0 -22.8)'
        stroke='#000'
        stroke-miterlimit='10'
        stroke-width='2'
      />
      <path
        d='M460.8,119.47H51.2A51.25,51.25,0,0,0,0,170.67V460.8A51.25,51.25,0,0,0,51.2,512H460.8A51.25,51.25,0,0,0,512,460.8V170.67A51.25,51.25,0,0,0,460.8,119.47ZM494.93,460.8a34.16,34.16,0,0,1-34.13,34.13H51.2A34.16,34.16,0,0,1,17.07,460.8V170.67A34.16,34.16,0,0,1,51.2,136.54H460.8a34.16,34.16,0,0,1,34.13,34.13Z'
        transform='translate(0 -22.8)'
      />
      <g>
        <motion.g
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.5 },
          }}
          style={{ cursor: 'pointer' }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setPower(!power)}
        >
          <motion.path
            variants={powerButtonVariants}
            animate={powerButtonControls}
            fill='#00F9FF'
            id='power'
            d='M452.27,221.87a25.6,25.6,0,1,0-25.6-25.6A25.64,25.64,0,0,0,452.27,221.87Zm0-34.13a8.53,8.53,0,1,1-8.53,8.53A8.54,8.54,0,0,1,452.27,187.74Z'
            transform='translate(0 -22.8)'
          />
        </motion.g>
        <path
          id='channel'
          d='M477.87,264.54a25.6,25.6,0,1,0-25.6,25.6A25.64,25.64,0,0,0,477.87,264.54Zm-25.6,8.53a8.54,8.54,0,1,1,8.53-8.53A8.54,8.54,0,0,1,452.27,273.07Z'
          transform='translate(0 -22.8)'
        />
      </g>
      <g>
        <path
          d='M435.46,443.73h-.09a8.58,8.58,0,1,0,.09,0Z'
          transform='translate(0 -22.8)'
        />
        <motion.g
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.5 },
          }}
          style={{ cursor: 'pointer' }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setChannel(2)}
        >
          <path
            d='M469.59,341.34h-.08a8.57,8.57,0,1,0,.08,0Z'
            transform='translate(0 -22.8)'
            fill={ power && channel===2 && activeChannel}
          />
        </motion.g>
        <path
          d='M469.59,375.47h-.08a8.57,8.57,0,1,0,.08,0Z'
          transform='translate(0 -22.8)'
        />
        <path
          d='M469.59,409.6h-.08a8.57,8.57,0,1,0,.08,0Z'
          transform='translate(0 -22.8)'
        />
        <path
          d='M469.59,443.73h-.08a8.57,8.57,0,1,0,.08,0Z'
          transform='translate(0 -22.8)'
        />
        <path
          d='M435.46,409.6h-.09a8.5,8.5,0,0,0-8.49,8.53,8.56,8.56,0,1,0,8.58-8.53Z'
          transform='translate(0 -22.8)'
        />
        <path
          d='M435.46,375.47h-.09a8.58,8.58,0,1,0,.09,0Z'
          transform='translate(0 -22.8)'
        />
        <motion.g
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.5 },
          }}
          style={{ cursor: 'pointer' }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setChannel(1)}
        >
          <path
            d='M435.46,341.34h-.09a8.58,8.58,0,1,0,.09,0Z'
            transform='translate(0 -22.8)'
            fill={power && channel===1 && activeChannel}
          />
        </motion.g>
      </g>
    </svg>
  )
}

const TVBackground = ({ power }) => {
  const backgroundControls = useAnimation()
  const backgroundVariants = {
    visible: {
      fill: '#261B00',
    },
    initial: {
      fill: '#000',
    },
  }

  React.useEffect(() => {
    power && backgroundControls.start('visible')
    !power && backgroundControls.start('initial')
  }, [power])

  return (
    <svg
      id='Layer_1'
      data-name='Layer 1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 512 489.2'
    >
      <motion.rect
        y='96.67'
        width='512'
        height='392.53'
        rx='62.92'
        variants={backgroundVariants}
        animate={backgroundControls}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 2,
          mass: 1,
        }}
      />
    </svg>
  )
}

const Television = () => {
  const [channel, setChannel] = React.useState(1)
  const [power, setPower] = React.useState(false)
  const changeChannel = () => {
    if (channel === 1) {
      return <LittleBeast />
    } else if (channel === 2) {
      return <LittleTitmouse />
    }
  }
  return (
    <div className='TelevisionLayout2'>
      <div className='TelevisionLayout2__outer'>
        <div className='TelevisionLayout2__top'>
          <TVFrame
            channel={channel}
            setChannel={setChannel}
            power={power}
            setPower={setPower}
          />
        </div>
        <AnimatePresence>
          {power && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                type: 'spring',
                stiffness: 50,
                damping: 0.8,
                mass: 1,
              }}
              className='TelevisionLayout2__below'
            >
              {changeChannel()}
            </motion.div>
          )}
          u{' '}
        </AnimatePresence>
        <div className='TelevisionLayout2__below-2'>
          <TVBackground power={power} />
        </div>
        <div className='TelevisionLayout2__help'>?</div>
      </div>
    </div>
  )
}
export default Television
