import React from "react";
import "./Header.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import { MDBIcon, MDBContainer, MDBBtn } from "mdbreact";

const navbar = () => {
  return (
    <div className="navbar wrap">
      <MDBContainer>
        <a
          href="https://www.linkedin.com/in/bogdan-tigheci-46413a149/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MDBBtn social="li">
            <MDBIcon fab icon="linkedin-in" className="pr-1 linkedin" />
            Linkedin profile
          </MDBBtn>
        </a>
        <a
          href="https://github.com/bogdantigheci"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MDBBtn social="git">
            <MDBIcon fab icon="github" className="pr-1 github" /> Github profile
          </MDBBtn>
        </a>
        <a href="mailto:bogdantigheci@yahoo.com">
          <MDBBtn social="email">
            <MDBIcon icon="envelope" className="pr-1 yahoo" /> Yahoo Mail
          </MDBBtn>
        </a>
      </MDBContainer>
    </div>
  );
};

export default navbar;
