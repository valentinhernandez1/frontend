import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./perfil.css";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  const [isMenuVisible, setMenuVisible] = useState(false); // Controlar la visibilidad del menú

  if (!isAuthenticated) {
    return <div>Por favor, inicie sesión para ver su perfil.</div>;
  }

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev); // Alterna la visibilidad del menú
  };

  return (
    <div className="profile">
      {/* Imagen de perfil */}
      <img
        className="profile-image"
        src={user.picture}
        alt="Profile"
        onClick={toggleMenu} // Al hacer clic, se alterna el menú
      />

      {/* Menú desplegable */}
      {isMenuVisible && (
        <div className="dropdown-menu">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <button className="close-button" onClick={toggleMenu}>
            Cerrar
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
