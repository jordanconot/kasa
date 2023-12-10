import React from 'react';
import data from '../data/data.json';
import { useParams } from 'react-router-dom';

const LocationDetails = () => {
    const { id } = useParams();
    const locationData = data.find(location => location.id === id);
  

    return (  
            <h1>{locationData.title}</h1>
    );
};

export default LocationDetails;