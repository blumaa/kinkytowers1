import React, { useRef, useState, useEffect, useCallback } from 'react'
import { useSpring, useAnimation, motion, useViewportScroll, useTransform, useAnimationFrame, useElementScroll } from 'framer-motion'
import { Link } from 'react-router-dom'
import ScrollWrapper from '../../components/shared/scroll/ScrollWrapper'
import Wrapper from '../../components/shared/scroll/Wrapper'
import { useInView } from "react-intersection-observer";
import Section from '../../components/shared/scroll/Section'
import { FloatingCircles, FloatingStars, FloatingSquares } from '../../components/shared/index'
import { Scene1 as AboutKinkyTowers } from '../AboutKinkyTowers/index'
import ACheekyTitmouseAndBeast from '../ACheekyTitmouseAndBeast/ACheekyTitmouseAndBeast'
import { HotCupOfTitTea } from '../HotCupOfTitTea/index'

const defaultSectionStyleBottom = {
  height: "100vh",
  width: "99vw",
  // textAlign: "center",
  // overflowX: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  // backgroundColor: "#2d1176",
  color: "#fff"
};


const sectionVariants = {
  visible: {
    opacity: 1,
    // scale: 1.1,
    y: 20,
  },
  initial: {
    opacity: 0,
    // scale: 1,
    y: 0
  },
};

const bottomSectionVariants = {
  visible: {
    opacity: 1,
    scale: 1.1,
    y: -2,
  },
  initial: { opacity: 0, scale: 1, y: 0 },
};


const Welcome = () => {
  const titleControls = useAnimation();
  const sectionControls = useAnimation();
  const bottomSectionControls = useAnimation();
  const boxRef = React.useRef()

  const { scrollY, scrollYProgress } = useViewportScroll();
  const pathLength = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);


  useAnimationFrame((t) => {
    const rotate = Math.sin(t / 10000) * 200;
    const y = (1 + Math.sin(t / 1000)) * -50;
    // ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  const [bottomRef, inViewBottom] = useInView({
    threshold: .1,
    rootMargin: "500px"
  })
  const [topRef, inViewTop] = useInView({
    threshold: 1,
    rootMargin: "5%"
  })
  const [titleRef, inViewTitle] = useInView({
    threshold: 1,
    // rootMargin: "500px 0px 500px 0px"
  })


  useEffect(() => {
    if (inViewTitle) {
      titleControls.start("visible");
    } else {
      titleControls.start("initial")
    }
  }, [titleControls, inViewTitle]);


  useEffect(() => {
    if (inViewTop) {
      sectionControls.start("visible");
    } else {
      sectionControls.stop()
    }
  }, [sectionControls, inViewTop]);

  useEffect(() => {
    if (inViewBottom) {
      bottomSectionControls.start("visible");
    } else {
      bottomSectionControls.stop()
    }
  }, [bottomSectionControls, inViewBottom]);


  return (
    <div
      className="Welcome"
    >
      {/* <FloatingSquares height="1vh" /> */}
      {/* <FloatingStars height="3vh" /> */}
      <FloatingCircles height="1vh" />
      <Section
        ref={topRef}
        // style={{ ...defaultSectionStyle }}
        variants={sectionVariants}
        animate={sectionControls}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      >
        {/* <ParallaxHorizontal offset={-100} leftToRight> */}
        <div className="Welcome__title">
          ⬇ Welcome to Kinky Towers ⬇
        </div>
        {/* </ParallaxHorizontal> */}
      </Section>
      <Section>
      {/* <FloatingCircles height="1vh" /> */}
        <AboutKinkyTowers />
      </Section>
      <Section>
        <ACheekyTitmouseAndBeast />
      </Section>
      <Section>
        <HotCupOfTitTea />
      </Section>
      <FloatingCircles />
      <Section
        ref={bottomRef}
        style={defaultSectionStyleBottom}
        variants={bottomSectionVariants}
        animate={bottomSectionControls}
        transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', originY: 0 }}
      >
        <Link onClick={() => setIsDrawerOpen(false)} to='/kinkytowers-1'>Care to see the Tower?</Link>
        {/* ⬆︎ Scroll up ⬆︎ */}
      </Section>
    </div>
  )

}

export default Welcome

