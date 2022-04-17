import React, { useEffect } from 'react'
import Section from '../../components/shared/scroll/Section'
import Parallax from '../../components/shared/scroll/Parallax'
import { FloatingSquares } from '../../components/shared/index'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer";
import LittleBeast from '../../assets/stylesheets/animations/LittleBeast'
import LittleTitmouse from '../../assets/stylesheets/animations/LittleTitmouse'
import Status from '../../components/shared/scroll/Status'
// import Grass from '../../assets/images/grass.svg'
import Grass from './GrassShape'
const durationNum = 1

const defaultSectionStyle = {
  height: "101vh",
  width: "95vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  // border: "1px solid red",
  // backgroundColor: "#2d1176",
  // overflow: "auto",
  color: "#fff"
};

const beastVariants = {
  visible: { opacity: 1, x: 0, transition: { duration: durationNum } },
  initial: { opacity: 0, x: 200, transition: { duration: durationNum } },
  // exit: { opacity: 0, x: -400, transition: { duration: durationNum } }
};

const titVariants = {
  visible: { opacity: 1, x: 0, transition: { duration: durationNum } },
  initial: { opacity: 0, x: -400, transition: { duration: durationNum } },
  exit: { opacity: 0, x: 400, transition: { duration: durationNum } }
};

const ACheekyTitmouseAndBeast = () => {
  const titControls = useAnimation();
  const beastControls = useAnimation();

  const [beastRef, inViewBeast] = useInView({
    threshold: .1,
    rootMargin: "-400px 0px -400px 0px",
  })

  const [titRef, inViewTit] = useInView({
    threshold: 1,
    // rootMargin: "500px 0px 500px 0px"
  })

  useEffect(() => {
    if (inViewTit) {
      titControls.start("visible");
    } else {
      titControls.start("initial")
    }
  }, [titControls, inViewTit]);

  useEffect(() => {
    if (inViewBeast) {
      beastControls.start("visible");
    } else {
      beastControls.start("initial")
    }
  }, [beastControls, inViewBeast]);

  return (
    <div className="ACheekyTitmouseAndBeast">
      <Status inView={inViewTit} />
      <Parallax offset={200} diagonal>
        <div className="Welcome__subtitle-1">
          Look! A cheeky little Titmouse! And a ravenous Beast!
        </div>
      </Parallax>
      <FloatingSquares height="1vh" />
      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: "center",
        // border: "1px solid yellow"
      }}>
        <Parallax offset={200} zIndex={100}>
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
        <Parallax offset={225}>
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
      <div className="Grass">
        <Grass />
      </div>
    </div>
  )
}
export default ACheekyTitmouseAndBeast
