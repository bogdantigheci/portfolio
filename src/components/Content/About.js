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
import jqueryIcon from '@iconify/icons-simple-icons/jquery';

const About = () => {
  return (
    <section id="about" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-sm-6 col-md-5">
                      <div className="about-img">
                        <img
                          src="img/profile_pic.jpg"
                          className="img-fluid rounded b-shadow-a"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-7">
                      <div className="about-info">
                        <p>
                          <span className="title-s">Bogdan Tigheci</span>
                        </p>
                        <p>
                          <span className="title-s">
                            <a
                              className="navbar-brand js-scroll"
                              href="https://www.linkedin.com/in/bogdantigheci/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i
                                data-tip="LinkedIn"
                                className="fab fa-linkedin linkedin_icon"
                              ></i>
                            </a>
                          </span>
                          <span>
                            <a
                              className="navbar-brand js-scroll"
                              href="https://github.com/bogdantigheci"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i
                                data-tip="GitHub"
                                className="fab fa-github github_icon"
                              ></i>{' '}
                            </a>
                          </span>
                          <span>
                            <a
                              className="navbar-brand js-scroll"
                              href="mailto:bogdantigheci@yahoo.com"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i
                                data-tip="Yahoo!Mail"
                                className="fab fa-yahoo yahoo_icon"
                              >
                                Mail!
                              </i>
                            </a>
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="contact_info">
                      <p className="title-s contact-s">Contact me</p>
                      <p className="title-contact-details_phone">
                        Phone: +40 721 892 729
                      </p>
                      <p className="title-contact-details">
                        Email: bogdantigheci@yahoo.com
                      </p>
                    </div>
                  </div>
                  <div className="skill-mf">
                    <p className="title-s">Skills</p>
                    <span>
                      <Icon
                        data-tip="ReactJS"
                        className="mr-4 react_icon"
                        icon={reactIcon}
                      />
                      <Icon
                        data-tip="Redux"
                        className="mr-4 redux_icon"
                        icon={reduxIcon}
                      />
                      <Icon
                        data-tip="JavaScript"
                        className="mr-4 js_icon"
                        icon={jsIcon}
                      />
                      <Icon
                        data-tip="React Native"
                        className="mr-4 react_icon"
                        icon={reactIcon}
                      />
                      <Icon
                        data-tip="CSS3"
                        className="mr-4 css3_icon"
                        icon={css3Icon}
                      />
                      <Icon
                        data-tip="NodeJS"
                        className="mr-4 nodejs_icon"
                        icon={nodeJsIcon}
                      />
                      <Icon
                        data-tip="MongoDB"
                        className="mr-4 mongodb_icon"
                        icon={mongoDbIcon}
                      />
                      <i
                        data-tip="Git"
                        className="fab fa-git mr-4 git_icon"
                      ></i>
                      <i
                        data-tip="NPM"
                        className="fab fa-npm mr-4 npm_icon"
                      ></i>
                      <Icon
                        data-tip="Postman API"
                        className="mr-4 postman_icon"
                        icon={postmanIcon}
                      />
                      <Icon
                        data-tip="Sass"
                        className="mr-4 sass_icon"
                        icon={sassIcon}
                      />
                      <i
                        data-tip="less"
                        className="fab fa-less mr-4 less_icon"
                      ></i>
                      <Icon
                        data-tip="Bootstrap"
                        className="mr-4 bs_icon"
                        icon={bootstrapIcon}
                      />
                      <Icon
                        data-tip="Java"
                        className="mr-4 java_icon"
                        icon={javaIcon}
                      />
                      <i
                        data-tip="SQL"
                        className="fas fa-database mr-4 db_icon"
                      ></i>
                      <Icon
                        data-tip="MySql"
                        className="mr-4 mysql_icon"
                        icon={mySqlIcon}
                      />
                      <Icon
                        data-tip="PHP"
                        className="mr-4 php_icon"
                        icon={phpIcon}
                      />
                      <Icon
                        data-tip="C#"
                        className="mr-4 csharp_icon"
                        icon={cSharpIcon}
                      />
                      <Icon
                        data-tip="C++"
                        className="mr-4 cplus_icon"
                        icon={cplusplusIcon}
                      />
                      <Icon
                        data-tip="jQuery"
                        className="mr-4 jquery_icon"
                        icon={jqueryIcon}
                      />
                    </span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">About me</h5>
                    </div>
                    <p className="lead">
                      Computer Science graduate, Bachelor’s and Master’s
                      degrees. Seeking a new job opportunity as a Frontend
                      Developer. Eager to learn and acquire on-the-job
                      experience and be part of a professional team.
                    </p>
                    <p className="lead">
                      I like attending online meetings from the JavaScript
                      community and watching online courses regarding
                      technologies I’m interested in. I also enjoy taking on
                      challenging projects and seeing them through.
                    </p>
                    <p className="lead">
                      I’ve developed my{' '}
                      <a
                        href="https://racingpigeons.herokuapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        dissertation
                      </a>{' '}
                      project using ReactJS, Redux, JavaScript (ES6+), HTML,
                      CSS, NodeJS, Express, REST API, MongoDB, Git, Npm and
                      Postman. I also have basic knowledge of CSS Preprocessors
                      (SASS, LESS), Bootstrap, Java, Sql, MySql, PHP and C++.
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
