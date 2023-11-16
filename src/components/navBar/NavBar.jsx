import React from 'react'
import "./navBar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <div className='navbar'>
      <div className="left">
        <Link to="/" style={{textDecoration:"none"}}>
        <span>BuddyTalk!</span>
        </Link>
        <HomeOutlinedIcon/>
        <DarkModeOutlinedIcon/>
        <GridViewOutlinedIcon/>
        <div className="search">
        <SearchOutlinedIcon/>
        <input type='text' placeholder='Search...'></input>
        </div>
        
      </div>
      <div className="right">
        <PermIdentityOutlinedIcon/>
        <MessageOutlinedIcon/>
        <NotificationsNoneOutlinedIcon/>
        <div className="user">
          <img src="https://images.pexels.com/photos/4061512/pexels-photo-4061512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <span>Imesh Udara</span>
        </div>
      </div>
    </div>
  )
}

export default NavBar
