import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LocationDetails from '../components/LocationDetails';
import Collapse from '../components/Collapse';

const Location = () => {
    return (
        <div className='container'>
            <Header />
            <LocationDetails />
            <Collapse />
            <Footer />
        </div>
    );
};

export default Location;