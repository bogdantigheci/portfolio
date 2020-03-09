import React from 'react';
import './Footer.css';

export default () => {
  return (
    <footer className="footer btminfo">
      Copyright &copy; {new Date().getFullYear()} Bogdan Tigheci
    </footer>
  );
};
