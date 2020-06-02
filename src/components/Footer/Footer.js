import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="copyright-box">
              <p class="copyright">
                &copy; Copyright {new Date().getFullYear()}
                <strong> Bogdan Tigheci </strong>. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
