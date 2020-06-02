import React from 'react';

const Projects = () => {
  return (
    <section id="projects" class="portfolio-mf sect-pt4 route">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="title-box text-center">
              <h3 class="title-a">Projects</h3>
              <p class="subtitle-a">Select a project for a live preview</p>
              <div class="line-mf"></div>
            </div>
          </div>
        </div>
        <div class="project_card">
          <div class="col-md-4">
            <div class="work-box">
              <a
                href="https://burgerapp-3d813.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                data-lightbox="gallery-mf"
              >
                <div class="work-img">
                  <img src="img/img1.png" alt="" class="img-fluid" />
                </div>
                <div class="work-content">
                  <div class="row">
                    <div class="col-sm-8">
                      <h2 class="w-title">Burger order app </h2>
                      <div class="w-more">
                        <span class="w-ctegory">
                          App developed with ReactJS, Redux, NodeJS, Firebase
                        </span>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="w-like">
                        <span class="ion-ios-plus-outline">
                          <a
                            className="github_link"
                            href="https://github.com/bogdantigheci/burgerapp"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i class="fab fa-github"></i>{' '}
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="col-md-4">
            <div class="work-box">
              <a
                href="https://todoreactbt.netlify.com/"
                target="_blank"
                rel="noopener noreferrer"
                data-lightbox="gallery-mf"
              >
                <div class="work-img">
                  <img src="img/img2.png" alt="" class="img-fluid" />
                </div>
                <div class="work-content">
                  <div class="row">
                    <div class="col-sm-8">
                      <h2 class="w-title">Todo List</h2>
                      <div class="w-more">
                        <span class="w-ctegory">
                          App developed with ReactJS
                        </span>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="w-like">
                        <span class="ion-ios-plus-outline">
                          <a
                            className="github_link"
                            href="https://github.com/bogdantigheci/todolistreact"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i class="fab fa-github"></i>{' '}
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="col-md-4">
            <div class="work-box">
              <a
                href="https://phonestorebt.netlify.com/"
                target="_blank"
                rel="noopener noreferrer"
                data-lightbox="gallery-mf"
              >
                <div class="work-img">
                  <img src="img/img3.png" alt="" class="img-fluid" />
                </div>
                <div class="work-content">
                  <div class="row">
                    <div class="col-sm-8">
                      <h2 class="w-title">Phone store</h2>
                      <div class="w-more">
                        <span class="w-ctegory">
                          App developed with ReactJS (using context, bootstrap,
                          styled-components and paypal)
                        </span>{' '}
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="w-like">
                        <span class="ion-ios-plus-outline">
                          <a
                            className="github_link"
                            href="https://github.com/bogdantigheci/phonestore"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i class="fab fa-github"></i>{' '}
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="col-md-4">
            <div class="work-box">
              <a
                href="https://tictactoebt.netlify.com/"
                target="_blank"
                rel="noopener noreferrer"
                data-lightbox="gallery-mf"
              >
                <div class="work-img">
                  <img src="img/img4.png" alt="tictactoe" />
                </div>
                <div class="work-content">
                  <div class="row">
                    <div class="col-sm-8">
                      <h2 class="w-title">Tic Tac Toe</h2>
                      <div class="w-more">
                        <span class="w-ctegory">
                          App developed with ReactJS
                        </span>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="w-like">
                        <span class="ion-ios-plus-outline">
                          <a
                            className="github_link"
                            href="https://github.com/bogdantigheci/tictactoe"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i class="fab fa-github"></i>{' '}
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>{' '}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
