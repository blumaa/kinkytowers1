import React from 'react'
import Parallax from './Parallax'

const Section1 = () => {
  return (
    <div style={{ height: "200vh" }} >
      <Parallax offset={100}>
        ⬇ Welcome to Kinky Towers ⬇
      </Parallax>
      <Parallax offset={300}>
        <div style={{ width: "25px", height: "25px", backgroundColor: "red" }} />
      </Parallax>
    </div>
  )
}

export default Section1
