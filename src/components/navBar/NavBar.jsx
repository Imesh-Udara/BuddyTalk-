import React, { useContext } from 'react'
import "./navBar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkMode';
import { AuthContext } from '../../context/authContext';


const NavBar = () => {

  const {toggle, darkMode} = useContext(DarkModeContext);
  const {currentUser} = useContext(AuthContext);

  return (
    <div className='navbar'>
      <div className="left">
        <Link to="/" style={{textDecoration:"none"}}>
        <span>BuddyTalk!</span>
        </Link>
        <HomeOutlinedIcon/>
        {darkMode ?  <WbSunnyIcon onClick={toggle}/> : <DarkModeOutlinedIcon onClick={toggle}/> }
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
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  )
}

export default NavBar
