import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer fixed-bottom btminfo">
      Copyright &copy; {new Date().getFullYear()} Bogdan Tigheci
    </footer>
  );
};

export default Footer;
