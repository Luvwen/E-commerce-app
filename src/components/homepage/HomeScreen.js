import React, { useState } from 'react';

import './styles.css';

import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

import { devices } from '../data/devices';
import { Carrousel } from './Carrousel';

export const HomeScreen = () => {
  // Carrousel logic
  const [current, setCurrent] = useState(0);

  const length = devices.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className='home'>
      <h1 className='home__title'>El futuro esta al alcance de tu mano</h1>
      <div className='carrousel'>
        <FaArrowCircleLeft
          className='carrousel__leftarrow'
          onClick={prevSlide}
        />
        <FaArrowCircleRight
          className='carrousel__rightarrow'
          onClick={nextSlide}
        />
        <Carrousel devices={devices} current={current} />
      </div>
    </div>
  );
};
