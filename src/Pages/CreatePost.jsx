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
    <div>
      <h1>Create Post Page</h1>
      <form onSubmit={handelSubmit}>
        <div>
          <label className="form-label">Title:</label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            name="title"
            className="form-control"
          />
        </div>
        <div>
          <label className="form-label">Content:</label>
          <input
            onChange={(e) => setContent(e.target.value)}
            type="text"
            name="content"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
