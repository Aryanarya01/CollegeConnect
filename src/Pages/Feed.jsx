import React from "react";
import { getAllPosts } from "../utils/Storage";
import { logoutUser } from "../utils/Storage";
import { getLoggedInUser } from "../utils/Storage";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";


const Feed = () => {
  const posts = getAllPosts();

  const user = getLoggedInUser();
  
  const navigate = useNavigate();
  const handelLogout = () => {
    logoutUser();
    navigate("/home");
  };
  if (!user) {
  return <h2>Please Login</h2>;
}   
  return (
    <div className="feed">
     
<nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <NavLink style={{fontWeight:"700",color:"white"}} className="navbar-brand"  >
      Campus Connect
    </NavLink>

    <div className="feedNav navbar-nav">
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

      <div className="feed-header">
        <div className="inner-feed-header">
          <h1>Welcome, {user.name}!</h1>
          <button onClick={()=>navigate("/createpost")} type="button" style={{margin:"1rem",width:"11rem",backgroundColor:"green",fontWeight:"600",color:"white"}} className="btn">
            + Create New Post
          </button>
        </div>
      </div>
      <h1 style={{marginLeft:"6rem"}}>Community Feed</h1>
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        <div className="post-list">
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {posts.map((post) => (
              <li
                key={post.id}
                style={{
                  padding: "10px",
                  marginBottom: "8px",
                  border: "1px solid grey",
          
                }}
              >
                 <p>
                  <strong></strong> {post.author}
                </p>
                <h4>{post.title}</h4>
                <p>{post.createdAt}</p>
                <p>{post.content}</p>
          
          
          
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Feed;
