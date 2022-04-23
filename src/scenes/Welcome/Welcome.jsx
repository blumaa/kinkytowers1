import React, { useEffect } from 'react'
import {
  useSpring,
  useAnimation,
  motion,
  useViewportScroll,
  useTransform,
  useAnimationFrame,
  useElementScroll,
} from 'framer-motion'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import Section from '../../components/shared/scroll/Section'
import {
  FloatingCircles,
  FloatingStars,
  FloatingSquares,
} from '../../components/shared/index'
import { Scene1 as AboutKinkyTowers } from '../AboutKinkyTowers/index'
import ACheekyTitmouseAndBeast from '../ACheekyTitmouseAndBeast/ACheekyTitmouseAndBeast'
import { HotCupOfTitTea } from '../HotCupOfTitTea/index'

const defaultSectionStyleBottom = {
  height: '100vh',
  width: '99vw',
  // textAlign: "center",
  // overflowX: "hidden",
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  // backgroundColor: "#2d1176",
  color: '#fff',
}

const sectionVariants = {
  visible: {
    opacity: 1,
    // scale: 1.1,
    y: 20,
  },
  initial: {
    opacity: 0,
    // scale: 1,
    y: 0,
  },
}

const bottomSectionVariants = {
  visible: {
    opacity: 1,
    scale: 1.1,
    y: -2,
  },
  initial: { opacity: 0, scale: 1, y: 0 },
}

const Welcome = () => {
  const titleControls = useAnimation()
  const sectionControls = useAnimation()
  const bottomSectionControls = useAnimation()
  const boxRef = React.useRef()

  const { scrollY, scrollYProgress } = useViewportScroll()
  const pathLength = useSpring(scrollYProgress, { stiffness: 400, damping: 90 })
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100])

  useAnimationFrame((t) => {
    const rotate = Math.sin(t / 10000) * 200
    const y = (1 + Math.sin(t / 1000)) * -50
    // ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  })

  const [bottomRef, inViewBottom] = useInView({
    threshold: 0.1,
    rootMargin: '500px',
  })
  const [topRef, inViewTop] = useInView({
    threshold: 1,
    rootMargin: '5%',
  })
  const [titleRef, inViewTitle] = useInView({
    threshold: 1,
    // rootMargin: "500px 0px 500px 0px"
  })

  useEffect(() => {
    if (inViewTitle) {
      titleControls.start('visible')
    } else {
      titleControls.start('initial')
    }
  }, [titleControls, inViewTitle])

  useEffect(() => {
    if (inViewTop) {
      sectionControls.start('visible')
    } else {
      sectionControls.stop()
    }
  }, [sectionControls, inViewTop])

  useEffect(() => {
    if (inViewBottom) {
      bottomSectionControls.start('visible')
    } else {
      bottomSectionControls.stop()
    }
  }, [bottomSectionControls, inViewBottom])

  return (
    <div className='Welcome'>
      <FloatingCircles height='1vh' />
      <Section
        ref={topRef}
        variants={sectionVariants}
        animate={sectionControls}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
      >
        <div className='Welcome__title'>⬇ Welcome to Kinky Towers ⬇</div>
      </Section>
      <Section>
        <AboutKinkyTowers />
      </Section>
      <Section>
        <ACheekyTitmouseAndBeast />
      </Section>
      <FloatingCircles />
      {/* <Section> */}
      {/*   <HotCupOfTitTea /> */}
      {/* </Section> */}
      <Section
        ref={bottomRef}
        style={defaultSectionStyleBottom}
        // variants={bottomSectionVariants}
        // animate={bottomSectionControls}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: 'reverse',
          originY: 0,
        }}
      >
        <Link onClick={() => setIsDrawerOpen(false)} to='/kinkytowers-1' style={{ color: "white"}}>
          Care to see the Tower?
        </Link>
      </Section>
    </div>
  )
}

export default Welcome
