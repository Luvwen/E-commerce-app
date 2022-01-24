import React from 'react';
import { Footer } from './components/footer/Footer';
import { Navbar } from './components/header/Navbar';
import { HomeScreen } from './components/homepage/HomeScreen';

export const EcommerceApp = () => {
  return (
    <>
      <Navbar />
      <HomeScreen />
      <Footer />
    </>
  );
};
