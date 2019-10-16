import React from "react";
import "./Footer.css";

export default () => {
  return (
    <div className="navbar fixed-bottom btminfo">
      Copyright &copy; {new Date().getFullYear()} Bogdan Tigheci
    </div>
  );
};
