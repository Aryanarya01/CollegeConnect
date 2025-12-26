import React from "react";
import { getLoggedInUser } from "../utils/Storage";
import { getAllPosts } from "../utils/Storage";
import { NavLink } from "react-router-dom";
 

const MyPost = () => {
  const handelLogout = () => {
    localStorage.removeItem("loggedInUser");
    window.location.href = "/login";
  };  
  
  const loggedInUser = getLoggedInUser();
  if (!loggedInUser) {
  return <h2>Please login first</h2>;
}
  const allPosts = getAllPosts();
  const myPosts = allPosts.filter((post) => post.email === loggedInUser.email);
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
    <div className="mypost-page">
      <h1 style={{marginLeft:"5rem"}}>My Post</h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {myPosts.map((post) => (
          
            <li
              key={post.id}
              style={{
                padding: "8px",
                marginBottom: "9px",
                border: "2px solid grey",
              }}
            >
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <p>{post.email}</p>
              <p>{post.createdAt}</p>
              <p>
                <strong>Author:</strong> {post.author}
              </p>
            </li>
         
        ))}
      </ul>
    </div>
    </>
  );
};

export default MyPost;
