import React from 'react';
import { Footer } from './footer/Footer';
import { Navbar } from './header/Navbar';
import { HomeScreen } from './homepage/HomeScreen';
import { LoginScreen } from './login/LoginScreen';

export const Home = () => {
  const logged = true;

  return (
    <>
      {logged ? (
        <>
          <Navbar />
          <HomeScreen />
          <Footer />
        </>
      ) : (
        <>
          <LoginScreen />
        </>
      )}
    </>
  );
};
