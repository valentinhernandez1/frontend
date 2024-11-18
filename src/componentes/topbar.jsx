import React from "react";
import "./TopBar.css";
import LoginButton from "../atomics/login";
import logo from "./image.png";

const TopBar = () => {
  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <div className="TopBar container-fluid">
      <div className="logo d-flex align-items-center" onClick={handleLogoClick}>
        <img src={logo} alt="Logo" className="img-fluid" />
        <div className="nombre ms-3">
          <h1>UCUSPAM</h1>
        </div>
      </div>

      <div className="search-bar">
        <input type="text" className="form-control" placeholder="Buscar..." />
      </div>

      <div className="login-button ms-auto">
        <LoginButton />
      </div>
    </div>
  );
};

export default TopBar;