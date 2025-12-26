import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  const handleReturnHome = () => {
    window.location.href = "/home";
  };
  const handelLogout = () => {    
    localStorage.removeItem("loggedInUser");
    window.location.href = "/login";
  };
  return (

    <>
     <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <NavLink style={{fontWeight:"700",color:"white"}} className="navbar-brand" to="/home">
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
    <div className="NotFound">
      <h1>404 Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>

      <button
        type="button"
        onClick={handleReturnHome}
        class="btn"
        style={{
          marginTop: "1rem",
          fontWeight: "500",
          backgroundColor: "rgba(241, 172, 42, 1)",
          width: "8rem",
        }}
      >
        Return Home
      </button>
    </div>
    </>
  );
};

export default NotFound;
