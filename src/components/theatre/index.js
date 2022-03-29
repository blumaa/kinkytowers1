import React from 'react'
import CurtainLeft from '../../images/curtain-left.png'
import CurtainRight from '../../images/curtain-right.png'
import MainCurtain from './MainCurtain'

const Theatre = ({ children }) => {
  return (
    <div className='Theatre'>
      <div className='Theatre__stage'>
        <img className='Theatre__curtain-left'src={CurtainLeft} alt='fireSpot' />
        <MainCurtain />
        <div className="Theatre__show">
          {children}
        </div>
        <img className='Theatre__curtain-right'src={CurtainLeft} alt='fireSpot' />
      </div>
    </div>
  )
}

export default Theatre
