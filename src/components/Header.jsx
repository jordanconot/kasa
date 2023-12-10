import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isAbout = location.pathname === '/a-propos';

  return (
    <header className="header_container">
      <div className="header_wrapper_logo">
        <div className="header_logo"></div>
      </div>
      <div className="header_nav">
        <Link to="/" className={`header_text_nav ${isHome ? 'active' : ''}`}>
          Accueil
        </Link>
        <Link to="/a-propos" className={`header_text_nav ${isAbout ? 'active' : ''}`}>
          A propos
        </Link>
      </div>
    </header>
  );
};

export default Header;
