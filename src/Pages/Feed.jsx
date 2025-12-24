import React from 'react'
import {getAllPosts} from '../utils/Storage';
const Feed = () => {
  const posts = getAllPosts();

  return (

    <div>
      <h1>Feeds</h1>
      <p>This is the Feed page.</p>
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        <ul> 
  
          {posts.map((post)=> (
            <li key={post.id} style={{padding:"10px", marginBottom:"8px", border:"1px solid red"}}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <p>{post.email}</p>
              <p>{post.createdAt}</p>
              <p><strong>Author:</strong> {post.author}</p>
            </li>
          ))}
        
        </ul>
      )}
    </div>
  )
}

export default Feed