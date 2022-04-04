import React from 'react'
import { Link } from 'react-router-dom'

const Drawer = ({ setIsDrawerOpen, setIsloading }) => {
  return(
    <div className="Drawer">
      <Link to='/'>Home</Link>
      {/* <Link to='/kinkytower-1'>KinkyTower1</Link> */}
      <Link to='/kinkytower-2'>Big Titmouse</Link>
      <Link to='/titmouse-flight'>Titmouse Flight</Link>
      <Link to='/kinkytowers-1'>Bubbling Tower</Link>
      <Link to='/evil-beast'>Evil Beast and Titmouse</Link>
      <Link to='/monsters'>Monsters</Link>
    </div>
  )
}
export default Drawer

