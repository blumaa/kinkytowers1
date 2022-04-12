import React, { useRef, useState, useEffect, useCallback } from 'react'
import { useSpring, useAnimation, motion, useViewportScroll, useTransform, useAnimationFrame, useElementScroll } from 'framer-motion'
import { Icon1, Icon2, Icon3 } from '../../assets/images/monster-character-svgs2/index'
import ScrollWrapper from '../../components/shared/scroll/ScrollWrapper'
import Wrapper from '../../components/shared/scroll/Wrapper'
import { useInView } from "react-intersection-observer";
import LittleBeast from '../../assets/stylesheets/animations/LittleBeast'
import LittleTitmouse from '../../assets/stylesheets/animations/LittleTitmouse'
import Section from '../../components/shared/scroll/Section'

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
  color: "#fff"
};

const defaultSectionStyleBottom = {
  height: "101vh",
  // textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-end",
  // backgroundColor: "#2d1176",
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
    y: 2,
  },
  initial: { opacity: 1, scale: 1, y: 0 },
};

const bottomSectionVariants = {
  visible: {
    opacity: 1,
    scale: 1.1,
    y: -2,
  },
  initial: { opacity: 1, scale: 1, y: 0 },
};

const titleVariants = {
  visible: { opacity: 1, scale: 3, y: 0, transition: { duration: durationNum } },
  initial: { opacity: 0, scale: 0, y: -20, transition: { duration: durationNum } },
  exit: { opacity: 0, scale: 10000, transition: { duration: durationNum } }
};


const Welcome = () => {
  const wrapperControls = useAnimation();
  const beastControls = useAnimation();
  const titControls = useAnimation();
  const titleControls = useAnimation();
  const sectionControls = useAnimation();
  const bottomSectionControls = useAnimation();
  const boxRef = React.useRef()

  const { scrollY, scrollYProgress } = useViewportScroll();
  const pathLength = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);
  console.log('yRange', yRange)
  // const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  // const y2 = useTransform(scrollY, [0, 300], [0, -100]);


  useAnimationFrame((t) => {
    const rotate = Math.sin(t / 10000) * 200;
    const y = (1 + Math.sin(t / 1000)) * -50;
    // ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  const [wrapperRef, inViewWrapper] = useInView({
    threshold: 1,
    rootMargin: "5%"
  })
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
    rootMargin: "500px 0px 500px 0px",
  })
  const [titRef, inView2] = useInView({
    threshold: 1,
    rootMargin: "500px 0px 500px 0px"
  })
  const [titleRef, inViewTitle] = useInView({
    threshold: 1,
    rootMargin: "500px 0px 500px 0px"
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
    <ScrollWrapper inView={inViewBottom}>
      <Wrapper ref={wrapperRef}>
        <Section
          ref={topRef}
          style={defaultSectionStyle}
          variants={sectionVariants}
          animate={sectionControls}
          transition={{ duration: .3, repeat: Infinity, repeatType: "reverse" }}>
          ⬇ Scroll down! ⬇
        </Section>
        <Section
          ref={titleRef}
          // style={{ height: "10rem", border: "1px solid red" }}
          style={{ ...defaultSectionStyle, height: "10rem" }}
          variants={titleVariants}
          animate={titleControls}>
          Welcome to Kinky Towers!
        </Section>
        <section style={{ height: '50vh' }}>
          <div style={{ display: "flex", justifyContent: 'flex-start', alignItems: "center" }}>
            <motion.div
              ref={titRef}
              animate={titControls}
              initial="initial"
              variants={titVariants}
              style={{ height: "15vh" }}
            >
              <LittleTitmouse />
            </motion.div>
            <motion.div
              ref={beastRef}
              animate={beastControls}
              initial="initial"
              variants={beastVariants}
              style={{ height: "25vh" }}
            >
              <LittleBeast />
            </motion.div>
          </div>
        </section>
        {/* <section style={{ ...defaultSectionStyle, border: '1px solid blue' }}> */}
          {/* {console.log('y1', scrollYProgress)} */}
          {/*   <motion.div className="box" style={{ scaleX: scrollYProgress}} ref={boxRef} > */}
          {/* hello</motion.div> */}
          {/* <motion.div className="box" style={{ y: yRange, x: -50 }} ref={boxRef} /> */}
          {/* <motion.div */}
          {/*   className="box" */}
          {/*   style={{ y: y2, x: 50, background: 'salmon' }} */}
          {/* /> */}
        {/* </section> */}
        <Section
          ref={bottomRef}
          style={defaultSectionStyleBottom}
          variants={bottomSectionVariants}
          animate={bottomSectionControls}
          transition={{ duration: .5, repeat: Infinity, repeatType: 'reverse', originY: 0 }}
        >
          ⬆︎ Scroll up ⬆︎
        </Section>
      </Wrapper>
    </ScrollWrapper>
  </div>
}

export default Welcome
