import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer btminfo">
      Copyright &copy; {new Date().getFullYear()} Bogdan Tigheci
    </footer>
  );
};

export default Footer;
