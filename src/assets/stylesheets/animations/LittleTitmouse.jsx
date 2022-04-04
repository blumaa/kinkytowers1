import React from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import TitPath from './TitPath.jsx'

gsap.registerPlugin(MotionPathPlugin)

const titmouseVariants = {
  hidden: {
    x: '-100px',
  },
  visible: {
    x: '43rem',
    y: ['-100px', '-50px', '-100px', '-150px', '-100px'],
  },
}

const LittleTitmouse = () => {
  const leftLeg = React.useRef(null)
  const rightLeg = React.useRef(null)
  const upperBody = React.useRef(null)
  const titPathRef = React.useRef(null)
  const tm = React.useRef(null)
  const wing = React.useRef(null)
  const eye = React.useRef(null)
  const blackEye = React.useRef(null)

  React.useEffect(() => {
    gsap.to(eye.current, {
      duration: 1,
      'clip-path': 'circle(150% at bottom)',
      repeat: -1,
      yoyo: true,
      transformOrigin: 'top center',
      repeatDelay: 0,
    })
    // gsap.to(blackEye.current, {duration: .9, repeat: -1, scale: .1, yoyo: true, ease: "power3.out", transformOrigin: "top center"  })
  }, [])
  React.useEffect(() => {
    // gsap.to(tm.current, { scale: 1.1, repeat: -1, yoyo: true, duration: .2})
    // gsap.to('.LittleTitmouse', {duration: 10, motionPath: titPathRef.current})
    // gsap.to('.LittleTitmouse', {duration: 10, motionPath: "#tit-path"})
  }, [])
  //     React.useEffect(() => {
  //       gsap.set(leftLeg.current, {transformOrigin: "top center", rotation: -20, y: -30 })
  //       gsap.set(rightLeg.current, {transformOrigin: "top center", rotation: -20 })
  //       gsap.set(upperBody.current, {transformOrigin: "center bottom" })
  //       gsap.set(".LittleTitmouse", {x: "-40rem"})
  //       gsap.set('.LittleTitmouse', {transformOrigin: "center center" })

  //       const tl = gsap.timeline({ repeat: 0, yoyo: false })

  //       const leftLegTl = gsap.timeline({ repeat: -1, yoyo: true, paused: true })
  //           leftLegTl.add(
  //               gsap.fromTo(leftLeg.current, {
  //                   rotation: -20,
  //               }, {rotation: 50, y: -10, duration: .3, ease: 'none' })
  //           )

  //       const rightLegTl = gsap.timeline({ repeat: -1, yoyo: true, paused: true, repeatDelay: 0 })
  //           rightLegTl.add(
  //               gsap.fromTo(rightLeg.current, {
  //                   rotation: 30,
  //               }, {rotation: -20, y: -30, ease: 'none', duration: .3})
  //           )

  //       const titMouseMove1 = gsap.timeline({ repeat: 0, yoyo: false, paused: true })
  //           titMouseMove1.add(
  //               gsap.fromTo('.LittleTitmouse', {
  //                   x: '-40rem',
  //               }, {x: '0rem', y: 0, duration: 3,
  //               ease: "power3.out"
  //               })
  //           )
  //       const hop = gsap.timeline({ repeat: 1, yoyo: true, paused: true })
  //           hop.add(
  //               gsap.fromTo('.LittleTitmouse', {
  //                   y: '0rem',
  //               }, {y: '-2rem', duration: .1,
  //               ease: "power3.out"
  //               })
  //           )
  //       const titMouseMove2 = gsap.timeline({ repeat: 0, yoyo: true, paused: true })
  //           titMouseMove2.add(
  //               gsap.fromTo('.LittleTitmouse', {
  //                   x: '0rem',
  //               }, {x: '20rem', y: 0, duration: 3,
  //               ease: "power3.out"
  //               })
  //           )

  //       const restingTit = gsap.timeline({ repeat: -1, yoyo: true, paused: true })
  //           restingTit.add(
  //               gsap.to('.LittleTitmouse', {
  //                   scale: 1.3,
  //                   duration: 10
  //               })
  //           )

  //       const peck = gsap.timeline({ repeat: 1, yoyo: true, paused: true })
  //           peck.add(
  //               gsap.to(upperBody.current, {
  //                   rotation: 70,
  //                   duration: .5,
  //                   ease: 'power3.out'
  //               })
  //           )

  //       tl.addLabel("start", 0)
  //       tl.add(()=>rightLegTl.play(), "start")
  //       tl.add(()=>leftLegTl.play(), "start")
  //       tl.add(()=>titMouseMove1.play(), "start")
  //       tl.addLabel('endOfTit', 3)
  //       tl.add(()=>rightLegTl.pause(), 'endOfTit')
  //       tl.add(()=>leftLegTl.pause(), 'endOfTit')
  //       tl.add(()=>peck.play(), 'endOfTit')
  //       tl.add(()=>hop.play(), 'endOfTit+=2')
  //       tl.addLabel("move2", 7)
  //       tl.add(()=>rightLegTl.play(), "move2")
  //       tl.add(()=>leftLegTl.play(), "move2")
  //       tl.add(()=>titMouseMove2.play(), "move2")
  //       tl.addLabel('endOfTit2', 10)
  //       tl.add(()=>rightLegTl.pause(), 'endOfTit2')
  //       tl.add(()=>leftLegTl.pause(), 'endOfTit2')
  //       tl.add(gsap.set([leftLeg.current, rightLeg.current], { rotation: 0 }))
  //       tl.add(()=>hop.play(), 'endOfTit2+=3')
  //       tl.play()

  //     }, [])

  return (
    <>
      <svg
        ref={tm}
        className='LittleTitmouse'
        id='Layer_1'
        data-name='Layer 1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 263.85 327.44'
      >
        <g ref={upperBody}>
          <path
            id='red'
            d='M269.29,143.58c-5.46,2-11.76,2-17.7,2.16-7.39.13-14.8-.6-22.2-.86-2.19-.08-5.73-.62-6.32.4-1.49,2.57-2.92,6.32-2.09,8.85,2.06,6.26,5.39,12.09,8.21,18.1-2.49-3.74-5.18-7.35-7.39-11.25-1.28-2.25-1.18-5.46-2.77-7.33-3.68-4.34-1.12-8.08,1.21-11,1-1.3,5.13-.25,7.82-.1,1.12.06,2.21.78,3.32.8,10.3.15,20.6.28,30.9.26,6.41,0,11.32-4.22,11.52-9.55C275.81,138.44,275.24,141.42,269.29,143.58Zm-60.9-88.94c1.25,6.17,2.61,12.31,3.73,18.5.73,4.07.5,8.42,1.87,12.22,1.14,3.17,4,5.72,6.07,8.55C225,82.23,215.85,60.4,208.39,54.64ZM133.9,32.13c-5.39.5-5.12,5-3.82,7.68,1.48,3,5.1,4.93,7.79,7.32a6.82,6.82,0,0,1,.6-2.35,35.25,35.25,0,0,1,3.06-3.18C143.29,35,138.56,33.58,133.9,32.13ZM151.28,91c-.66-2.11-2.44-4.87-1.69-6.14.91-1.54,3.9-2.2,6.1-2.53a38.47,38.47,0,0,1,8.91-.2c5,.4,5.29-1.53,3.53-5.54-1.31-3-1.82-6.33-2.8-9.47-.08-.24-1.1-.19-1.68-.28a33.34,33.34,0,0,0,1.5,6c2.53,5.63,1.25,7.85-5,7.94-2,0-4.27-.8-5.85,0-2.65,1.26-4.84,3.49-7.22,5.31Zm5.33,32.83c6.38-7.46,6.43-22.29.08-27.36,7.61,7.53,1.63,15.43.64,23.19C157.16,121,156.85,122.4,156.61,123.79Zm-44.54-30c1.53,6.43,3,12.87,4.65,19.27.28,1.1,1.29,2,2,3Q115.37,104.92,112.07,93.78Zm34.16,57c-.2-1.45-.48-2.88-.59-4.33-.39-5.4,3.53-7.6,9.31-5.28-2.35-3.48-4.92-3.78-8.07-.88C143.2,143.68,142.87,147.07,146.23,150.79ZM232.9,180.4l6.66,14.74ZM119.2,121l2.31,13.86Zm4.89,26.69q1.16,6.54,2.3,13Q125.24,154.2,124.09,147.68Zm22,13.3-5.75,7.21Zm-39-76.1q2.07,2.53,4.16,5.06Zm122.5,88,2.68,5.28Zm-107.77-35c.53,1.34,1.06,2.67,1.58,4C122.93,140.49,122.41,139.16,121.88,137.83Zm17.38,31-4,1.87Zm17.19-32c-.11,1-.21,2.07-.31,3.11C156.24,138.86,156.35,137.82,156.45,136.78ZM270.8,130.1l1.56,1.93c-.33-.79-.66-1.57-1-2.34a.48.48,0,0,0-.43,0C270.82,129.74,270.83,130,270.8,130.1ZM128.18,166c-.46-.67-.91-1.35-1.37-2C127.27,164.65,127.72,165.33,128.18,166ZM104.91,80.08c.55.66,1.09,1.33,1.64,2Zm26,90.79-1.71-2Zm21.7-78.44L154.1,94C153.61,93.51,153.13,93,152.65,92.43Zm115.09,35.71.23.22.31-.59ZM163.13,62.21l-1.08-1.52ZM89.49,200.84q3.78,5.78,7.57,11.55c2,.61,4,1.1,5.84,1.87,2.86,1.18,5.67,2.5,8.43,3.89a45.07,45.07,0,0,1,4.2,2.67c-1.39.62-2.76,1.29-4.18,1.83a14.68,14.68,0,0,1-2.41.47c1.23,1.06,2.3,2.72,3.7,3.08,9.4,2.44,18.26,7.26,28.47,6.26s20.3-1.6,30.43-2.54c1.07-.1,2-1.37,3-2.09l-6.48-1c1.82-1.22,3.47-3,5.47-3.57,6-1.86,8.63-5.89,9.35-11.9.25-2,1.84-3.88,2.82-5.81,1-4.2-.7-10.62,7.5-8.73,3.7.85,5.14,3,4,6.49-2.09,6.33.57,6.39,5.87,5.62s10.61.27,15.93.21c3.17,0,4.83,8,7.85,2.59,2.29-4.11,2.69-10.73,1.09-15.23-3.43-9.64-8.7-18.63-13.22-27.88-3.1-1.21-6.45-2-7.37-6.11-.13-.59-3.63-1.32-4.79-.64-8.51,5-11,4.13-14.51-5.5l-4.4-2.12a27.07,27.07,0,0,1-2.24,3.85c-2.45,3-5.05,5.86-7.59,8.77l-2.3,2.62c-.23-1.34-.82-2.74-.62-4,.77-4.78,1.8-9.52,2.73-14.28l.05.05c-2.68,1.79-5.43,3.48-8,5.4-3.17,2.37-6.19,4.93-9.27,7.41-3.87,8.36-9.36,14.88-18.86,17.11-.41.09-.64,2.51-.36,3.7.72,3,1.78,5.82,2.7,8.73l-11.87,1.8c.51-3.06.08-8.06,1.69-8.83,5.26-2.53,2.69-4.31.38-6.58a5.81,5.81,0,0,0-1.93-1.49c-6-2-8.5-6.74-9.85-12.4-1.49-.44-3.48-.42-4.39-1.4-4-4.41-7.87-9-11.6-13.73-.85-1.08-1-2.72-1.47-4.1,2,.75,4.22,1.12,5.82,2.34a77,77,0,0,1,7,6.75q0-8.64,0-17.28c-1.51-.52-3.34-.67-4.45-1.64-1.68-1.49-2.86-3.54-4.25-5.35-.19,2.28,0,4.71-.7,6.82s-2,4.84-3.69,5.41c-2.38.82-6.18,2.37-7.39-2.4-.17-.66-1.51-1-2.31-1.54a21.94,21.94,0,0,1-3.67.23c-1.12-5.3-2-10.65-2.93-16l-7.29-7.82c-3.51,2.56-4.83,11.51-2.94,17,1.83,5.26,4.43,10.68,4.47,16.05.1,14.73,5.48,27.86,10.35,41.28C90,193.76,89.35,197.45,89.49,200.84Zm23.12,7.94c-8.62-2.46-12.72-7.2-11.65-13.49l-4.41-19c-2.32-5-4.65-10.06-6.86-15.13,0-.09,1.79-1.28,2-1.13,2.17,2,4.19,4.26,6.25,6.42,8.31-3.12,8.32-3.12,8.43,6.38,0,3.25-1.23,7.45.33,9.59,5.68,7.8,10.16,17.17,21.86,18.37,8.87.91,17.55,3.86,26.42,4.46,8.1.55,14.43-4.17,16.79-12,2-6.71,2.22-14,3.76-20.88.37-1.63,2.92-2.76,4.47-4.12,1.44,1.66,4,3.27,4.1,5a73.11,73.11,0,0,1-.86,17.25c-1.41,7.19-2.2,15.11-12.18,16.81-4.24.73-8.16,3.56-12.13,5.6-1.65.85-3,2.92-4.61,3.1-4,.43-8.19.75-12.07-.06C132.27,213.93,122.46,211.23,112.61,208.78Zm38.48-12.19-3.21-.43c-.7-1.93-2.54-4.88-1.9-5.61a54,54,0,0,1,10.33-8.92c.87-.58,3.45,1.42,5.24,2.23Zm67.54-1.93-.81.33a9,9,0,0,1,.2,2.45c-.3,1.53-.82,3-1.25,4.5-.84-1.29-2.12-2.49-2.43-3.89-.75-3.52-1.1-7.14-1.51-10.72-.06-.54.43-1.13.66-1.7.56.26,1.42.38,1.62.81C216.37,189.14,217.47,191.91,218.63,194.66Zm-46.82-13.75a25.23,25.23,0,0,1-.62,3.75,14,14,0,0,1-1.85,3.76c-.21.29-2.12-.15-2.13-.3-.05-1.53.18-3.08.22-4.62,0-1.7,0-3.4,0-5.11,0-1,0-2.08.06-3.12,1.11.53,2.64.78,3.23,1.66C171.47,178.08,171.51,179.73,171.81,180.91Zm-4.74-88c3.24,2.2,5.42,4.64,8,5.21a53.56,53.56,0,0,0,13.34.78c1.66-.06,3.26-1.73,4.88-2.67-1.63-1.7-3-4.55-4.92-4.91a123.4,123.4,0,0,0-17.21-1.55C170.26,89.69,169.29,91.11,167.07,92.87Zm-64.55,28.85,6.8,3.33q-.91-5.62-1.84-11.26l-3.18-.31Q103.4,117.59,102.52,121.72Zm9.54,84.79a.58.58,0,0,0,.08.87l.76-.3Z'
            transform='translate(-11 -15.74)'
            fill='#b13d3a'
          />
          <path
            d='M12.83,110.31c2.61,4.91,9.54,8,14.51,5.64,1.5-.7,3.18-3.51,2.88-5-.37-1.81-2.85-4.67-4.17-4.53-4.47.46-8.78-.09-7.51-5.15.9-3.61,4.8-8.11,8.28-9.13,9.85-2.92,25.34,5.76,28.07,15.69,2.66,9.66,3.61,19.77,5.61,29.63,2,9.62,3.62,19.37,6.6,28.7,4.47,14,9,28.14,15.29,41.41,6.61,14,17.38,24.62,32.65,29.82,2.08.12,4.16.06,6.24.18a36.12,36.12,0,0,1,6.25,1.13,63.58,63.58,0,0,0,6.43,1.13c2.16.3,4.27.74,6.39,1.23,1.22.28,2.44.55,3.67.75,1,.16,2,.49,3,.56a.54.54,0,0,0,.05-.11l.11.05.09,0a15,15,0,0,1,2.91.25,34.8,34.8,0,0,0,3.54-.14c2.35-.17,4.55-1,6.89-1.12a33.25,33.25,0,0,0,3.72-.38,33.08,33.08,0,0,0,3.29-.51c.5-.14,1-.35,1.51-.46a14.11,14.11,0,0,1,1.72-.17,18.14,18.14,0,0,0,3.57-.75c1.27-.32,2.58-.39,3.84-.73a14,14,0,0,1,3.31-.66,1.9,1.9,0,0,1,.28-.1c11.15-2.7,20.67-8.22,29.58-15.19a6.39,6.39,0,0,1,5-.76c11.72,3.34,24.05.51,26-13.71.56-4-1.85-8.48-2.89-12.74L232.9,180.4l-.57-2.27-2.68-5.28a.61.61,0,0,0-.46-.62c-2.49-3.74-5.18-7.35-7.39-11.25-1.28-2.25-1.18-5.46-2.77-7.33-3.68-4.34-1.12-8.08,1.21-11,1-1.3,5.13-.25,7.82-.1,1.12.06,2.21.78,3.32.8,10.3.15,20.6.28,30.9.26,6.41,0,11.32-4.22,11.52-9.55L272.36,132l-1.56-1.93L268,128.36l-.23-.22c-5.91-2.1-11.7-5.39-17.76-6-9.08-.94-15.94-5.53-22.9-10.43-.72-.5-1.69-1.7-1.52-2.23,2.18-6.66-3.52-10.43-5.5-15.54-2.09-2.83-4.93-5.38-6.07-8.55-1.37-3.8-1.14-8.15-1.87-12.22-1.12-6.19-2.48-12.33-3.73-18.5-3.84-5.09-7.09-10.78-11.66-15.1-5.31-5-14.72-2.31-19.12,4.58s-2.93,12.56,5.06,16.46c3.07,1.5,6.85,1.75,10.35,2,.78.07,2.69-2.75,2.46-3.09a13.5,13.5,0,0,0-4.37-4c-1-.52-2.64.46-3.78.1s-1.92-1.54-2.86-2.36a17.2,17.2,0,0,1,2.9-1.26c6.56-1.54,9.77,1,11.23,7.74s4.76,13.1,6.46,19.82c1,4,1.16,8.56-5.76,4.73-3.13-1.73-7.34-2.26-11-2.09-5.32.24-7.63-2.92-9.25-6.8-4.43-10.62-7.94-21.68-13-32-3.91-8-8.59-16.18-14.77-22.46-3.63-3.69-11.2-5.89-16.42-5.07-7.36,1.15-11.37,7.72-11.93,15.67-.91,12.83,6.49,21.44,19,21.17,2.26,0,5.74-2.43,6.4-4.46,1.22-3.81-1.24-6.22-5.54-6.07-.43,0-.88-.4-1.32-.62a35.25,35.25,0,0,0-3.06,3.18,6.82,6.82,0,0,0-.6,2.35c-2.69-2.39-6.31-4.33-7.79-7.32-1.3-2.64-1.57-7.18,3.82-7.68.92-6.15,4.92-8.15,8.88-3.5C149,35.89,154,44.16,159.18,52.22c1.56,2.44,1.95,5.63,2.87,8.47l1.08,1.52c.17,1.53.34,3.07.52,4.59.58.09,1.6,0,1.68.28,1,3.14,1.49,6.48,2.8,9.47,1.76,4,1.47,5.94-3.53,5.54a38.47,38.47,0,0,0-8.91.2c-2.2.33-5.19,1-6.1,2.53-.75,1.27,1,4,1.69,6.14l1.37,1.47L154.1,94l2.59,2.39c6.35,5.07,6.3,19.9-.08,27.36q-.09,6.51-.16,13c-.11,1-.21,2.07-.31,3.11L155,141.18c-5.78-2.32-9.7-.12-9.31,5.28.11,1.45.39,2.88.59,4.33L146.14,161l-5.75,7.21-1.13.62-4,1.87-4.35.19-1.71-2c-.36-.95-.71-1.89-1.06-2.84-.46-.67-.91-1.35-1.37-2l-.42-3.25q-1.15-6.51-2.3-13l-.63-5.85c-.52-1.33-1-2.66-1.58-4-.12-1-.24-2-.37-3L119.2,121c-.18-1.65-.35-3.29-.52-4.93-.67-1-1.68-1.91-2-3-1.65-6.4-3.12-12.84-4.65-19.27-.26-1.28-.51-2.56-.76-3.84q-2.09-2.52-4.16-5.06l-.6-2.82c-.55-.65-1.09-1.32-1.64-2C98.44,73.85,92.3,67.22,85.32,61.63c-2.26-1.8-6.72-.85-10.18-1.15C75,64,73.67,67.84,74.78,70.85c3.09,8.45,7.38,16.46,10.77,24.82a92,92,0,0,1,3.84,13.67c.29,1.26-.39,2.75-.62,4.13a21.46,21.46,0,0,1-2.85-3c-3.74-5.93-6.33-13.06-11.3-17.62-5.8-5.32-13.53-8.63-20.68-12.29-1.41-.72-4.86.22-5.91,1.55-4,5.06-8.5,2.64-12.58,1.06-8.46-3.27-20,2.9-22.82,11.5C10.82,100.19,10,105.07,12.83,110.31ZM193.29,96.19c-1.62.94-3.22,2.61-4.88,2.67a53.56,53.56,0,0,1-13.34-.78c-2.58-.57-4.76-3-8-5.21,2.22-1.76,3.19-3.18,4.09-3.14a123.4,123.4,0,0,1,17.21,1.55C190.25,91.64,191.66,94.49,193.29,96.19Zm22.5,32.67c-.45,9.75-5.64,17.58-13.16,18a65.27,65.27,0,0,1-19-1.45c-9.81-2.35-16-8.94-16.24-15.33-.36-8,3.35-14.65,7.45-21,.75-1.18,2.95-1.68,4.58-2,7-1.37,13.63-.29,20.35,2.16C209.7,112.87,216.73,116.68,215.79,128.86Zm-152-30.7c.85-.26,2.24-.31,2.75.21,5,5.11,10.57,10,10.55,18.06l7.29,7.82L91,140c.8.51,2.14.88,2.31,1.54,1.21,4.77,5,3.22,7.39,2.4,1.68-.57,3-3.35,3.69-5.41s.51-4.54.7-6.82l-2.52-10q.89-4.12,1.78-8.24a21.42,21.42,0,0,1-3.8-15.66c.2-1.68-1.6-3.75-2.81-5.41-1.82-2.51-4-4.74-5.84-7.26-.64-.9-.58-2.3-.85-3.47,1.22.63,2.89.93,3.58,1.93,3.81,5.41,8,10.69,10.8,16.64,1.85,4,1.48,9,2.1,13.54q.92,5.63,1.84,11.26,2.21,6.84,4.42,13.66,0,8.64,0,17.28l4.62,10.14c1.35,5.66,3.88,10.37,9.85,12.4a5.81,5.81,0,0,1,1.93,1.49c2.31,2.27,4.88,4-.38,6.58-1.61.77-1.18,5.77-1.69,8.83l11.87-1.81c-.92-2.9-2-5.76-2.7-8.72-.28-1.19-.05-3.61.36-3.7,9.5-2.23,15-8.75,18.86-17.11.51-2.8.14-6.35,1.74-8.23,2.3-2.7,6.87-3.57,5.9-8.61,0-.17,1.86-1.17,2.33-.89,2.52,1.48,4.88,3.25,7.3,4.92l-.05-.05,10,3.06,4.4,2.12c6.36-.85,12.71-1.73,19.07-2.5.89-.11,2.43,0,2.69.56,2.26,4.5,6.65,8.31,4.91,14.18,4.52,9.26,9.79,18.25,13.22,27.89,1.6,4.5,1.2,11.12-1.09,15.23-3,5.44-4.68-2.63-7.85-2.59-5.32.06-10.74-1-15.93-.21s-8,.71-5.87-5.62c1.14-3.47-.3-5.64-4-6.49-8.2-1.89-6.5,4.53-7.5,8.73.93,4.74,2.16,9.45,2.63,14.24.17,1.66-1.1,4.52-2.45,5.07-3.57,1.49-7.53,2-11.34,2.92-1,.73-2,2-3,2.1-10.13.94-20.3,1.54-30.43,2.54s-19.07-3.82-28.47-6.26c-1.4-.36-2.47-2-3.7-3.08L97.06,212.39q-3.8-5.77-7.57-11.55c-.44-.49-1.11-.91-1.3-1.48-3.61-10.87-7.47-21.67-10.66-32.66-3-10.48-5.68-21.1-8-31.78-2.44-11.45-4.25-23-6.27-34.56C63.18,99.63,63.41,98.27,63.76,98.16Z'
            transform='translate(-11 -15.74)'
            fill='white'
          />
          <path
            ref={wing}
            d='M96.55,176.31l4.41,19,11.1,11.22.84.57-.76.31c.16.46.31.92.46,1.39,9.86,2.45,19.67,5.15,29.61,7.22,3.88.81,8.08.49,12.07.06,1.62-.18,3-2.25,4.61-3.1,4-2,7.89-4.87,12.13-5.6,10-1.7,10.77-9.62,12.18-16.81a73.11,73.11,0,0,0,.86-17.25c-.07-1.72-2.66-3.33-4.1-5-1.55,1.36-4.1,2.49-4.47,4.12-1.54,6.9-1.72,14.17-3.76,20.88-2.36,7.79-8.69,12.51-16.79,12-8.87-.6-17.55-3.55-26.42-4.46-11.7-1.2-16.18-10.57-21.86-18.37-1.56-2.14-.29-6.34-.33-9.59-.11-9.5-.12-9.5-8.43-6.38Z'
            transform='translate(-11 -15.74)'
            fill='white'
          />
          <path
            d='M151.09,196.59l10.46-12.73c-1.79-.81-4.37-2.81-5.24-2.23A54,54,0,0,0,146,190.55c-.64.73,1.2,3.68,1.9,5.61Z'
            transform='translate(-11 -15.74)'
            fill='white'
          />
          <path
            ref={eye}
            id='eye'
            d='M189.72,123c-.32,7,5,13,10.39,13,7.22,0,7.27-5.72,7.76-10.6.64-6.47-3.81-11-11.17-11C190.38,114.48,190.07,119.64,189.72,123Z'
            transform='translate(-11 -15.74)'
            fill='white'
          />
          {/* <path */}
          {/*   ref={blackEye} */}
          {/*   id='blackEye' */}
          {/*   d='M189.72,123c-.32,7,5,13,10.39,13,7.22,0,7.27-5.72,7.76-10.6.64-6.47-3.81-11-11.17-11C190.38,114.48,190.07,119.64,189.72,123Z' */}
          {/*   transform='translate(-11 -15.74)' */}
          {/*   fill='black' */}
          {/* /> */}
        </g>
        <path
          ref={rightLeg}
          id='leg-right'
          d='M122.91,237.73a22.62,22.62,0,0,1,4.37.9,40.37,40.37,0,0,0,6.26,1.17s0,0,0,0c-1.73,5.21-3.06,8.42-3.7,11.76-.18,1,1.66,2.37,2.59,3.58h0c1.31-2.85,3-5.59,3.73-8.58.35-1.41-1.09-3.27-2.49-6.76l1.56.22c2.13.32,4.21.86,6.32,1.32,1.08.24,2.18.4,3.27.6.65.12.59.17,1.24.27h0c-.74,1.62-.8,3.37-1.42,5-1.26,3.37-1.39,8-3.76,9.92-5.38,4.33-5.28,8.79-3.21,14.39,2.86,7.74,3.81,16.81,8.53,23.12,7.36,9.86,17,18.07,26.06,26.58,3.86,3.62,4.23,5.83-.64,7.74-3.51,1.38-3.58,2.87-1.27,5.38a8.14,8.14,0,0,1,2.11,3.29c.36,1.51.68,4.05-.07,4.56-1.28.87-4.08,1.32-5,.51-3-2.56-5.23-6.17-7.93-9.12a27.13,27.13,0,0,1-2.6-3.26,1.45,1.45,0,0,0-2.66.62,17.61,17.61,0,0,1-1.22,5.23c-1.15,2.49-3.52,4.41-5.36,6.58h0c-1.15-2.29-2.75-4.47-3.35-6.9-2.51-10.16-3.67-20.8-7.31-30.52-5-13.34-11-26.19-10.32-40.88a10.4,10.4,0,0,0-.41-2.92c-1.34-5.32-3.92-10.66-3.79-15.94.12-4.88-.65-5.5-1.07-8Z'
          transform='translate(-11 -15.74)'
          fill='white'
        />
        <path
          ref={leftLeg}
          id='leg-left'
          d='M167.66,266.45c-3.11-7.42-7.55-14.4-12.19-21a14.19,14.19,0,0,0-2.81-2.93h0a14.28,14.28,0,0,0,2.35-.23,28.13,28.13,0,0,0,3.26-.67,21.25,21.25,0,0,1,3.65-.41c1.14-.08,2.23-.27,3.35-.45h0c-.55.67-1.48,1.48-1.32,1.89,1.07,2.85,2.43,5.59,4.45,10,1.39-2.91,2.72-4.53,2.36-5.13a66.69,66.69,0,0,0-5.23-6.82,16.53,16.53,0,0,0,2.85-.5,7.46,7.46,0,0,1,1.8-.41c.55,0,1.1,0,1.64-.12,1.18-.18,2.3-.61,3.46-.84s2.33-.33,3.47-.65c.51-.14-.52.12,0,0-.16,1.2-.1,2.62-.24,4-.3,2.79,2.12,6.74.91,8.41-4.41,6.09-3.75,11.7-1,18,4.77,11,2.91,13.85,16.61,12.62,3.09-.28,6.23-.15,9.34-.16,4.39,0,6.86,4.14,4.73,7.9-2.93,5.17-6.82,4.74-11.87,3-3.32-1.15-7.38-.15-11.11-.12,2.33,2.3,4.53,4.76,7.06,6.81,1,.83,2.9.52,4.12,1.21s3.15,2,3.18,3.11c0,1.3-1.42,3.55-2.55,3.77-1.89.38-4.08-.35-6.06-.92-3.25-.92-6.21-1.59-7.77,2.59a38.88,38.88,0,0,1-2.51,4.72c-2-1.62-5.2-3-5.61-4.91-1.38-6.53-1.35-13.36-2.6-19.93C172,280.88,170.54,273.32,167.66,266.45Z'
          transform='translate(-11 -15.74)'
          fill='white'
        />
      </svg>
      {/* <TitPath ref={titPathRef} /> */}
    </>
  )
}

export default LittleTitmouse
