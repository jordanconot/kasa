import React, { useEffect, useState } from 'react';
import data from '../data/data.json';
import { useNavigate, useParams } from 'react-router-dom';

const LocationDetails = ({ locationdata }) => {
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

  const { id } = useParams();
  const navigate = useNavigate();

  const locationData = data.find((location) => location.id === id);
  useEffect(() => {
    if (!locationData) {
      navigate('/404');
    }
  }, [locationData, navigate]);

  if(!locationData) {
    return null;
  }

  const renderStars = (rating) => {
    const starsActive = `../assets/star-active.svg`;
    const starsInactive = `../assets/star-inactive.svg`;

    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <img
          className='stars'
          key={i}
          src={i < rating ? starsActive : starsInactive}
          alt="Etoile"
        ></img>
      );
    }
    return stars;
  };

  const nextPicture = () => {
    setCurrentPictureIndex((prevIndex) =>
      prevIndex === locationData.pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevPicture = () => {
    setCurrentPictureIndex((prevIndex) =>
      prevIndex === 0 ? locationData.pictures.length - 1 : prevIndex - 1
    );
  };

  const isSinglePicture = locationData.pictures.length === 1;

  return (
    <main className="location_container">
      <article className="card_location">
        <img
          className="card_location_picture"
          src={locationData.pictures[currentPictureIndex]}
          alt={`${locationData.title} ${currentPictureIndex + 1}`}
        ></img>
        {!isSinglePicture && (
          <>
            <button
              onClick={prevPicture}
              className="card_location_arrow_left"
            ></button>
            <button
              onClick={nextPicture}
              className="card_location_arrow_right"
            ></button>
            <div className="card_location_counter">
              {currentPictureIndex + 1}/{locationData.pictures.length}
            </div>
          </>
        )}
      </article>

      <div className="location_header_container">
        <div className="location_header_title">
          <h1>{locationData.title}</h1>
          <p>{locationData.location}</p>
          <div className="location_header_tag">
            {locationData.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="location_header_star_host">
          <div className="location_header_host">
            <p>{locationData.host.name}</p>
            <img src={locationData.host.picture} alt="blabla"></img>
          </div>
          <div className="location_header_star">
            {renderStars(Number(locationData.rating))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default LocationDetails;
