import React from 'react';

const Header = () => {
  return (
    <header className="hearder_container">
      <div className="hearder_wrapper_logo">
        <div className="header_logo"></div>
      </div>
      <div className="header_nav">
        <p className='header_text_nav'>Accueil</p>
        <p className='header_text_nav'>A propos</p>
      </div>
    </header>
  );
};

export default Header;
