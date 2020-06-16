import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import { Link, animateScroll as scroll } from 'react-scroll';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const toolbar = (props) => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <header className="navbar wrap nav_section">
      <nav
        className="navbar navbar-b navbar-reduce navbar-expand-md fixed-top"
        id="mainNav"
      >
        <div className="container">
          <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
          </div>
          <div className="toolbar__logo">
            <Link
              onClick={scrollToTop}
              to="top"
              className="navbar-brand js-scroll"
            >
              Bogdan Tigheci
            </Link>
          </div>
          <div className="spacer" />
          <div className="toolbar_navigation-items">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="about" smooth className="nav-link js-scroll">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="projects" smooth className="nav-link js-scroll">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link to="certificates" smooth className="nav-link js-scroll">
                  Certificates
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default toolbar;
