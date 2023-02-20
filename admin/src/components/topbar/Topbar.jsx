import React from 'react'
import './topbar.css';
import { NotificationsNone, Language, Settings } from '@mui/icons-material';
function Topbar() {
  return (
    <div className='topbar'>
          <div className='topbarWrapper'>
              <div className="topLeft">
                  <span className='logo'>ParkAdmin</span>
              </div>
              <div className="topRight">
                  <div className="topbarIconContainer">
                      <NotificationsNone />
                      <span className="topIconBadge">2</span>
                  </div>
                  <div className="topbarIconContainer">
                      <Language />
                      <span className="topIconBadge">2</span>
                  </div>
                  <div className="topbarIconContainer">
                      <Settings />
                  </div>
                  <img src="https://avatars.githubusercontent.com/u/51373053?s=400&u=bf5f7235e0319899e967ae27eee166fd80ee2044&v=4" alt="" className="topAvatar" />
              </div>
        </div>      
    </div>
  )
}

export default Topbar