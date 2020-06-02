import React from 'react';
import { Icon } from '@iconify/react';
import reduxIcon from '@iconify/icons-simple-icons/redux';
import reactIcon from '@iconify/icons-simple-icons/react';
import jsIcon from '@iconify/icons-simple-icons/javascript';
import css3Icon from '@iconify/icons-simple-icons/css3';
import nodeJsIcon from '@iconify/icons-simple-icons/nodejs';
import mongoDbIcon from '@iconify/icons-simple-icons/mongodb';
import postmanIcon from '@iconify/icons-simple-icons/postman';
import sassIcon from '@iconify/icons-simple-icons/sass';
import bootstrapIcon from '@iconify/icons-simple-icons/bootstrap';
import javaIcon from '@iconify/icons-simple-icons/java';
import mySqlIcon from '@iconify/icons-simple-icons/mysql';
import phpIcon from '@iconify/icons-simple-icons/php';
import cSharpIcon from '@iconify/icons-simple-icons/csharp';
import cplusplusIcon from '@iconify/icons-simple-icons/cplusplus';

const About = () => {
  return (
    <section id="about" class="about-mf sect-pt4 route">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="box-shadow-full">
              <div class="row">
                <div class="col-md-6">
                  <div class="row">
                    <div class="col-sm-6 col-md-5">
                      <div class="about-img">
                        <img
                          src="img/profile_pic.jpg"
                          class="img-fluid rounded b-shadow-a"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-7">
                      <div class="about-info">
                        <p>
                          <span class="title-s">Name: </span>
                          <span>Bogdan Tigheci</span>
                        </p>
                        <p>
                          <span class="title-s">
                            <a
                              class="navbar-brand js-scroll"
                              href="https://www.linkedin.com/in/bogdantigheci/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i class="fab fa-linkedin linkedin_icon"></i>
                            </a>
                          </span>
                          <span>
                            <a
                              class="navbar-brand js-scroll"
                              href="https://github.com/bogdantigheci"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i class="fab fa-github github_icon"></i>{' '}
                            </a>
                          </span>
                          <span>
                            <a
                              class="navbar-brand js-scroll"
                              href="mailto:bogdantigheci@yahoo.com"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i class="fab fa-yahoo yahoo_icon">Mail!</i>
                            </a>
                          </span>
                        </p>

                        <p>
                          <span class="title-s">Phone: </span>
                          <span>+40 721 892 729</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="skill-mf">
                    <p class="title-s">Skills</p>
                    <span>
                      <Icon className="mr-4 react_icon" icon={reactIcon} />
                      <Icon className="mr-4 redux_icon" icon={reduxIcon} />
                      <Icon className="mr-4 js_icon" icon={jsIcon} />
                      <Icon className="mr-4 css3_icon" icon={css3Icon} />
                      <Icon className="mr-4 nodejs_icon" icon={nodeJsIcon} />
                      <Icon className="mr-4 mongodb_icon" icon={mongoDbIcon} />
                      <i className="fab fa-git mr-4 git_icon"></i>
                      <i className="fab fa-npm mr-4 npm_icon"></i>
                      <Icon className="mr-4 postman_icon" icon={postmanIcon} />
                      <Icon className="mr-4 sass_icon" icon={sassIcon} />
                      <i className="fab fa-less mr-4 less_icon"></i>
                      <Icon className="mr-4 bs_icon" icon={bootstrapIcon} />
                      <Icon className="mr-4 java_icon" icon={javaIcon} />
                      <i className="fas fa-database mr-4 db_icon"></i>
                      <Icon className="mr-4 mysql_icon" icon={mySqlIcon} />
                      <Icon className="mr-4 php_icon" icon={phpIcon} />
                      <Icon className="mr-4 csharp_icon" icon={cSharpIcon} />
                      <Icon className="mr-4 cplus_icon" icon={cplusplusIcon} />
                    </span>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="about-me pt-4 pt-md-0">
                    <div class="title-box-2">
                      <h5 class="title-left">About me</h5>
                    </div>
                    <p class="lead">
                      Computer Science graduate, Bachelor’s and Master’s
                      degrees. Seeking a new job opportunity as a Frontend
                      Developer. Eager to learn and acquire on-the-job
                      experience and be part of a professional team.
                    </p>
                    <p class="lead">
                      I like attending online meetings from the JavaScript
                      community and watching online courses regarding
                      technologies I’m interested in. I also enjoy taking on
                      challenging projects and seeing them through.
                    </p>
                    <p class="lead">
                      I’ve developed my dissertation project using ReactJS,
                      Redux, JavaScript (ES6+), HTML, CSS, NodeJS, Express, REST
                      API, MongoDB, Git, Npm and Postman. I also have basic
                      knowledge of CSS Preprocessors (SASS, LESS), Bootstrap,
                      Java, Sql, MySql, PHP and C++.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
