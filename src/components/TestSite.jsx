import React from 'react'
import Parallax from '../components/shared/scroll/Parallax'
import FloatingStars from '../components/shared/FloatingStars'
import Star from '../components/shared/shapes/Star'
// import Scene1 from '../scenes/FloatingIntro/Scene1'
import { Scene1 as AboutKinkyTowers } from '../scenes/AboutKinkyTowers/index'
import ACheekyTitmouseAndBeast from '../scenes/ACheekyTitmouseAndBeast/ACheekyTitmouseAndBeast'
import Section from '../components/shared/scroll/Section'
import Dial from './testSite/Dial'
import BeaverMoonLoader from '../components/shared/spinners/BeaverMoonLoader'

const TestSite = () => {
  return (
    <div className="TestSite" style={{
      height: "100vh",
      // border: "1px solid yellow",
      // overflowY: "auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <BeaverMoonLoader />
      {/* <Section> */}
        {/* <ACheekyTitmouseAndBeast /> */}
        {/* <Dial /> */}
        {/* <AboutKinkyTowers /> */}
      {/* </Section> */}
      {/* <Section > */}
      {/* </Section> */}
      {/* <Star /> */}
      {/* <Left /> */}
      {/* <FloatingStars height="1vh"/> */}
      {/* <Parallax offset={100} diagonal> */}
      {/*   <div style={{ width: "25px", height: "25px", backgroundColor: "blue" }} /> */}
      {/* </Parallax> */}
      {/* <div style={{ width: "25px", height: "25px", backgroundColor: "red" }} /> */}
    </div>
  )
}

export default TestSite 
