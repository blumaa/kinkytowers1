import React from 'react'
import CurtainLeft from '../../images/curtain-left.png'
import CurtainRight from '../../images/curtain-right.png'
import MainCurtain from './MainCurtain'

const TheatreWrapper = ({ children }) => {
  return (
    <div className='Theatre'>
      <div className='Theatre__curtain-left'>
        <img src={CurtainLeft} alt='fireSpot' />
      </div>
          <div className='Stage'>
              <MainCurtain />
              {children}
          </div>
      <div className='Theatre__curtain-right'>
        <img src={CurtainRight} alt='fireSpot' />
      </div>
    </div>
  )
}

export default TheatreWrapper
