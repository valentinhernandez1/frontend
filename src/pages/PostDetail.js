import React, { useEffect, useState } from 'react';
import { getComments, createComment } from '../services/api';

const PostDetail = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    loadComments();
  }, []);

  const loadComments = async () => {
    const response = await getComments(postId);
    setComments(response.data);
  };

  const handleAddComment = async () => {
    await createComment(postId, { content: commentText, user: "UsuarioDemo" });
    setCommentText('');
    loadComments();
  };

  return (
    <div>
      <h2>Comentarios</h2>
      {comments.map((comment) => (
        <div key={comment._id}>
          <p>{comment.content}</p>
          <span>Por {comment.user}</span>
        </div>
      ))}
      <textarea
        placeholder="Agregar un comentario"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      <button onClick={handleAddComment}>Comentar</button>
    </div>
  );
};

export default PostDetail;
