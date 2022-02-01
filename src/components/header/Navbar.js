import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import './styles.css';

export const Navbar = () => {
  // Dark mode background
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    document.body.classList.toggle('darkmode');
    setDarkMode(!darkMode);
    setIcon(!icon);
  };
  // Dark mode icons

  const [icon, setIcon] = useState(false);

  return (
    <div className={darkMode ? 'wrapper darkmode' : 'wrapper'}>
      <div className='logo'>
        <p className='logo__img'>Santiago Shop</p>
        {!icon ? (
          <FaSun className='logo__darkmode' onClick={handleToggleDarkMode} />
        ) : (
          <FaMoon className='logo__darkmode' onClick={handleToggleDarkMode} />
        )}
      </div>
      <div className='menu'>
        <Link to='/' className='menu__link'>
          <p className='menu__info'>Productos</p>
        </Link>
        <Link to='/' className='menu__link'>
          <p className='menu__info'>Información</p>
        </Link>
        <Link to='/' className='menu__link'>
          <p className='menu__info'>Sobre nosotros</p>
        </Link>
        <Link to='/auth/login' className='menu__link'>
          <p className='menu__login'>Iniciar sesion</p>
        </Link>
      </div>
    </div>
  );
};
