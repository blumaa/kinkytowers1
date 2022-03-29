import React from 'react'
import TheatreWrapper from './TheatreWrapper'
import MainCurtain from './MainCurtain'

const Theatre = ( ) => {
  return (
    <TheatreWrapper>
      <MainCurtain>
        <div className='Stage'>Welcome to the Show!</div>
      </MainCurtain>
    </TheatreWrapper>
  )
}

export default Theatre
