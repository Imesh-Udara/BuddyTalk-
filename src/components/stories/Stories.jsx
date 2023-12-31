import React, { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import "./stories.scss"

const Stories = () => {
  const {currentUser} = useContext(AuthContext)
  //Temporary data
  const stories = [
    {
      id: 1,
      name: "Namal Garu",
      img: "https://images.pexels.com/photos/5220075/pexels-photo-5220075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      name: "Waruna garu",
      img: "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 3,
      name: "Sherin keer",
      img: "https://images.pexels.com/photos/341970/pexels-photo-341970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    // {
    //   id: 4,
    //   name: "hasini nimli",
    //   img: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    // },
  ]

  return (
    <div className='stories'>
      <div className="story">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
          <button>+</button>
        </div>
      {stories.map(story=>(
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories
