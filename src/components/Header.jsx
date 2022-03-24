import React from 'react';

const Header = () => {
  return (
    <nav className="orange darken-3">
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">React Shop</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="https://lustig314.github.io/react-shop/" target="_blank">Repo</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
