import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './App.scss'
// import TitmouseBeastKiss from "./images/TitmouseBeastKiss";
import KinkyTowers1 from './routes/KinkyTowers1'
import rightBackground from './images/right.jpeg'
import Drawer from './components/Drawer'

function App() {
  const [ isLoading, setIsloading ] = React.useState(false)
  const [ openDrawer, setOpenDrawer ] = React.useState(false)
  return (
    <div className='Gallery'>
      <div className='MainFeature'>
        <div className='PanelLeft'>
          <Outlet />
        </div>
        <div className='PanelRight'>
          <img src={rightBackground} className='PanelRight__Bg' />
          <div className='PanelRight__MoonTop'>
            <div className='PanelRight__MoonTop--wrapper'>
            {!openDrawer ? <button type="button" onClick={()=>setOpenDrawer(true)}>menu</button> : <Drawer /> } 
              {/* <Link to='/'>Home</Link> */}
              {/* <Link to='/kinkytower-1'>KinkyTower1</Link> | */}
              {/* <Link to='/kinkytower-2'>KinkyTower2</Link> */}
              {/* <Link to='/titmouse-flight'>Titmouse Flight</Link> */}
            </div>
          </div>
          <div className='PanelRight__Tower'>
            <div className='PanelRight__Tower--wrapper'>
              <KinkyTowers1 />
            </div>
          </div>
        </div>
      </div>
      <div className='Footer'>
        <span>
          For more info contact{' '}
          <a href='mailto:desmond.blume@gmail.com'>desmond.blume@gmail.com</a>
        </span>
      </div>
    </div>
  )
}

export default App
