import React from 'react';

const Footer = () => {
  return (
    <footer className="page-footer orange accent-2">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a className="grey-text text-lighten-4 right" href="https://lustig314.github.io/react-shop/"
             target="_blank">Repo</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
