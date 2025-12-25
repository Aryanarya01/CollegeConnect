import React, { useState } from "react";
import { createPost } from "../utils/Storage";
import { Navigate,useNavigate } from "react-router-dom";
import { getLoggedInUser } from "../utils/Storage";
const CreatePost = () => {
    const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  
  const loggedInUser = getLoggedInUser();
  if (!loggedInUser) {
    return <Navigate to="/login" replace />;
  }

  const handelSubmit = (e) => {
    e.preventDefault();
    const post = {
      id: Date.now(),
      title: title,
      content: content,
      author: loggedInUser.name,
      email: loggedInUser.email,
      createdAt: new Date().toISOString(),
    };
    createPost(post);
    alert("Post Created Successfully");
    setTitle("");
    setContent("");
    navigate("/feed");
  };
  return (
    <div className="signup-page"> 
    <div className="container signup">
      <h1>Create a New Post</h1>
      <p>Share what's happening with your campus community</p>
       <form className='signform' onSubmit={handelSubmit}> 
        <div>
          <label htmlFor='title' class="form-label">Title:</label>
          <input
          placeholder='About your post'
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            name="title"
            class="form-control"
            id='title'
          />
        </div>
        <div>
          <label htmlFor='content' class="form-label">Content:</label>
          <input
          placeholder="What's on your mind?"
            onChange={(e) => setContent(e.target.value)}
            type="text"
            name="content"
            class="form-control"
            id='content'
          />
        </div>
        <button type='submit' class="btn" style={{marginTop:"1rem",fontWeight:"500",backgroundColor:"rgba(241, 172, 42, 1)",width:"8rem"}} >Post</button>
        </form>
    </div>
    </div>
  );
};

export default CreatePost;
