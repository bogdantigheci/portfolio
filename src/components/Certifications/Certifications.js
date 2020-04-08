import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import './Certifications.css';

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
];
const additionalClass = ['img_gal_cert'];

class Certifications extends Component {
  render() {
    return <ImageGallery additionalClass={additionalClass} items={images} />;
  }
}

export default Certifications;
