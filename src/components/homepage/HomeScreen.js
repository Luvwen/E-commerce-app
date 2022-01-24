import React, { useState } from 'react';

import './styles.css';

import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

import { devices } from '../data/devices';

export const HomeScreen = () => {
  const [current, setCurrent] = useState(0);

  const length = devices.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);

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
        {devices.map((device, index) => (
          <div
            className={index === current ? 'slide-active' : 'slide'}
            key={index}
          >
            {index === current && (
              <div className='slide-images'>
                <img
                  src={device.img}
                  alt={device.model}
                  className='carrousel__image'
                ></img>
                <div className='slider'>
                  <p className='slider__info'>Fabricante: {device.brand}</p>
                  <p className='slider__info'>Modelo: {device.model}</p>
                  <p className='slider__info'>Precio: {device.price}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
