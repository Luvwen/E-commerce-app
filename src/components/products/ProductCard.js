import React, { useEffect, useState } from 'react';
import { devices } from '../data/devices';

import './styles.css';

export const ProductCard = ({ newDevices, search, checked }) => {
  const [mobiles, setMobiles] = useState([]);
  useEffect(() => {
    setMobiles(devices.filter((device) => device.brand === checked.toString()));
  }, [checked]);

  return (
    <>
      {newDevices.length >= 1 ? (
        newDevices.map((device, index) => {
          return (
            <div className='card-box' key={index}>
              <div className='card'>
                <img
                  src={require(`../data/img/${device.imgDevice}.png`)}
                  alt={device.model}
                  className='card__img'
                />
                <p className='card__text'>
                  Celular {device.brand} {device.model}
                </p>
                <p className='card__price'>Precio: {device.price}</p>
              </div>
            </div>
          );
        })
      ) : checked.length > 0 ? (
        mobiles.map((device, index) => {
          return (
            <div className='card-box' key={index}>
              <div className='card'>
                <img
                  src={require(`../data/img/${device.imgDevice}.png`)}
                  alt={device.model}
                  className='card__img'
                />
                <p className='card__text'>
                  Celular {device.brand} {device.model}
                </p>
                <p className='card__price'>Precio: {device.price}</p>
              </div>
            </div>
          );
        })
      ) : search ? (
        <h1 className='error__title'>No hay coincidencias para la búsqueda</h1>
      ) : (
        devices.map((device, index) => {
          return (
            <div className='card-box' key={index}>
              <div className='card'>
                <img
                  src={require(`../data/img/${device.imgDevice}.png`)}
                  alt={device.model}
                  className='card__img'
                />
                <p className='card__text'>
                  Celular {device.brand} {device.model}
                </p>
                <p className='card__price'>Precio: {device.price}</p>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};
