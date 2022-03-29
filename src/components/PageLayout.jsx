import React from 'react'
import Drawer from './shared/Drawer'
import { motion, AnimatePresence } from 'framer-motion'
import Footer from './shared/Footer'
import Header from './shared/Header'

const PageLayout = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)
  return (
    <div className='Layout'>
      <Header isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <AnimatePresence exitBeforeEnter>
        {isDrawerOpen && (
          <motion.div
            className='DrawerWrapper'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
          >
            <Drawer setIsDrawerOpen={setIsDrawerOpen} />
          </motion.div>
        )}
      </AnimatePresence>
      {children}
      {/* <Footer /> */}
    </div>
  )
}

export default PageLayout
