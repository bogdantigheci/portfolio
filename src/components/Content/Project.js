import React from 'react';
import projects from './projectsList';

const Project = () => {
  return (
    <React.Fragment>
      {projects.map((project, i) => (
        <div className="col-md-4">
          <div className="work-box" key={i}>
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              data-lightbox="gallery-mf"
            >
              <div className="work-img">
                <img
                  src={project.img}
                  alt="todo"
                  className="img-fluid project_img"
                />
              </div>
            </a>
            <div className="work-content">
              <div className="row">
                <div className="col-sm-8">
                  <h2 className="w-title">{project.title}</h2>
                  <div className="w-more">
                    <span className="w-ctegory">{project.techStack}</span>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="w-like">
                    <span className="ion-ios-plus-outline">
                      <a
                        className="github_link"
                        href={project.githubLink}
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
      ))}
    </React.Fragment>
  );
};

export default Project;
