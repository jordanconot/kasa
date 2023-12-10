import React from 'react';
import data from '../data/data.json';
import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <main className="main_container">
      <section className="card_container">
        <div className="card_list">
          {data.map((item) => (
            <Link to={`/location/${item.id}`} key={item.id} className='card_location_link'>
              <div className="card_location">
                <img
                  src={item.cover}
                  className="card_location_picture"
                  alt={item.title}
                ></img>
                <h2 className="title_n2">{item.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Card;
