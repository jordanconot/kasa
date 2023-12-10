import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LocationDetails from '../components/LocationDetails';

const Location = () => {
    return (
        <div className='container'>
            <Header />
            <LocationDetails />
            <Footer />
        </div>
    );
};

export default Location;