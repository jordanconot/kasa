import React from 'react';
import NotFound from '../components/NotFound';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PageNotFound = () => {

    return (
        <div className='container'>
            <Header />
            <NotFound />
            <Footer />
        </div>
    );
};

export default PageNotFound;