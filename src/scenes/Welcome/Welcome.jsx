import React, { useRef, useState, useEffect, useCallback } from 'react'
import { useSpring, useAnimation, motion, useViewportScroll, useTransform, useAnimationFrame, useElementScroll } from 'framer-motion'
import { Icon1, Icon2, Icon3 } from '../../assets/images/monster-character-svgs2/index'
import ScrollWrapper from '../../components/shared/scroll/ScrollWrapper'
import Wrapper from '../../components/shared/scroll/Wrapper'
import { useInView } from "react-intersection-observer";
import LittleBeast from '../../assets/stylesheets/animations/LittleBeast'
import LittleTitmouse from '../../assets/stylesheets/animations/LittleTitmouse'
import Section from '../../components/shared/scroll/Section'
import Parallax from './Parallax'
import FloatingCircles from './FloatingCircles'
import FloatingSquares from './FloatingSquares'

const durationNum = 1

const defaultSectionStyle = {
  height: "101vh",
  // textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  // border: "1px solid red",
  // backgroundColor: "#2d1176",
  // overflow: "auto",
  color: "#fff"
};

const defaultSectionStyleBottom = {
  height: "100vh",
  width: "99vw",
  // textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#2d1176",
  color: "#fff"
};

const beastVariants = {
  visible: { opacity: 1, x: 0, transition: { duration: durationNum } },
  initial: { opacity: 0, x: 400, transition: { duration: durationNum } },
  // exit: { opacity: 0, x: -400, transition: { duration: durationNum } }
};

const titVariants = {
  visible: { opacity: 1, x: 0, transition: { duration: durationNum } },
  initial: { opacity: 0, x: -400, transition: { duration: durationNum } },
  exit: { opacity: 0, x: 400, transition: { duration: durationNum } }
};

const sectionVariants = {
  visible: {
    opacity: 1,
    scale: 1.1,
    y: 20,
  },
  initial: {
    opacity: 0,
    scale: 1,
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

const titleVariants = {
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: durationNum } },
  initial: { opacity: 0, scale: 1, y: 100, transition: { duration: durationNum } },
  // exit: { opacity: 0, scale: 10000, transition: { duration: durationNum } }
};


const Welcome = () => {
  const beastControls = useAnimation();
  const titControls = useAnimation();
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
  const [beastRef, inViewBeast] = useInView({
    threshold: 1,
    // rootMargin: "500px 0px 500px 0px",
  })
  const [titRef, inView2] = useInView({
    threshold: 1,
    // rootMargin: "500px 0px 500px 0px"
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
    if (inView2) {
      titControls.start("visible");
    } else {
      titControls.start("initial")
    }
  }, [titControls, inView2]);

  useEffect(() => {
    if (inViewBeast) {
      beastControls.start("visible");
    } else {
      beastControls.start("initial")
    }
  }, [beastControls, inViewBeast]);

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



  return <div className='Welcome'>
    {/* <ScrollWrapper inView={inViewBeast}> */}
    {/* <Wrapper > */}
    {/* <FloatingCircles /> */}
    <FloatingSquares />
    <Section
      ref={topRef}
      // style={defaultSectionStyle}
      style={{ ...defaultSectionStyle }}
      variants={sectionVariants}
      animate={sectionControls}
      transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
    >
      ⬇ Welcome to Kinky Towers ⬇
    </Section>
    <Section
      // ref={titleRef}
      // style={{ height: "10rem", border: "1px solid red" }}
      style={{ ...defaultSectionStyle }}
    // variants={titleVariants}
    // animate={titleControls}
    >
      <Parallax offset={200}>
        If you scroll down, watch out for animals
      </Parallax>
    </Section>
    {/* <Section */}
    {/*   ref={titleRef} */}
    {/*   // style={{ height: "10rem", border: "1px solid red" }} */}
    {/*   style={{ ...defaultSectionStyle, height: "10rem" }} */}
    {/*   variants={titleVariants} */}
    {/*   animate={titleControls}> */}
    {/*   If you scroll down, watch out for animals */}
    {/* </Section> */}
    {/* <section style={{ height: '50vh' }}> */}
    <FloatingCircles height="50vh" />
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
      <Parallax offset={50} zIndex={100}>
        <motion.div
          ref={titRef}
          animate={titControls}
          initial="initial"
          variants={titVariants}
          style={{ height: "15vh" }}
        >
          <LittleTitmouse />
        </motion.div>
      </Parallax>
      <Parallax offset={100}>
        <motion.div
          ref={beastRef}
          animate={beastControls}
          initial="initial"
          variants={beastVariants}
          style={{ height: "25vh" }}
        >
          <LittleBeast />
        </motion.div>
      </Parallax>
    </div>
    {/* </section> */}
    {/* <div style={{ height: "101vh" }}> */}
    {/* <div style={{ width: "25px", height: "25px", backgroundColor: "blue" }} /> */}
    {/* <Parallax offset={100}> */}
    {/*   ⬇ Welcome to Kinky Towers ⬇ */}
    {/* </Parallax> */}
    {/* <div style={{ width: "25px", height: "25px", backgroundColor: "white" }} /> */}
    {/* </Section1> */}
    {/* </div> */}
    <Section
      ref={bottomRef}
      style={defaultSectionStyleBottom}
      variants={bottomSectionVariants}
      animate={bottomSectionControls}
      transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', originY: 0 }}
    >
      ⬆︎ Scroll up ⬆︎
    </Section>
    {/* </Wrapper> */}
    {/* </ScrollWrapper> */}
  </div>
}

export default Welcome
