import React from "react";
import { getLoggedInUser } from "../utils/Storage";
import { getAllPosts } from "../utils/Storage";
const MyPost = () => {

  const loggedInUser = getLoggedInUser();
  if (!loggedInUser) {
  return <h2>Please login first</h2>;
}

  const allPosts = getAllPosts();
  const myPosts = allPosts.filter((post) => post.email === loggedInUser.email);
  return (
    <div>
      <h1>MY Post</h1>
      <ul>
        {myPosts.map((post) => (
          
            <li
              key={post.id}
              style={{
                padding: "8px",
                marginBottom: "9px",
                border: "2px solid blue",
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
  );
};

export default MyPost;
