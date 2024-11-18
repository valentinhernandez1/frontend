import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./componentes/topbar";
import Profile from "./componentes/perfil";
import Home from "./pages/Home";
import PostDetail from './pages/PostDetail';

const App = () => {
  return (
    <Router>
      <TopBar />
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-9">
            <Routes>
              <Route path="/profile" element={<Profile />} />
              <Route path="/" element={<Home />} />
              <Route path="/posts/:postId" element={<PostDetail />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;





