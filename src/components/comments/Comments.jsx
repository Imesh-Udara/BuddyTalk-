import React, { useContext } from 'react'
import "./comments.scss";
import{AuthContext} from "../../context/authContext"

const Comments = () => {
    //Tempory data
    const {currentUser} = useContext(AuthContext);
    const comments =  [
        {
            id: 1,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
            name: "Imesh Udara",
            userId: 1,
            profilePicture: "https://images.pexels.com/photos/5220075/pexels-photo-5220075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 2,
            desc: ", dfdfggggggggggggggggggggggvvvvvvvvvvvggio effffffffffffffffffffffffffffffffffffffffffffffarum ullam. Veritatis, dolorem accusantium.",
            name: "Nimesh Bandara",
            userId: 2,
            profilePicture: "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            
        },
        {
            id: 3,
            desc: "sdfsdfgfgfgfdfgdfgfddfdfggffdgfgfgfgfllam. Veritatis, dolorem accusantium.",
            name: "Nimesh Bandara",
            userId: 3,
            profilePicture: "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            
        },
    ]
  return (
    <div className="comments">
        <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type='text' placeholder='write a comment'/>
        <button>Send</button>
        </div>
      {
        comments.map((comment)=>(
            <div className="comment">
                <img src={comment.profilePicture} alt="" />
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className="date">1 hour ago</span>
            </div>
        ))
      }
    </div>
  );
}

export default Comments
