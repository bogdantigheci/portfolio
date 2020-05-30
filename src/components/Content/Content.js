import React, { Component } from 'react';
import './Content.css';
class Content extends Component {
  state = { certs: ['img/css3_in_depth.jpg'] };

  render() {
    return (
      <div className="container cnt">
        <div className="about container-fluid justify-content-center">
          <h1>About Me</h1>
          <div className="about_section">
            Computer Science graduate, Bachelor’s and Master’s degrees. Seeking
            a new job opportunity as a Frontend Developer. Eager to learn and
            acquire on-the-job experience and be part of a professional team.
          </div>
          <div className="about_section">
            I like attending online meetings from the JavaScript community and
            watching online courses regarding technologies I’m interested in. I
            also enjoy taking on challenging projects and seeing them through.
          </div>
          <div className="about_section">
            I’ve developed my dissertation project using ReactJS, Redux,
            JavaScript (ES6+), HTML, CSS, NodeJS, Express, REST API, MongoDB,
            Git, Npm and Postman. I also have basic knowledge of CSS
            Preprocessors (SASS, LESS), Bootstrap, Java, Sql, MySql, PHP and
            C++.
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
