import React, { useState } from 'react'
import "./post.scss"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Link } from 'react-router-dom';
import Comments from '../comments/Comments';



const Post = ({post}) => {

  const [commentOpen, setCommentOpen] = useState(false);

    //Temporary
    const liked = false;
  return (
    <div className='post'>
        <div className="container">
      <div className="user">
        <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">             
                <Link to={`/profile/${post.userId}`} style={{textDecoration:"none", color:'inherit'}}>
                <span className='name'>{post.name}</span>
                
                </Link>
                <span className="date">1 min ago</span>
                
            </div>
        </div>
        <MoreHorizOutlinedIcon/>
      </div>
      <div className="content">
        <p>{post.desc}</p>
        <img src={post.img} alt="" />
      </div>
      <hr/>
      <div className="info">
        <div className="item">
            {liked ?  <FavoriteOutlinedIcon/> : <FavoriteBorderOutlinedIcon/> }
            12 likes
        </div>
        <div className="item" onClick={()=>setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon/>
            10 comments
        </div>
        <div className="item">
            <SendOutlinedIcon/>
            2 shares
        </div>
      </div>
      {commentOpen && <Comments/>}
      </div>
    </div>
  )
}

export default Post
