import React from 'react';
import { Carrousel } from './Carrousel';
import './styles.css';

export const HomeScreen = () => {
  return (
    <div className='home'>
      <h1 className='home__title'>El futuro esta al alcance de tu mano</h1>
      <div className='carrousel'>
        <Carrousel />
      </div>
    </div>
  );
};
