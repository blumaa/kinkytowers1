import React from 'react'
import Parallax from '../components/shared/scroll/Parallax'
import FloatingStars from '../components/shared/FloatingStars'
import Star from '../components/shared/shapes/Star'
// import Scene1 from '../scenes/FloatingIntro/Scene1'
import Scene1 from '../scenes/AboutKinkyTowers/Scene1'
import ACheekyTitmouseAndBeast from '../scenes/ACheekyTitmouseAndBeast/ACheekyTitmouseAndBeast'
import Section from '../components/shared/scroll/Section'
import Dial from './testSite/Dial'

const TestSite = () => {
  return (
    <div className="TestSite" style={{
      height: "100vh",
      // border: "1px solid yellow",
      overflowY: "auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Section>
        <Dial />
      </Section>
      {/* <Section > */}
        {/* <ACheekyTitmouseAndBeast /> */}
      {/* </Section> */}
      {/* <Star /> */}
      {/* <Left /> */}
      {/* <Scene1 /> */}
      {/* <FloatingStars height="1vh"/> */}
      {/* <Parallax offset={100} diagonal> */}
      {/*   <div style={{ width: "25px", height: "25px", backgroundColor: "blue" }} /> */}
      {/* </Parallax> */}
      {/* <div style={{ width: "25px", height: "25px", backgroundColor: "red" }} /> */}
    </div>
  )
}

export default TestSite 
