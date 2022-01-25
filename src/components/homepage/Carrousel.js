import React from 'react';

export const Carrousel = ({ current, devices }) => {
  return (
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
  );
};
