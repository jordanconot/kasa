import React from 'react';

const Banner = () => {
  return (
    <section className="banner">
      <img
        className="banner_picture"
        src="./assets/mountain_sea.png"
        alt="Vue sur mer et montagne"
      ></img>
      <h1 className="banner_title">Chez vous, partout et ailleurs</h1>
    </section>
  );
};

export default Banner;
