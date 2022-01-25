import React, { useState } from 'react';

import './styles.css';

export const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Dark mode
  const handleToggleDarkMode = () => {
    document.body.classList.toggle('black');
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'wrapper black' : 'wrapper'}>
      <div className='logo'>
        <p className='logo__img'>Logo</p>
        <p className='logo__darkmode' onClick={handleToggleDarkMode}>
          Dark/Light mode
        </p>
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
