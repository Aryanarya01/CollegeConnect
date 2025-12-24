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
      {/* <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/home">
            Campus Connect
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link" to="/mypost">
                My Posts
              </NavLink>
              <NavLink className="nav-link" to="/createpost">
                Create Post
              </NavLink>
              <NavLink className="nav-link" to="/login">
                Profile
              </NavLink>
              <button className="nav-link btn btn-link" onClick={handelLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav> */}
<nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/home">
      Campus Connect
    </NavLink>

    <div className="navbar-nav">
      <NavLink className="nav-link" to="/mypost">My Posts</NavLink>
      <NavLink className="nav-link" to="/createpost">Create Post</NavLink>
      <NavLink className="nav-link" to="/profile">Profile</NavLink>

      <button className="btn btn-danger ms-2" onClick={handelLogout}>
        Logout
      </button>
    </div>
  </div>
</nav>

      <div className="feed-header">
        <h1>Welcome, {user.name}</h1>
        <button onClick={()=>navigate("/createpost")} type="button" className="btn btn-primary">
          + Create New Post
        </button>
      </div>
      <h1>Feeds</h1>
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li
              key={post.id}
              style={{
                padding: "10px",
                marginBottom: "8px",
                border: "1px solid red",
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
      )}
    </div>
  );
};

export default Feed;
