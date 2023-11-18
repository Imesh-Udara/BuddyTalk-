import React from 'react'
import "./posts.scss"
import Post from '../post/Post'
const Posts = () => {
  
  //Temporary data
  const posts = [
    {
      id: 1,
      name: "Namal Garu",
      userId: 1,
      profilePic: "https://images.pexels.com/photos/5220075/pexels-photo-5220075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aliquid quae quo incidunt, reiciendis, aperiam, numquam natus culpa sed iusto suscipit ipsum delectus! Natus esse temporibus quae, commodi repudiandae delectus.",
      img:"https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      name: "Waruna Garu",
      userId: 2,
      profilePic: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aliquid quae quo incidunt, reiciendis, aperiam, numquam natus culpa sed iusto suscipit ipsum delectus! Natus esse temporibus quae, commodi repudiandae delectus.",
      img:"https://images.pexels.com/photos/433452/pexels-photo-433452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 3,
      name: "Sherin keer",
      userId: 3,
      profilePic: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aliquid quae quo incidunt, reiciendis, aperiam, numquam natus culpa sed iusto suscipit ipsum delectus! Natus esse temporibus quae, commodi repudiandae delectus.",
      img:"https://images.pexels.com/photos/9638689/pexels-photo-9638689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    // {
    //   id: 4,
    //   name: "hasini nimli",
    //   img: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    // },
  ]
  return (
    <div className='posts'>
      {posts.map(post=>(
        <Post post={post} key={post.id}/>
      ))}
      
    </div>
  )
}

export default Posts
