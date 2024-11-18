import React, { useState } from 'react';
import './post.css'; 

useEffect(() => {
  fetch('/posts')
    .then((response) => response.json())
    .then((data) => setPosts(data))
    .catch((error) => console.error('Error al obtener publicaciones:', error));
}, []);

return (
  <div>
    {posts.map((post) => (
      <div key={post.id} className="post">
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <p>{post.likes_count} Likes</p>
        <p>{post.comments.length} Comments</p>
        <button onClick={() => handleLike(post.id)}>Like</button>
        <button onClick={() => handleDislike(post.id)}>Dislike</button>
        <button onClick={() => showComments(post.id)}>Show Comments</button>
      </div>
    ))}
  </div>
);


