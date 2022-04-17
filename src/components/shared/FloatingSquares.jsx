import React from 'react'
import FlashingSquare from './shapes/FlashingSquare'
import { squareArray } from './shapes/ShapeArrays'

const FloatingSquares = ({ height="5vh"}) => {
  return (
    <div style={{ height: height, width: "95vw", display: "flex", flexDirection: "row", justifyContent: "space-evenly", overflow: "visibile"  }} >
      {squareArray.map(square => <FlashingSquare key={square.id} offset={square.offset} fill={square.fill} flashDuration={square.flashDuration} />)}
    </div>
  )
}

export default FloatingSquares 
