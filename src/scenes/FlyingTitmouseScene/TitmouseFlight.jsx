import React from 'react'
import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { motion } from 'framer-motion'

gsap.registerPlugin(MotionPathPlugin)

const TitmouseFlight = () => {
  const [restart, setRestart] = React.useState(false)

  const flip = () => {
    gsap.to('#tit', { scaleX: -1 })
    // setFlipNum(flipNum === -1 ? 1 : -1)
  }

  // React.useEffect(() => {
  //   gsap.set('#tit-path', { opacity: 0 })
  // }, [])

  React.useEffect(() => {
    gsap.to('#tit', { scaleX: 1 })
    gsap.to('#tit', {
      duration: 9,
      repeat: 0,
      repeatDelay: 0,
      yoyo: true,
      ease: 'power.out',
      // motionPath: {
      //   path: '#tit-path',
      //   align: '#tit-path',
      //   start: 1,
      //   end: 0,
      //   autoRotate: true,
      //   alignOrigin: [0.5, 0.5],
      // },
      // onRepeat: (() => setFlipNum(flipNum === -1 ? 1 : -1)) && (() => flip()),
      // onRepeat: () => flip(),
      // onComplete: () => setRestart(!restart),
    })
  }, [restart])


  const transition = {
    duration: 5,
    ease: "easeInOut"
  };

  const animateIn = {
    pathLength: 1,
    pathOffset: 0
  };
  const animateOut = {
    pathLength: 1,
    pathOffset: 1
  };

const strokeWidth = 4

  return (
    <div className='TitmouseFlightWrapper'>
      <svg
        className='TitmouseFlight'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='-400 500 1000 1000'
      >
        <g id='tit' data-name='Layer 1'>
          <path
            id='red'
            d='M269.29,1797.72c-5.46,2-11.76,2-17.7,2.15-7.39.13-14.8-.6-22.2-.86-2.19-.08-5.73-.62-6.32.4-1.49,2.57-2.92,6.33-2.09,8.86,2.06,6.25,5.39,12.08,8.21,18.09-2.49-3.73-5.18-7.35-7.39-11.24-1.28-2.26-1.18-5.47-2.77-7.34-3.68-4.34-1.12-8.08,1.21-11,1-1.3,5.13-.24,7.82-.1,1.12.07,2.21.78,3.32.8,10.3.15,20.6.29,30.9.27,6.41,0,11.32-4.23,11.52-9.56C275.81,1792.57,275.24,1795.56,269.29,1797.72Zm-60.9-89c1.25,6.17,2.61,12.32,3.73,18.51.73,4.06.5,8.41,1.87,12.21,1.14,3.17,4,5.73,6.07,8.55C225,1736.37,215.85,1714.53,208.39,1708.77Zm-74.49-22.51c-5.39.5-5.12,5-3.82,7.69,1.48,3,5.1,4.92,7.79,7.31a6.71,6.71,0,0,1,.6-2.34,34.08,34.08,0,0,1,3.06-3.19C143.29,1689.11,138.56,1687.72,133.9,1686.26Zm17.38,58.83c-.66-2.1-2.44-4.87-1.69-6.14.91-1.54,3.9-2.19,6.1-2.53a39,39,0,0,1,8.91-.2c5,.41,5.29-1.53,3.53-5.54-1.31-3-1.82-6.32-2.8-9.47-.08-.24-1.1-.19-1.68-.27a33.44,33.44,0,0,0,1.5,6c2.53,5.63,1.25,7.85-5,7.95-2,0-4.27-.81-5.85-.06-2.65,1.27-4.84,3.49-7.22,5.31Zm5.33,32.84c6.38-7.47,6.43-22.3.08-27.37,7.61,7.53,1.63,15.43.64,23.19C157.16,1775.15,156.85,1776.54,156.61,1777.93Zm-44.54-30c1.53,6.42,3,12.86,4.65,19.26.28,1.1,1.29,2,2,3Q115.37,1759,112.07,1747.92Zm34.16,57c-.2-1.44-.48-2.88-.59-4.33-.39-5.39,3.53-7.6,9.31-5.27-2.35-3.48-4.92-3.78-8.07-.89C143.2,1797.81,142.87,1801.2,146.23,1804.92Zm86.67,29.61,6.66,14.75Zm-113.7-59.41,2.31,13.86Zm4.89,26.7q1.16,6.53,2.3,13Q125.24,1808.34,124.09,1801.82Zm22,13.29q-2.88,3.6-5.75,7.22Zm-39-76.1q2.07,2.54,4.16,5.06C109.92,1742.38,108.53,1740.7,107.15,1739Zm122.5,88,2.68,5.28Zm-107.77-35,1.58,4C122.93,1794.63,122.41,1793.3,121.88,1792Zm17.38,31-4,1.88Zm17.19-32c-.11,1-.21,2.08-.31,3.12C156.24,1793,156.35,1792,156.45,1790.91Zm114.35-6.68,1.56,1.93c-.33-.78-.66-1.57-1-2.33,0-.07-.33-.09-.43,0S270.83,1784.09,270.8,1784.23Zm-142.62,35.92-1.37-2Zm-23.27-85.94c.55.67,1.09,1.33,1.64,2ZM131,1825l-1.71-2C129.8,1823.65,130.37,1824.33,131,1825Zm21.7-78.44c.48.54,1,1.08,1.45,1.61C153.61,1747.64,153.13,1747.1,152.65,1746.56Zm115.09,35.71.23.22c.1-.2.2-.39.31-.58Zm-104.61-65.93-1.08-1.51ZM89.49,1855l7.57,11.54c2,.61,4,1.1,5.84,1.88,2.86,1.18,5.67,2.49,8.43,3.88a45.07,45.07,0,0,1,4.2,2.67c-1.39.62-2.76,1.3-4.18,1.83a13.71,13.71,0,0,1-2.41.48c1.23,1,2.3,2.71,3.7,3.07,9.4,2.44,18.26,7.26,28.47,6.26s20.3-1.6,30.43-2.54c1.07-.1,2-1.37,3-2.09l-6.48-1c1.82-1.22,3.47-3,5.47-3.57,6-1.85,8.63-5.89,9.35-11.9.25-2,1.84-3.88,2.82-5.81,1-4.19-.7-10.62,7.5-8.73,3.7.85,5.14,3,4,6.49-2.09,6.33.57,6.4,5.87,5.63s10.61.26,15.93.2c3.17,0,4.83,8,7.85,2.6,2.29-4.11,2.69-10.74,1.09-15.23-3.43-9.65-8.7-18.64-13.22-27.88-3.1-1.22-6.45-2-7.37-6.11-.13-.59-3.63-1.32-4.79-.65-8.51,5-11,4.13-14.51-5.49l-4.4-2.13a27.07,27.07,0,0,1-2.24,3.85c-2.45,3-5.05,5.86-7.59,8.78l-2.3,2.62c-.23-1.35-.82-2.75-.62-4,.77-4.78,1.8-9.52,2.73-14.28l.05.05c-2.68,1.79-5.43,3.48-8,5.41-3.17,2.36-6.19,4.93-9.27,7.4-3.87,8.36-9.36,14.89-18.86,17.11-.41.1-.64,2.52-.36,3.71.72,3,1.78,5.82,2.7,8.72l-11.87,1.81c.51-3.07.08-8.06,1.69-8.84,5.26-2.53,2.69-4.31.38-6.58a5.65,5.65,0,0,0-1.93-1.48c-6-2-8.5-6.74-9.85-12.41-1.49-.44-3.48-.42-4.39-1.4-4-4.41-7.87-9-11.6-13.73-.85-1.08-1-2.72-1.47-4.1,2,.75,4.22,1.12,5.82,2.34a77,77,0,0,1,7,6.75q0-8.64,0-17.27c-1.51-.52-3.34-.67-4.45-1.65-1.68-1.48-2.86-3.54-4.25-5.35-.19,2.29,0,4.71-.7,6.82s-2,4.84-3.69,5.42c-2.38.81-6.18,2.36-7.39-2.4-.17-.67-1.51-1-2.31-1.54a22.71,22.71,0,0,1-3.67.22c-1.12-5.3-2-10.65-2.93-16l-7.29-7.81c-3.51,2.55-4.83,11.5-2.94,17,1.83,5.26,4.43,10.68,4.47,16,.1,14.74,5.48,27.86,10.35,41.28C90,1847.89,89.35,1851.58,89.49,1855Zm23.12,7.93c-8.62-2.46-12.72-7.2-11.65-13.49l-4.41-19c-2.32-5-4.65-10-6.86-15.13,0-.09,1.79-1.28,2-1.12,2.17,2,4.19,4.25,6.25,6.41,8.31-3.12,8.32-3.12,8.43,6.38,0,3.25-1.23,7.45.33,9.59,5.68,7.8,10.16,17.17,21.86,18.37,8.87.92,17.55,3.86,26.42,4.47,8.1.55,14.43-4.18,16.79-12,2-6.72,2.22-14,3.76-20.89.37-1.62,2.92-2.76,4.47-4.12,1.44,1.66,4,3.27,4.1,5a73.09,73.09,0,0,1-.86,17.25c-1.41,7.19-2.2,15.11-12.18,16.82-4.24.72-8.16,3.55-12.13,5.6-1.65.84-3,2.91-4.61,3.09-4,.44-8.19.75-12.07-.06C132.27,1868.06,122.46,1865.36,112.61,1862.91Zm38.48-12.19-3.21-.42c-.7-1.93-2.54-4.89-1.9-5.61a53.67,53.67,0,0,1,10.33-8.93c.87-.58,3.45,1.42,5.24,2.23Zm67.54-1.92-.81.32a9,9,0,0,1,.2,2.46c-.3,1.52-.82,3-1.25,4.49-.84-1.29-2.12-2.49-2.43-3.89-.75-3.52-1.1-7.13-1.51-10.72-.06-.53.43-1.13.66-1.7.56.27,1.42.38,1.62.81C216.37,1843.27,217.47,1846.05,218.63,1848.8Zm-46.82-13.75a25.07,25.07,0,0,1-.62,3.74,14,14,0,0,1-1.85,3.76c-.21.29-2.12-.15-2.13-.3-.05-1.53.18-3.07.22-4.62,0-1.7,0-3.4,0-5.1,0-1,0-2.09.06-3.13,1.11.53,2.64.78,3.23,1.66C171.47,1832.21,171.51,1833.86,171.81,1835.05Zm-4.74-88c3.24,2.2,5.42,4.65,8,5.21a53.56,53.56,0,0,0,13.34.78c1.66-.06,3.26-1.73,4.88-2.66-1.63-1.71-3-4.56-4.92-4.92a121.89,121.89,0,0,0-17.21-1.54C170.26,1743.82,169.29,1745.24,167.07,1747Zm-64.55,28.85,6.8,3.34q-.91-5.64-1.84-11.27l-3.18-.31C103.7,1770.36,103.11,1773.1,102.52,1775.85Zm9.54,84.79a.59.59,0,0,0,.08.88l.76-.31Z'
            transform='translate(-11 -725.69)'
            fill='#b13d3a'
          />
          <g id='black'>
            <motion.path
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
              d='M12.83,1764.44c2.61,4.92,9.54,8,14.51,5.64,1.5-.7,3.18-3.51,2.88-5-.37-1.8-2.85-4.66-4.17-4.53-4.47.46-8.78-.09-7.51-5.15.9-3.61,4.8-8.1,8.28-9.13,9.85-2.92,25.34,5.77,28.07,15.69,2.66,9.66,3.61,19.78,5.61,29.63,2,9.62,3.62,19.38,6.6,28.7,4.47,14,9,28.15,15.29,41.41,6.61,14,17.38,24.63,32.65,29.82,2.08.12,4.16.06,6.24.18a36.12,36.12,0,0,1,6.25,1.13A63.61,63.61,0,0,0,134,1894c2.16.29,4.27.74,6.39,1.23,1.22.27,2.44.55,3.67.75,1,.16,2,.48,3,.55l.05-.1.11,0,.09,0a15,15,0,0,1,2.91.25,34.8,34.8,0,0,0,3.54-.13c2.35-.18,4.55-1,6.89-1.13a33.25,33.25,0,0,0,3.72-.38,33.05,33.05,0,0,0,3.29-.5,15.49,15.49,0,0,1,1.51-.46,12.38,12.38,0,0,1,1.72-.18,18.87,18.87,0,0,0,3.57-.74c1.27-.33,2.58-.39,3.84-.73a13.52,13.52,0,0,1,3.31-.67,1.9,1.9,0,0,1,.28-.1c11.15-2.69,20.67-8.22,29.58-15.19a6.39,6.39,0,0,1,5-.76c11.72,3.35,24.05.51,26-13.71.56-4-1.85-8.48-2.89-12.73l-6.66-14.75-.57-2.27-2.68-5.28a.61.61,0,0,0-.46-.62c-2.49-3.73-5.18-7.35-7.39-11.24-1.28-2.26-1.18-5.47-2.77-7.34-3.68-4.34-1.12-8.08,1.21-11,1-1.3,5.13-.24,7.82-.1,1.12.07,2.21.78,3.32.8,10.3.15,20.6.29,30.9.27,6.41,0,11.32-4.23,11.52-9.56l-1.44-2.06-1.56-1.93-2.83-1.74-.23-.22c-5.91-2.1-11.7-5.39-17.76-6-9.08-1-15.94-5.54-22.9-10.44-.72-.5-1.69-1.69-1.52-2.23,2.18-6.65-3.52-10.43-5.5-15.54-2.09-2.82-4.93-5.38-6.07-8.55-1.37-3.8-1.14-8.15-1.87-12.21-1.12-6.19-2.48-12.34-3.73-18.51-3.84-5.08-7.09-10.78-11.66-15.1-5.31-5-14.72-2.31-19.12,4.58s-2.93,12.56,5.06,16.46c3.07,1.5,6.85,1.75,10.35,2,.78.07,2.69-2.75,2.46-3.08a13.39,13.39,0,0,0-4.37-4c-1-.52-2.64.45-3.78.09s-1.92-1.54-2.86-2.36a17.2,17.2,0,0,1,2.9-1.26c6.56-1.54,9.77,1,11.23,7.74s4.76,13.1,6.46,19.82c1,4,1.16,8.56-5.76,4.73-3.13-1.72-7.34-2.26-11-2.09-5.32.24-7.63-2.91-9.25-6.79-4.43-10.63-7.94-21.68-13-32-3.91-8-8.59-16.18-14.77-22.45-3.63-3.7-11.2-5.9-16.42-5.08-7.36,1.16-11.37,7.72-11.93,15.67-.91,12.83,6.49,21.45,19,21.17,2.26-.05,5.74-2.43,6.4-4.46,1.22-3.81-1.24-6.22-5.54-6.07-.43,0-.88-.4-1.32-.62a34.08,34.08,0,0,0-3.06,3.19,6.71,6.71,0,0,0-.6,2.34c-2.69-2.39-6.31-4.32-7.79-7.31-1.3-2.65-1.57-7.19,3.82-7.69.92-6.15,4.92-8.15,8.88-3.5,6.18,7.27,11.23,15.53,16.4,23.6,1.56,2.43,1.95,5.62,2.87,8.47l1.08,1.51c.17,1.53.34,3.07.52,4.6.58.08,1.6,0,1.68.27,1,3.15,1.49,6.48,2.8,9.47,1.76,4,1.47,6-3.53,5.54a39,39,0,0,0-8.91.2c-2.2.34-5.19,1-6.1,2.53-.75,1.27,1,4,1.69,6.14l1.37,1.47c.48.54,1,1.08,1.45,1.61l2.59,2.39c6.35,5.07,6.3,19.9-.08,27.37q-.09,6.49-.16,13c-.11,1-.21,2.08-.31,3.12l-1.19,1.29c-5.78-2.33-9.7-.12-9.31,5.27.11,1.45.39,2.89.59,4.33l-.09,10.19q-2.88,3.6-5.75,7.22l-1.13.61-4,1.88L131,1825l-1.71-2c-.36-.94-.71-1.89-1.06-2.83l-1.37-2-.42-3.25q-1.15-6.51-2.3-13l-.63-5.86-1.58-4c-.12-1-.24-2-.37-3l-2.31-13.86c-.18-1.65-.35-3.29-.52-4.93-.67-1-1.68-1.91-2-3-1.65-6.4-3.12-12.84-4.65-19.26-.26-1.29-.51-2.57-.76-3.85q-2.09-2.52-4.16-5.06l-.6-2.82c-.55-.65-1.09-1.31-1.64-2-6.47-6.22-12.61-12.86-19.59-18.44-2.26-1.81-6.72-.85-10.18-1.16-.19,3.48-1.47,7.36-.36,10.37,3.09,8.45,7.38,16.46,10.77,24.82a92.43,92.43,0,0,1,3.84,13.68c.29,1.26-.39,2.74-.62,4.13a21.52,21.52,0,0,1-2.85-3c-3.74-5.93-6.33-13.06-11.3-17.62-5.8-5.32-13.53-8.62-20.68-12.29-1.41-.72-4.86.22-5.91,1.55-4,5.06-8.5,2.65-12.58,1.07-8.46-3.28-20,2.89-22.82,11.49C10.82,1754.32,10,1759.2,12.83,1764.44Zm180.46-14.11c-1.62.93-3.22,2.6-4.88,2.66a53.56,53.56,0,0,1-13.34-.78c-2.58-.56-4.76-3-8-5.21,2.22-1.76,3.19-3.18,4.09-3.14a123.4,123.4,0,0,1,17.21,1.55C190.25,1745.77,191.66,1748.62,193.29,1750.33Zm22.5,32.67c-.45,9.74-5.64,17.57-13.16,18a64.93,64.93,0,0,1-19-1.45c-9.81-2.35-16-8.94-16.24-15.33-.36-8,3.35-14.65,7.45-21,.75-1.18,2.95-1.68,4.58-2,7-1.36,13.63-.28,20.35,2.17C209.7,1767,216.73,1770.82,215.79,1783Zm-152-30.71c.85-.25,2.24-.31,2.75.21,5,5.12,10.57,10,10.55,18.06l7.29,7.82,6.6,15.76c.8.51,2.14.88,2.31,1.55,1.21,4.76,5,3.21,7.39,2.4,1.68-.58,3-3.36,3.69-5.42s.51-4.53.7-6.82l-2.52-10c.59-2.75,1.18-5.49,1.78-8.24a21.42,21.42,0,0,1-3.8-15.66c.2-1.68-1.6-3.75-2.81-5.41-1.82-2.51-4-4.74-5.84-7.26-.64-.89-.58-2.29-.85-3.47,1.22.63,2.89.94,3.58,1.93,3.81,5.42,8,10.7,10.8,16.64,1.85,4,1.48,9,2.1,13.54q.92,5.64,1.84,11.27,2.21,6.82,4.42,13.66,0,8.63,0,17.27l4.62,10.14c1.35,5.67,3.88,10.37,9.85,12.41a5.65,5.65,0,0,1,1.93,1.48c2.31,2.27,4.88,4-.38,6.58-1.61.78-1.18,5.77-1.69,8.84l11.87-1.81c-.92-2.9-2-5.77-2.7-8.72-.28-1.19-.05-3.61.36-3.71,9.5-2.22,15-8.75,18.86-17.11.51-2.8.14-6.35,1.74-8.23,2.3-2.7,6.87-3.56,5.9-8.6,0-.17,1.86-1.17,2.33-.9,2.52,1.49,4.88,3.25,7.3,4.92l-.05-.05,10,3.06,4.4,2.13c6.36-.85,12.71-1.74,19.07-2.51.89-.11,2.43,0,2.69.56,2.26,4.5,6.65,8.31,4.91,14.19,4.52,9.25,9.79,18.24,13.22,27.89,1.6,4.49,1.2,11.12-1.09,15.23-3,5.44-4.68-2.64-7.85-2.6-5.32.06-10.74-1-15.93-.2s-8,.7-5.87-5.63c1.14-3.47-.3-5.64-4-6.49-8.2-1.89-6.5,4.54-7.5,8.73.93,4.74,2.16,9.46,2.63,14.25.17,1.66-1.1,4.51-2.45,5.07-3.57,1.48-7.53,2-11.34,2.92-1,.72-2,2-3,2.09-10.13.94-20.3,1.55-30.43,2.54s-19.07-3.82-28.47-6.26c-1.4-.36-2.47-2-3.7-3.07l-11.88-10.74L89.49,1855c-.44-.5-1.11-.92-1.3-1.49-3.61-10.87-7.47-21.66-10.66-32.65-3-10.49-5.68-21.11-8-31.78-2.44-11.45-4.25-23-6.27-34.57C63.18,1753.77,63.41,1752.4,63.76,1752.29Z'
              transform='translate(-11 -725.69)'
              fill='none'
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
            />
            <path
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
              id='leg-right'
              d='M122.91,1891.86a22.62,22.62,0,0,1,4.37.9,40.37,40.37,0,0,0,6.26,1.17s0,0,0,0c-1.73,5.21-3.06,8.42-3.7,11.76-.18,1,1.66,2.38,2.59,3.58h0c1.31-2.84,3-5.59,3.73-8.58.35-1.41-1.09-3.27-2.49-6.76l1.56.22c2.13.33,4.21.87,6.32,1.33,1.08.23,2.18.39,3.27.59.65.12.59.17,1.24.27h0c-.74,1.62-.8,3.38-1.42,5-1.26,3.36-1.39,8-3.76,9.91-5.38,4.33-5.28,8.8-3.21,14.39,2.86,7.75,3.81,16.82,8.53,23.12,7.36,9.86,17,18.08,26.06,26.58,3.86,3.62,4.23,5.83-.64,7.74-3.51,1.38-3.58,2.87-1.27,5.38a8.1,8.1,0,0,1,2.11,3.3c.36,1.5.68,4-.07,4.56-1.28.87-4.08,1.31-5,.51-3-2.57-5.23-6.17-7.93-9.13a27.13,27.13,0,0,1-2.6-3.26,1.45,1.45,0,0,0-2.66.62,17.54,17.54,0,0,1-1.22,5.23c-1.15,2.49-3.52,4.41-5.36,6.59h0c-1.15-2.3-2.75-4.48-3.35-6.9-2.51-10.17-3.67-20.81-7.31-30.53-5-13.33-11-26.19-10.32-40.88a10.4,10.4,0,0,0-.41-2.92c-1.34-5.32-3.92-10.66-3.79-15.94.12-4.87-.65-5.49-1.07-8Z'
              transform='translate(-11 -725.69)'
              fill='none'
            />
            <path
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
              id='leg-left'
              d='M167.66,1920.58c-3.11-7.42-7.55-14.39-12.19-21a14.19,14.19,0,0,0-2.81-2.93c.23,0-.23,0,0,0a14.28,14.28,0,0,0,2.35-.23,28.09,28.09,0,0,0,3.26-.66,20.31,20.31,0,0,1,3.65-.42,31.34,31.34,0,0,0,3.35-.45h0c-.55.67-1.48,1.49-1.32,1.89,1.07,2.85,2.43,5.59,4.45,10,1.39-2.9,2.72-4.53,2.36-5.12a65.62,65.62,0,0,0-5.23-6.82,16.55,16.55,0,0,0,2.85-.51,7.46,7.46,0,0,1,1.8-.41c.55,0,1.1,0,1.64-.12,1.18-.18,2.3-.6,3.46-.83s2.33-.34,3.47-.66c.51-.14-.52.12,0,0-.16,1.21-.1,2.63-.24,4-.3,2.79,2.12,6.74.91,8.41-4.41,6.1-3.75,11.7-1,18,4.77,11,2.91,13.84,16.61,12.61,3.09-.28,6.23-.15,9.34-.16a5.17,5.17,0,0,1,4.73,7.91c-2.93,5.16-6.82,4.73-11.87,3-3.32-1.16-7.38-.16-11.11-.13,2.33,2.3,4.53,4.76,7.06,6.82,1,.83,2.9.51,4.12,1.2s3.15,2,3.18,3.11c0,1.3-1.42,3.55-2.55,3.78-1.89.37-4.08-.36-6.06-.93-3.25-.92-6.21-1.59-7.77,2.59a38.88,38.88,0,0,1-2.51,4.72c-2-1.62-5.2-3-5.61-4.9-1.38-6.54-1.35-13.36-2.6-19.94C172,1935,170.54,1927.45,167.66,1920.58Z'
              transform='translate(-11 -725.69)'
              fill='none'
            />
            <path
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
              d='M96.55,1830.44l4.41,19q5.54,5.61,11.1,11.22l.84.57-.76.31c.16.46.31.93.46,1.39,9.86,2.45,19.67,5.15,29.61,7.22,3.88.81,8.08.5,12.07.06,1.62-.18,3-2.25,4.61-3.09,4-2,7.89-4.88,12.13-5.6,10-1.71,10.77-9.63,12.18-16.82a73.09,73.09,0,0,0,.86-17.25c-.07-1.72-2.66-3.33-4.1-5-1.55,1.36-4.1,2.5-4.47,4.12-1.54,6.9-1.72,14.17-3.76,20.89-2.36,7.78-8.69,12.51-16.79,12-8.87-.61-17.55-3.55-26.42-4.47-11.7-1.2-16.18-10.57-21.86-18.37-1.56-2.14-.29-6.34-.33-9.59-.11-9.5-.12-9.5-8.43-6.38Z'
              transform='translate(-11 -725.69)'
              fill='none'
            />
            <path
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
              fill='none'
              d='M151.09,1850.72,161.55,1838c-1.79-.81-4.37-2.81-5.24-2.23a53.67,53.67,0,0,0-10.33,8.93c-.64.72,1.2,3.68,1.9,5.61Z'
              transform='translate(-11 -725.69)'
            />
            <path
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={6}
              id='eye'
              d='M189.72,1777.14c-.32,6.95,5,13,10.39,13,7.22,0,7.27-5.72,7.76-10.6.64-6.46-3.81-11-11.17-11C190.38,1768.62,190.07,1773.77,189.72,1777.14Z'
              transform='translate(-11 -725.69)'
              fill='none'
            />
          </g>
        </g>
        <path
          id='tit-path'
          d='M3392.88,917.2c-526-250.67-851.41-209-1052.55-122.19C1785,1034.73,1749,1803.6,1277.06,1842c-236.3,19.24-366.71-162.15-730.91-109-170.16,24.83-303.4,88-389.57,137.71'
          transform='translate(-11 -725.69)'
          fill='white'
          stroke='black'
          strokeMiterlimit='10'
          strokeWidth='4'
        />
      </svg>
    </div>
  )
}

export default TitmouseFlight
