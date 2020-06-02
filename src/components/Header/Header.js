import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <div className="navbar wrap nav_section">
      <nav
        className="navbar navbar-b navbar-reduce navbar-expand-md fixed-top"
        id="mainNav"
      >
        <div className="container">
          <Link to="#page-top" className="navbar-brand js-scroll">
            Bogdan Tigheci
          </Link>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarDefault"
            aria-controls="navbarDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></button>
          <div
            className="navbar-collapse collapse justify-content-end"
            id="navbarDefault"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="#home" className="nav-link js-scroll active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#about" className="nav-link js-scroll">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#projects" className="nav-link js-scroll">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link to="certificates" className="nav-link js-scroll">
                  Certificates
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
