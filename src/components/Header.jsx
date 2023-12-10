import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header_container">
      <div className="header_wrapper_logo">
        <div className="header_logo"></div>
      </div>
      <div className="header_nav">
        <Link to="/" className="header_text_nav ">
          Accueil
        </Link>
        <Link to="/a-propos" className="header_text_nav">
          A propos
        </Link>
      </div>
    </header>
  );
};

export default Header;
