import React from 'react';

import './styles.css';

export const Navbar = () => {
  return (
    <div className='wrapper'>
      <div className='logo'>
        <p className='logo__img'>Logo</p>
        <p className='logo__darkmode'>Dark/Light mode</p>
      </div>
      <div className='menu'>
        <p className='menu__info'>Productos</p>
        <p className='menu__info'>Información</p>
        <p className='menu__info'>Sobre nosotros</p>
        <p className='menu__login'>Mi cuenta</p>
      </div>
    </div>
  );
};
