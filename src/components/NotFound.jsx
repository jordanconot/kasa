import React from 'react';
import Header from './Header';
import Footer from './Footer';

const NotFound = () => {
    return (
        <>
        <div className='container_404'>
            <Header />
            <main className='main_container_404'>
                <h1>404</h1>
                <h2>Oups! La page que vous demandez n'existe pas.</h2>
                <a href=''>Retourner sur la page d'accueil</a>
            </main>
            <Footer />
            </div>
        </>
    );
};

export default NotFound;