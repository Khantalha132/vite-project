import React from "react";
import "./Nav.css";

const  Nav= () => {
  return (
    <header className="nav">
      <div className="logo">Awesome App</div>
      <nav>
        <ul className="nav-links">
          <li>Home</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>
            <button className="download-btn">Download Now</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};


export default Nav