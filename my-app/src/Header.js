// src/Header.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Message from "./Message";
import News from "./News"; // Capitalized for consistency
import "./Header.css";

function Header() {
  return (
    <Router>
      <div className="container">
        <h1 className="heading">Welcome to my React App</h1>

        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/message">Message</Link> |{" "}
          <Link to="/news">News</Link>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/message" element={<Message />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
    </Router>
  );
}

// simple Home component
function Home() {
  return <h2>This is the Home page</h2>;
}

export default Header;
