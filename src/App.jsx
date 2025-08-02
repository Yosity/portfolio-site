import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Work from "./components/Work/Work";

import "./index.css";

function App() {
  const location = useLocation();

  return (
    <div className="useless-div-for-square-animation">
      <div className="square"></div>
      <div className="main-container">
        <div className="hero-container">
          <div className="name">
            <h1>Yosef Anwar</h1>
            <h3>
              Frontend Developer | <span>Backend as well maybe</span>
            </h3>
          </div>
          <ul className="hero-socials">
            <li>
              <a
                href="https://github.com/Yosity/Yosity"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/yosef-anwar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin linkedin"></i>
              </a>
            </li>
            <li className="email">
              <i className="fa-regular fa-envelope mail"></i>
              <span>yosefanwar690@gmail.com</span>
            </li>
          </ul>
        </div>
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
