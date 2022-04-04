import React from 'react'
import Curtain from '../../assets/images/closed-curtains.gif'
import { motion } from 'framer-motion'

const MainCurtain = ({ isLoading, setIsLoading }) => {
  const [isCurtainOpen, setIsCurtainOpen] = React.useState(false)
  // console.log('curtain isLoading', isLoading )
  // console.log('curtain isCuurtainOpen', isCurtainOpen )
  // console.log('setIsLoading', setIsLoading)

  React.useEffect(()=>{
    if (isLoading) {
      setIsCurtainOpen(false)
    } else {
      setIsCurtainOpen(true)
    }
  }, [isLoading])


  return (
      <motion.img
        animate={{
          y: isCurtainOpen ? 'calc(100vh - 190%)' : 0,
        }}
        transition={{ ease: 'easeOut', duration: 2 }}
        onClick={() => setIsCurtainOpen(!isCurtainOpen)}
        className='Theatre__main-curtain'
        src={Curtain}
        alt='curtain'
        // onAnimationComplete={definition => {
          // console.log('Completed animating', definition)
          // isLoading && setIsLoading(!isLoading)
        // }}
      />
  )
}

export default MainCurtain
