import React from 'react'
import FlashingCircle from './shapes/FlashingCircle'
import { circleArray } from './shapes/ShapeArrays'

const FloatingCircles = ({ height="50vh"}) => {
  return (
    <div style={{ height: height, width: "95vw", display: "flex", flexDirection: "row", justifyContent: "space-evenly"  }} >
      {circleArray.map(circ => <FlashingCircle key={circ.id} offset={circ.offset} fill={circ.fill} flashDuration={circ.flashDuration} />)}
    </div>
  )
}

export default FloatingCircles
