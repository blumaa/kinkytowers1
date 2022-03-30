import React from 'react'
import { Link } from 'react-router-dom'

const Drawer = ({ setIsDrawerOpen, setIsloading }) => {
  return(
    <div className="Drawer">
      <Link to='/'>Home</Link>
      <Link to='/kinkytower-1'>KinkyTower1</Link>
      <Link to='/kinkytower-2'>KinkyTower2</Link>
      <Link to='/titmouse-flight'>Titmouse Flight</Link>
      {/* <Link onClick={()=>setIsloading(true)} to='/kinkytowers-1'>Kinky Towers 1</Link> */}
      <Link to='/kinkytowers-1'>Kinky Towers 1</Link>
    </div>
  )
}
export default Drawer

