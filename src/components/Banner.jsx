import React from 'react';

const Banner = ({ pictureUrl, title}) => {
  return (
    <section className="banner">
      <img
        className="banner_picture"
        src={pictureUrl}
        alt="Vue sur mer et montagne"
      ></img>
      {title && <h1 className="banner_title">{title}</h1>}
    </section>
  );
};

export default Banner;
