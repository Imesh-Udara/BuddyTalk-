import React from 'react'
import "./profile.scss"
import Posts from "../../components/posts/Posts"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

const Profile = () => {
  return (
    <div className='profile'>
      <div className="images">
      <img src="https://images.pexels.com/photos/40896/larch-conifer-cone-branch-tree-40896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='cover' />
      <img src="https://images.pexels.com/photos/1036620/pexels-photo-1036620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="profilePic"/>
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="https://www.facebook.com/">
              <FacebookIcon fontSize='large'/>
            </a>
            <a href="https://www.instagram.com/">
              <InstagramIcon fontSize='large'/>
            </a>
            <a href="https://www.pinterest.com/">
              <PinterestIcon fontSize='large'/>
            </a>
            <a href="https://www.youtube.com/">
              <YouTubeIcon fontSize='large'/>
            </a>
          </div>
          <div className="center">
            <span>Imesha nimni</span>
            <div className="info">
              <div className="item">
                <PlaceOutlinedIcon/>
                <span>Sri Lanka</span>
              </div>
              <div className="item">
                <LanguageOutlinedIcon/>
                <span>Imesha.dev</span>
              </div>
              
            </div>
            <button>Follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon/>
            <MoreVertOutlinedIcon/>
          </div>
        </div>
        <Posts/>
      </div>
      
      
    </div>
    
  )
}

export default Profile
