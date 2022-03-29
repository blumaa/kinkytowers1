
import React from 'react'
import Burger from './Burger'

const Header = ( { isDrawerOpen, setIsDrawerOpen}) => {
  return (
    <div className="Layout__header">
        <Burger isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
        {/* <div className='Layout__header-title'>Kinky Towers Theatre</div> */}
    </div>
  )
}

export default Header 
