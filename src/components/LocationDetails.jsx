import React from 'react';
import data from '../data/data.json';
import { useParams } from 'react-router-dom';

const LocationDetails = () => {
  const { id } = useParams();
  const locationData = data.find((location) => location.id === id);

  const renderStars = (rating) => {
    const starsActive = `../assets/star-active.svg`;
    const starsInactive = `../assets/star-inactive.svg`;

    let stars = [];
    for(let i = 0; i < 5; i++) {
        stars.push(
            <img key={i} src={i < rating ? starsActive : starsInactive} alt='Note sur 5'></img>
        )
    }
    return stars
  }

  return (
    <main className="location_container">
      <article className="card_location">
        <img
          className="card_location_picture"
          src={locationData.cover}
          alt={locationData.title}
        ></img>
      </article>
      <div className="location_header_container">
        <div className="location_header_title">
          <h1>{locationData.title}</h1>
          <p>{locationData.location}</p>
          <div className="location_header_tag">
            {locationData.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>
        <div className="location_header_star_host">
          <div className="location_header_host">
            <p>{locationData.host.name}</p>
            <img src={locationData.host.picture} alt="blabla"></img>
          </div>
          <div className="location_header_star">{renderStars(Number(locationData.rating))}</div>
        </div>
      </div>
    </main>
  );
};

export default LocationDetails;
