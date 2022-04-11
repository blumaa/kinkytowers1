import React, { useRef, useState, useEffect, useCallback } from 'react'
import { useAnimation, motion } from 'framer-motion'
import { Icon1, Icon2, Icon3 } from '../../assets/images/monster-character-svgs2/index'
import ScrollWrapper from '../../components/shared/scroll/ScrollWrapper'
import Wrapper from '../../components/shared/scroll/Wrapper'
import { useInView } from "react-intersection-observer";
import LittleBeast from '../../assets/stylesheets/animations/LittleBeast'
import LittleTitmouse from '../../assets/stylesheets/animations/LittleTitmouse'

const variants = {
  visible: { opacity: 1, x: 0, transition: { duration: 3 } },
  initial: { opacity: 0, x: 400, transition: { duration: 3 } },
  exit: { opacity: 0, x: -400, transition: { duration: 3 } }
};
const titVariants = {
  visible: { opacity: 1, x: 0, transition: { duration: 3 } },
  initial: { opacity: 0, x: -400, transition: { duration: 3 } },
  exit: { opacity: 0, x: 400, transition: { duration: 3 } }
};
const titleVariants = {
  visible: { opacity: 1, scale: 3, transition: { duration: 3 } },
  initial: { opacity: 0, scale: 0, transition: { duration: 3 } },
  exit: { opacity: 0, scale: 10000, transition: { duration: 3 } }
};
const Welcome = () => {
  const controls = useAnimation();
  const titControls = useAnimation();
  const titleControls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 1,
    rootMargin: "5%"
  })
  const [titRef, inView2] = useInView({
    threshold: 1,
    rootMargin: "5%"
  })
  const [titleRef, inViewTitle] = useInView({
    threshold: 1,
    rootMargin: "5%"
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
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("initial")
    }
  }, [controls, inView]);

  return <div className='Welcome'>
    <ScrollWrapper inView={inViewTitle}>
      <Wrapper ref={ref}>
          <motion.div
            ref={titleRef}
            animate={titleControls}
            initial="initial"
            variants={titleVariants}
            style={{ height: "5vh", width: "15vw", color: "white"  }}
          >
          Welcome to Kinky Towers!
          </motion.div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: "flex-end" }}>
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
            ref={ref}
            animate={controls}
            initial="initial"
            variants={variants}
            style={{ height: "25vh"  }}
          >
            <LittleBeast />
          </motion.div>
        </div>
      </Wrapper>
    </ScrollWrapper>

    {/* Outside the show */}
    {/* <div className="Welcome__inside" > */}
    {/*   <div className="Welcome__inside-top" */}
    {/*   > */}
    {/*     <motion.div className="Welcome__inside-top-1" */}
    {/*       ref={ref} */}
    {/*       variants={variants} */}
    {/*       animate={controls} */}
    {/*       initial="hidden" */}
    {/*     > */}
    {/*       <Icon2 /> */}
    {/*     </motion.div> */}
    {/*   </div> */}
    {/*   <div className="Welcome__inside-middle" */}
    {/*   > */}
    {/*     <motion.div className="Welcome__inside-middle-1" */}
    {/*       variants={variants} */}
    {/*       animate={{ scale: 2 }} */}
    {/*       initial="hidden" */}
    {/*     > */}
    {/*       <Icon1 /> */}
    {/*     </motion.div> */}
    {/*   </div> */}
    {/*   <div className="Welcome__inside-bottom" */}
    {/*   > */}
    {/*     <motion.div className="Welcome__inside-bottom-1" */}
    {/*       variants={variants} */}
    {/*       animate={{ scale: 2 }} */}
    {/*       initial="hidden" */}
    {/*     > */}
    {/*       <Icon3 /> */}
    {/*     </motion.div> */}
    {/*   </div> */}
    {/* </div> */}
  </div>
}

export default Welcome
