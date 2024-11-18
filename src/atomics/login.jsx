import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu((prev) => !prev);
  const handleClose = () => setShowMenu(false);

  return (
    <div>
      {isAuthenticated ? (
        <div style={{ position: "relative" }}>
          <img
            src={user.picture}
            alt="Profile"
            className="profile-image"
            onClick={toggleMenu}
          />
          {showMenu && (
            <div className="dropdown-menu">
              <h2>{user.name}</h2>
              <p>{user.email}</p>
              <button onClick={() => logout()} className="logout-button">Cerrar sesión</button>
              <button onClick={handleClose} className="close-button">Cerrar</button>
            </div>
          )}
        </div>
      ) : (
        <button onClick={loginWithRedirect}>Login</button>
      )}
    </div>
  );
};

export default LoginButton;



