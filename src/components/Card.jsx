import React from 'react';
import Banner from './Banner';

const Card = () => {
    return (
    <>
        <Banner />
        <main className='main_container'>
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
    </>
    );
};

export default Card;