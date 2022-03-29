import React from 'react'
import Curtain from '../../images/closed-curtains.gif'
import { motion } from 'framer-motion'

const MainCurtain = ( {children} ) => {
  const [ isCurtainOpen, setIsCurtainOpen ] = React.useState(false)
  return (
    <div className='MainCurtainWrapper'>
      <motion.img 
        animate={{
          y: isCurtainOpen ? -900 : 0
        }}
        transition={{ ease: "easeOut", duration: 5}}
        onClick={()=>setIsCurtainOpen(!isCurtainOpen)} className="MainCurtain" src={Curtain} alt="curtain" />
      {children}
   </div>
  )
}

export default MainCurtain 
