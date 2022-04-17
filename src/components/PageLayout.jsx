import React from 'react'
import Drawer from './shared/Drawer'
import { motion, AnimatePresence } from 'framer-motion'
import Footer from './shared/Footer'
import Header from './shared/Header'
import Burger from './shared/Burger'

const PageLayout = ({ children, setIsLoading }) => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)
  return (
    <div className='Layout'>
      <Burger isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      {/* <Header isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} /> */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            className='DrawerWrapper'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
          >
            <Drawer setIsDrawerOpen={setIsDrawerOpen} setIsLoading={setIsLoading} />
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div 
      animate={{ opacity: isDrawerOpen ? .2 : 1}} 
        // style={{ overflowY: "auto"}}
      >
        {children}
      </motion.div>
      {/* <Footer /> */}
    </div>
  )
}

export default PageLayout
