import React from 'react'
import './login.scss';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='login'>
      <div className="card">
        <div className="left">
          <h1>Let's meet</h1>
          <p>Buddy talk! helps you connect and share with the people in your life.</p>
          <span>Don't you have account ?</span>
          <Link to="/register">
          <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form >
            <input type="text" placeholder='Username' />
            <input type="password" placeholder='Password' />
            
            <button>Login</button>
          </form> 
        </div>
      </div>
      
    </div>
  )
}

export default Login
