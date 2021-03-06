import React, { useEffect, useState } from 'react';
import { devices } from '../data/devices';
import { useForm } from '../../hooks/useForm';
import { Navbar } from '../header/Navbar';
import { ProductsCards } from './ProductsCards';
import './styles.css';

export const ProductsPage = () => {
  const [formValues, handleInputChange] = useForm({ deviceValue: '' });

  const { deviceValue } = formValues;

  const [newDevices, setNewDevices] = useState([]);
  const [search, setSearch] = useState(false);

  const handleDeviceSearch = (e) => {
    e.preventDefault();
    setSearch(true);
    setNewDevices(devices.filter((device) => device.brand === deviceValue));
  };

  // const [checked, setChecked] = useState(false);

  // const handleCheck = (e) => {
  //   if (e.target.name.checked === true) {
  //     console.log('Hey');
  //     setChecked(false);
  //   } else {
  //     setChecked(true);
  //   }
  // };

  // Checkbox input logic
  const brands = ['Samsung', 'Motorola', 'Lg', 'Alcatel', 'TCL'];

  const [checked, setChecked] = useState([]);

  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    handleFilters(newChecked);
  };

  const handleFilters = (filters) => {
    console.log(filters);
  };

  return (
    <div className='products-page'>
      <Navbar />
      <div className='products-wrapper'>
        <aside className='filter'>
          <h4 className='filter__title'>Filtros</h4>
          <div className='filter-menu'>
            <h1 className='filter-menu__title'>Celulares disponibles</h1>
            <p className='filter-menu__text'>
              Cantidad: <span>25</span>
            </p>
            <p className='filter__text'>Modelo del dispositivo</p>
            <form>
              <input
                className='filter__input'
                type='text'
                name='deviceValue'
                value={deviceValue}
                onChange={handleInputChange}
              />
              <button className='filter__search' onClick={handleDeviceSearch}>
                Buscar
              </button>
            </form>
            <div className='filter-container'>
              <ul className='filter-list'>
                Marca
                {brands.map((brand, index) => {
                  return (
                    <li className='filter-list__item' key={index}>
                      <input
                        type='checkbox'
                        id={index}
                        onChange={() => handleToggle(brand)}
                        name={brand}
                        checked={checked.indexOf(brand) === -1 ? false : true}
                      />
                      <label htmlFor={index}>{brand}</label>
                    </li>
                  );
                })}
              </ul>
              <ul className='filter-price'>
                Precio
                <li className='filter-price__item'>
                  <input type='checkbox'></input>
                  <label>Menor a $30.000</label>
                </li>
                <li className='filter-price__item'>
                  <input type='checkbox'></input>
                  <label>Menor a $50.000</label>
                </li>
                <li className='filter-price__item'>
                  <input type='checkbox'></input>
                  <label>Menor a $100.000</label>
                </li>
              </ul>
            </div>
          </div>
        </aside>
        <div>
          <ProductsCards
            newDevices={newDevices}
            search={search}
            checked={checked}
          />
        </div>
      </div>
    </div>
  );
};
