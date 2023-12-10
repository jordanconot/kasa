import React from 'react';
import data from '../data/data.json';

const Card = () => {
  return (
    <main className="main_container">
      <section className="card_container">
        <div className="card_list">
          {data.map((item) => (
            <a href="" key={item.id}>
              <div className="card_location">
                <img
                  src={item.cover}
                  className="card_location_picture"
                  alt={item.title}
                ></img>
                <h2 className="title_n2">{item.title}</h2>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Card;
