import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LocationDetails from '../components/LocationDetails';
import Collapse from '../components/Collapse';
import data from '../data/data.json';
import { useParams } from 'react-router-dom';

const Location = () => {
    const { id } = useParams();
    const locationData = data.find((location) => location.id === id);

    const collapseData = locationData ? [
        {title: 'Description', content: locationData.description},
        {title: 'Équipements', content: locationData.equipments.join(', ')},
    ] : [];
    

    return (
        <div className='container'>
            <Header />
            <LocationDetails locationdata={locationData} />
            <Collapse collapseData={collapseData} />
            <Footer />
        </div>
    );
};

export default Location;