import React from 'react'
import FlashingStar from './shapes/FlashingStar'
import { starArray } from './shapes/ShapeArrays'


const FloatingStars = ({ height="5vh"}) => {
  return (
    <div style={{ height: height, width: "95vw", display: "flex", flexDirection: "row", justifyContent: "space-evenly", overflow: "visibile"  }} >
      {starArray.map(square => <FlashingStar key={square.id} offset={square.offset} fill={square.fill} flashDuration={square.flashDuration} />)}
    </div>
  )
}

export default FloatingStars 
