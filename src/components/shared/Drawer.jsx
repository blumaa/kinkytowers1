import React from 'react'
import { Link } from 'react-router-dom'

const Drawer = ({ setIsDrawerOpen }) => {
  return(
    <div className="Drawer">
      <Link to='/'>Home</Link>
      <Link to='/kinkytower-1'>KinkyTower1</Link>
      <Link to='/kinkytower-2'>KinkyTower2</Link>
      <Link to='/titmouse-flight'>Titmouse Flight</Link>
    </div>
  )
}
export default Drawer

