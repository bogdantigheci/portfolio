import React, { Component } from 'react';
import './Content.css';
class Content extends Component {
  state = { certs: ['img/css3_in_depth.jpg'] };

  render() {
    return (
      <div className="container cnt">
        <div className="about container-fluid justify-content-center">
          <h1>About Me</h1>
          <p>
            Looking for a job as <b>Frontend Developer</b>.
          </p>
          <div> Computer Science graduate. In my final masters year.</div>
          <div>
            Eager to learn and be part of a professional environment. Currently
            learning and <b>React+Redux</b>.
          </div>
          <div>You can check out some of my projects below.</div>
        </div>
        <div className="container d-flex justify-content-center">
          <a
            href="https://burgerapp-3d813.web.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="port_img" src="img/img1.png" alt="project" />
          </a>
          <a
            href="https://todoreactbt.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="port_img" src="img/img2.png" alt="project" />
          </a>
          <a
            href="https://phonestorebt.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="port_img" src="img/img3.png" alt="project" />
          </a>
          <a
            href="https://tictactoebt.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="port_img" src="img/img4.png" alt="project" />
          </a>
        </div>
      </div>
    );
  }
}
export default Content;
