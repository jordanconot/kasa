import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LocationDetails from '../components/LocationDetails';
import Slideshow from '../components/Slideshow';

const Location = () => {
    return (
        <div className='container'>
            <Header />
            {/* <Slideshow /> */}
            <LocationDetails />
            <Footer />
        </div>
    );
};

export default Location;