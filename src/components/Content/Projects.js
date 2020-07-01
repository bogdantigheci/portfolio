import React from 'react';
import Project from './Project';

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
          <Project />
        </div>
      </div>
    </section>
  );
};
export default Projects;
