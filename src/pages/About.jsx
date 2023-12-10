import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import Footer from '../components/Footer';

const About = () => {
    return (  
        <div className='container'>
            <Header />
            <Banner pictureUrl='./assets/mountain_hood.png'/>
            <Collapse />
            <Footer />
        </div>   
    );
};

export default About;