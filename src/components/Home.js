import React, { useState } from 'react';
import { Footer } from './footer/Footer';
import { Navbar } from './header/Navbar';
import { HomeScreen } from './homepage/HomeScreen';
import { LoginScreen } from './login/LoginScreen';

export const Home = () => {
  const [logged, setLogged] = useState(true);

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
