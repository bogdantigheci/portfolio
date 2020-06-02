import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <div className="navbar wrap nav_section">
      <nav
        class="navbar navbar-b navbar-reduce navbar-expand-md fixed-top"
        id="mainNav"
      >
        <div class="container">
          <Link class="navbar-brand js-scroll" href="#page-top">
            Bogdan Tigheci
          </Link>
          <button
            class="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarDefault"
            aria-controls="navbarDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></button>
          <div
            class="navbar-collapse collapse justify-content-end"
            id="navbarDefault"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link js-scroll active" href="#home">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link js-scroll" href="#about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link js-scroll" href="#projects">
                  Projects
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/certificates" class="nav-link js-scroll">
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
