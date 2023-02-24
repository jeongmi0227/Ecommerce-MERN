import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneIphone, Publish } from '@mui/icons-material';
import React from 'react'
import { Link } from 'react-router-dom';
import './user.css';

function User() {
  return (
    <div className='user'>
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userEditButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src="https://avatars.githubusercontent.com/u/51373053?s=400&u=bf5f7235e0319899e967ae27eee166fd80ee2044&v=4" alt="" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Anna Becker</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowButton">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className='userShowIcon'/>
              <span className="userShowInfoTitle">annabeck99</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className='userShowIcon'/>
              <span className="userShowInfoTitle">10.12.1999</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneIphone className='userShowIcon'/>
              <span className="userShowInfoTitle">+1 123 456 67</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className='userShowIcon'/>
              <span className="userShowInfoTitle">annabeck@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching  className='userShowIcon'/>
              <span className="userShowInfoTitle">New York | USA</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>UserName</label>
                <input type="text" placeholder='annabeck99' className='userUpdateInput'/>
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input type="text" placeholder='Anna Becker' className='userUpdateInput'/>
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input type="text" placeholder='annabeck@gmail.com' className='userUpdateInput'/>
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input type="text" placeholder='annabeck99' className='userUpdateInput'/>
              </div>
              <div className="userUpdateItem">
                <label>UserName</label>
                <input type="text" placeholder='+1 123 456 67' className='userUpdateInput'/>
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input type="text" placeholder='New York | USA' className='userUpdateInput'/>
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img src="https://avatars.githubusercontent.com/u/51373053?s=400&u=bf5f7235e0319899e967ae27eee166fd80ee2044&v=4" alt="" className="userUpdateImg" />
                <label htmlFor="file"><Publish className='userUpdateIcon'/></label>
                <input type="file" id="file" style={{display:"none"}} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default User