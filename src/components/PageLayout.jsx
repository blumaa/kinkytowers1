import React from 'react'
import Drawer from './shared/Drawer'
import { motion, AnimatePresence } from 'framer-motion'

const PageLayout = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)
  return (
    <div className="Layout">
      <div className="HeaderWrapper">
        {!isDrawerOpen ? (
          <button onClick={() => setIsDrawerOpen(true)}>open menu</button>
        ) : (
          <button onClick={() => setIsDrawerOpen(false)}>close menu</button>
      )}
      <header>My header</header>
      </div>
      <AnimatePresence exitBeforeEnter>
        {isDrawerOpen && (
          <motion.div
            className='Drawer'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
          >
            <Drawer setIsDrawerOpen={setIsDrawerOpen} />
          </motion.div>
        )}
      </AnimatePresence>
      {children}
      <header>My footer</header>
    </div>
  )
}

export default PageLayout
