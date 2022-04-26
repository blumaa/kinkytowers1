import React from 'react'
import { motion } from 'framer-motion'
import HotCupOfTitTea from './HotCupOfTitTea'

const TitTeaStage = () => {
  return (
    <div
      className='TitTeaStage'
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // border: '1px solid yellow',
      }}
    >
      <HotCupOfTitTea />
    </div>
  )
}

export default TitTeaStage
