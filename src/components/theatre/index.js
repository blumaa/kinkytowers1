import React from 'react'
import CurtainLeft from '../../assets/images/curtain-left.png'
import CurtainRight from '../../assets/images/curtain-right.png'
import MainCurtain from './MainCurtain'

const Theatre = ({ children, isLoading, setIsLoading }) => {
  // console.log('theatre isLoading', isLoading)
  return (
    <div className='Theatre'>
      <div className='Theatre__stage'>
        <img className='Theatre__curtain-left'src={CurtainLeft} alt='fireSpot' />
        <MainCurtain isLoading={isLoading} setIsLoading={setIsLoading} />
        <div className="Theatre__show">
          {children}
        </div>
        <img className='Theatre__curtain-right'src={CurtainLeft} alt='fireSpot' />
      </div>
    </div>
  )
}

export default Theatre
