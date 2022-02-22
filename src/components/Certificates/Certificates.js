import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import './Certificates.css';

const images = [
  {
    original: 'img/responsive_web_design.jpg',
    thumbnail: 'img/responsive_web_design.jpg',
  },
  {
    original: 'img/javascript_alg.png',
    thumbnail: 'img/javascript_alg.png',
  },
  {
    original: 'img/css3_in_depth.jpg',
    thumbnail: 'img/css3_in_depth.jpg',
  }
];
const additionalClass = 'img_gal_cert';

class Certifications extends Component {
  render() {
    return (
      <section id="certificates" className="sect-pt4">
        <div className="title-box text-center">
          <h3 className="title-a">Certificates</h3>
          <p className="subtitle-a">Courses taken </p>
          <div className="line-mf"></div>
        </div>
        <ImageGallery additionalClass={additionalClass} items={images} />
      </section>
    );
  }
}

export default Certifications;
