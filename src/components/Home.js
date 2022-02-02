import React from 'react';
import { Footer } from './footer/Footer';
import { Navbar } from './header/Navbar';
import { HomeScreen } from './homepage/HomeScreen';

export const Home = () => {
  return (
    <>
      <Navbar />
      <HomeScreen />
      <Footer />
    </>
  );
};
