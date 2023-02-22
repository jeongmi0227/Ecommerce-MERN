import { Visibility } from '@mui/icons-material'
import React from 'react'
import './widgetSm.css'

function WidgetSm() {
  return (
    <div className='widgetSm'>
        <span className="widgetSmTitle">New Join Members</span> 
          <ul className="widgetSmList">
              <li className="widgetSmListItem">
                  <img src="https://avatars.githubusercontent.com/u/51373053?s=400&u=bf5f7235e0319899e967ae27eee166fd80ee2044&v=4" alt="" className="widgetSmImg" />
                  <div className="widgetSmUser">
                      <span className="widgetSmUsername">Jeongmi Park</span>
                      <span className="widgetSmUserTitle">Software Engineer</span>
                  </div>
                  <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon'/>
                      Display
                  </button>
              </li>
              <li className="widgetSmListItem">
                  <img src="https://avatars.githubusercontent.com/u/51373053?s=400&u=bf5f7235e0319899e967ae27eee166fd80ee2044&v=4" alt="" className="widgetSmImg" />
                  <div className="widgetSmUser">
                      <span className="widgetSmUsername">Jeongmi Park</span>
                      <span className="widgetSmUserTitle">Software Engineer</span>
                  </div>
                  <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon'/>
                      Display
                  </button>
              </li>
              <li className="widgetSmListItem">
                  <img src="https://avatars.githubusercontent.com/u/51373053?s=400&u=bf5f7235e0319899e967ae27eee166fd80ee2044&v=4" alt="" className="widgetSmImg" />
                  <div className="widgetSmUser">
                      <span className="widgetSmUsername">Jeongmi Park</span>
                      <span className="widgetSmUserTitle">Software Engineer</span>
                  </div>
                  <button className="widgetSmButton">
                     <Visibility className='widgetSmIcon'/>
                      Display
                  </button>
              </li>
              <li className="widgetSmListItem">
                  <img src="https://avatars.githubusercontent.com/u/51373053?s=400&u=bf5f7235e0319899e967ae27eee166fd80ee2044&v=4" alt="" className="widgetSmImg" />
                  <div className="widgetSmUser">
                      <span className="widgetSmUsername">Jeongmi Park</span>
                      <span className="widgetSmUserTitle">Software Engineer</span>
                  </div>
                  <button className="widgetSmButton">
                      <Visibility className='widgetSmIcon'/>
                      Display
                  </button>
              </li>
              <li className="widgetSmListItem">
                  <img src="https://avatars.githubusercontent.com/u/51373053?s=400&u=bf5f7235e0319899e967ae27eee166fd80ee2044&v=4" alt="" className="widgetSmImg" />
                  <div className="widgetSmUser">
                      <span className="widgetSmUsername">Jeongmi Park</span>
                      <span className="widgetSmUserTitle">Software Engineer</span>
                  </div>
                  <button className="widgetSmButton">
                      <Visibility className='widgetSmIcon'/>
                      Display
                  </button>
              </li>
        </ul>
    </div>
  )
}

export default WidgetSm