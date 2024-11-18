import React, { useEffect, useState } from 'react';
import { getPosts } from '../services/api';
import CreatePost from '../componentes/createpost';
import Post from '../componentes/post';
import './home.css';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      const response = await getPosts();
      setPosts(response.data);
    } catch (error) {
      console.error('Error al obtener las publicaciones:', error);
    }
  };

  return (
    <div className="home-container post">
      <CreatePost onPostCreated={loadPosts} />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Home;