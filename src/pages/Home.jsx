import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Banner from '../components/Banner';

const Home = () => {
  return (
    <div className='container'>
      <Header />
      <Banner pictureUrl='./assets/mountain_sea.png' title={'Chez vous, partout et ailleurs'}/>
      <Card />
      <Footer />
    </div>
  );
};

export default Home;
