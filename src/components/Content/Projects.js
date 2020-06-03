import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="portfolio-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Projects</h3>
              <p className="subtitle-a">Select a project for a live preview</p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="project_card">
          <div className="col-md-4">
            <div className="work-box">
              <a
                href="https://burgerapp-3d813.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                data-lightbox="gallery-mf"
              >
                <div className="work-img">
                  <img src="img/img1.png" alt="" className="img-fluid" />
                </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">Burger order app </h2>
                    <div className="w-more">
                      <span className="w-ctegory">
                        App developed with ReactJS, Redux, NodeJS, Firebase
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <span className="ion-ios-plus-outline">
                        <a
                          className="github_link"
                          href="https://github.com/bogdantigheci/burgerapp"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-github"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a
                href="https://todoreactbt.netlify.com/"
                target="_blank"
                rel="noopener noreferrer"
                data-lightbox="gallery-mf"
              >
                <div className="work-img">
                  <img src="img/img2.png" alt="" className="img-fluid" />
                </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">Todo List</h2>
                    <div className="w-more">
                      <span className="w-ctegory">
                        App developed with ReactJS
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <span className="ion-ios-plus-outline">
                        <a
                          className="github_link"
                          href="https://github.com/bogdantigheci/todolistreact"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-github"></i>{' '}
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a
                href="https://phonestorebt.netlify.com/"
                target="_blank"
                rel="noopener noreferrer"
                data-lightbox="gallery-mf"
              >
                <div className="work-img">
                  <img src="img/img3.png" alt="" className="img-fluid" />
                </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">Phone store</h2>
                    <div className="w-more">
                      <span className="w-ctegory">
                        App developed with ReactJS (using context, bootstrap,
                        styled-components and paypal)
                      </span>{' '}
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <span className="ion-ios-plus-outline">
                        <a
                          className="github_link"
                          href="https://github.com/bogdantigheci/phonestore"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-github"></i>{' '}
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a
                href="https://tictactoebt.netlify.com/"
                target="_blank"
                rel="noopener noreferrer"
                data-lightbox="gallery-mf"
              >
                <div className="work-img">
                  <img src="img/img4.png" alt="tictactoe" />
                </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">Tic Tac Toe</h2>
                    <div className="w-more">
                      <span className="w-ctegory">
                        App developed with ReactJS
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <span className="ion-ios-plus-outline">
                        <a
                          className="github_link"
                          href="https://github.com/bogdantigheci/tictactoe"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-github"></i>{' '}
                        </a>
                      </span>
                    </div>
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
export default Projects;
