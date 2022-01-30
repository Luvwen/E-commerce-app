import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { devices } from '../data/devices';

export const Carrousel = () => {
  const [current, setCurrent] = useState(0);

  const devicesAmount = devices.length;

  const nextSlide = () => {
    setCurrent(current === devicesAmount - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? devicesAmount - 1 : current - 1);
  };

  return (
    <>
      <FaArrowCircleLeft className='carrousel__leftarrow' onClick={prevSlide} />
      <FaArrowCircleRight
        className='carrousel__rightarrow'
        onClick={nextSlide}
      />
      <div>
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
    </>
  );
};
