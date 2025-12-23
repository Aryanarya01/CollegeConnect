import React from 'react'
import { logoutUser } from '../utils/Storage';
 import { useNavigate } from 'react-router-dom';
import Login from './Login';
const Home = () => {
   const navigate = useNavigate(); 
  const handelLogout = ()=>{
    logoutUser();
    navigate("/login");
  }
  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <button onClick={handelLogout}>Logout</button>

    </div>
  )
}

export default Home