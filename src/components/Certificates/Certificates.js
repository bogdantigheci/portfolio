import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import './Certificates.css';

const images = [
  {
    original: 'img/css3_in_depth.jpg',
    thumbnail: 'img/css3_in_depth.jpg',
  },
  {
    original: 'img/introduction_to_sql.jpg',
    thumbnail: 'img/introduction_to_sql.jpg',
  },
  {
    original: 'img/java_fundamentals_the_java_language.jpg',
    thumbnail: 'img/java_fundamentals_the_java_language.jpg',
  },
  {
    original: 'img/java_fundamentals_collections.jpg',
    thumbnail: 'img/java_fundamentals_collections.jpg',
  },
  {
    original: 'img/react_fundamentals.jpg',
    thumbnail: 'img/react_fundamentals.jpg',
  },
  {
    original: 'img/react_js_a_complete_guide.jpg',
    thumbnail: 'img/react_js_a_complete_guide.jpg',
  },
  {
    original: 'img/responsive_web_design.jpg',
    thumbnail: 'img/responsive_web_design.jpg',
  },
  {
    original: 'img/introduction_to_testing_in_java.jpg',
    thumbnail: 'img/introduction_to_testing_in_java.jpg',
  },
];
const additionalClass = 'img_gal_cert';

class Certifications extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <button className="btn btn-dark">Back to homepage</button>
        </Link>
        <h1 className="display-block mx-auto cert">Certificates</h1>
        <ImageGallery additionalClass={additionalClass} items={images} />
      </div>
    );
  }
}

export default Certifications;