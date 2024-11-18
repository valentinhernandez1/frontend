import React, { useState } from 'react';
import { createPost } from '../services/api';
import './createpost.css'; 

const CreatePost = ({ onPostCreated }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false); // Estado para mostrar/ocultar el formulario

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content) {
      setError('Por favor, complete todos los campos.');
      return;
    }

    const newPost = { title, content, user: 'UsuarioDemo' };
    try {
      await createPost(newPost);
      onPostCreated();
      setTitle('');
      setContent('');
      setError('');
      setShowForm(false); 
    } catch (err) {
      setError('Hubo un error al crear la publicación. Intenta nuevamente.');
    }
  };

  return (
    <div className="create-post-container">
      <button onClick={() => setShowForm(!showForm)} className="btn btn-primary">
        Crear Publicación
      </button>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            required
          />
          <textarea
            placeholder="Contenido"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control"
            rows="4"
            required
          />
          {error && <div className="alert alert-danger">{error}</div>}
          <button type="submit" className="btn btn-success mt-2">
            Publicar
          </button>
        </form>
      )}
    </div>
  );
};

export default CreatePost;