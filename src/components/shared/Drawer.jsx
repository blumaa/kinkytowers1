import React from 'react'
import { Link } from 'react-router-dom'

const Drawer = ({ setIsDrawerOpen, setIsloading }) => {
  return(
    <div className="Drawer">
      <Link onClick={()=>setIsDrawerOpen(false)} to='/'>Home</Link>
      {/* <Link to='/kinkytower-1'>KinkyTower1</Link> */}
      {/* <Link onClick={()=>setIsDrawerOpen(false)} to='/parallax'>Section1</Link> */}
      <Link onClick={()=>setIsDrawerOpen(false)} to='/test-site'>test site</Link>
      <Link onClick={()=>setIsDrawerOpen(false)} to='/television'>Television</Link>
      <Link onClick={()=>setIsDrawerOpen(false)} to='/kinkytower-2'>Big Titmouse</Link>
      <Link onClick={()=>setIsDrawerOpen(false)} to='/titmouse-flight'>Titmouse Flight</Link>
      <Link onClick={()=>setIsDrawerOpen(false)} to='/kinkytowers-1'>Bubbling Tower</Link>
      <Link onClick={()=>setIsDrawerOpen(false)} to='/evil-beast'>Evil Beast and Titmouse</Link>
      <Link onClick={()=>setIsDrawerOpen(false)} to='/monsters'>Monsters</Link>
      <Link onClick={()=>setIsDrawerOpen(false)} to='/hot-cup-of-tit-tea'>Hot Cup Of Tit Tea</Link>
    </div>
  )
}
export default Drawer

