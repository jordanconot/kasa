import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer_container'>
            <Link to='/'>
            <img className='footer_logo' src='../assets/logo_white.png' alt='Logo Kasa'></img>
            </Link>
            <p className='footer_text'>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;