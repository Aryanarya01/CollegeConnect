import React from 'react'
import { getLoggedInUser } from '../utils/Storage';
import { NavLink } from 'react-router-dom';
import { logoutUser } from '../utils/Storage';
import { useNavigate } from 'react-router-dom';   

const Profile = () => {
  const navigate = useNavigate();
  const handelLogout = () => {
    logoutUser();
    navigate("/home");
  };
  const loggedInUser = getLoggedInUser();
  if (!loggedInUser) {
    return <h2>Please login first</h2>;
  }
  return (
    <> 
    <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <NavLink style={{fontWeight:"700",color:"white"}} className="navbar-brand"  >
      Campus Connect
    </NavLink>

    <div className="feedNav navbar-nav">
      <NavLink className="nav-link" to="/feed">Feed</NavLink>
        <span className="nav-separator">|</span>
      <NavLink className="nav-link" to="/mypost">My Posts</NavLink>
       <span className="nav-separator">|</span>
      <NavLink className="nav-link" to="/createpost">Create Post</NavLink>
       <span className="nav-separator">|</span>
      <NavLink className="nav-link" to="/profile">Profile</NavLink>
       <span className="nav-separator">|</span>
      <button style={{color:"white",fontWeight:"600"}} className="btn ms-2" onClick={handelLogout}>
        Logout
      </button>
    </div>
  </div>
</nav>
    <div> 

       
      <h1 style={{marginLeft:"5rem"}}>Profile</h1>
      <div style={{border:"2px solid grey",width:"50%",margin:"2rem",padding:"1rem",borderRadius:"8px",backgroundColor:"lightgray"}}>
        <p><strong>Name:</strong> {loggedInUser.name}</p>
        <p><strong>Email:</strong> {loggedInUser.email}</p>
      </div>
    </div>
    </>
  )
}

export default Profile