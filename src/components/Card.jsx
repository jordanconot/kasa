import React from 'react';

const Card = () => {
    return (
        <main className='main_container'>
            <section className='banner'>
                <img className='banner_picture' src='./assets/mountain_sea.png' alt='Vue sur mer et montagne'></img>
                <h1 className='banner_title'>Chez vous, partout et ailleurs</h1>
            </section>
            <section className='card_container'>
                <div className='card_list'>
                    <a href=''>
                        <div className='card_location'>
                            <img className='card_location_picture' alt=''></img>
                            <h2 className='title_n2'>Titre de la location</h2>
                        </div>
                    </a>

                    <a href=''>
                        <div className='card_location'>
                            <img className='card_location_picture' alt=''></img>
                            <h2 className='title_n2'>Titre de la location</h2>
                        </div>
                    </a>

                    <a href=''>
                        <div className='card_location'>
                            <img className='card_location_picture' alt=''></img>
                            <h2 className='title_n2'>Titre de la location</h2>
                        </div>
                    </a>
                </div>
            </section>
        </main>
    );
};

export default Card;