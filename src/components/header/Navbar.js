import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import './styles.css';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';

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

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <div className={darkMode === true ? 'wrapper darkmode' : 'wrapper'}>
      <div className='logo'>
        <Link to='/' className='disabled__styles'>
          <p className='logo__img'>Santiago Shop</p>
        </Link>
        {!icon ? (
          <FaSun className='logo__darkmode' onClick={handleToggleDarkMode} />
        ) : (
          <FaMoon className='logo__darkmode' onClick={handleToggleDarkMode} />
        )}
      </div>
      <div className='menu'>
        <Link to='/products' className='menu__link'>
          <p className='menu__info'>Productos</p>
        </Link>
        <Link to='/' className='menu__link'>
          <p className='menu__info'>Información</p>
        </Link>
        <Link to='/' className='menu__link'>
          <p className='menu__info'>Sobre nosotros</p>
        </Link>
        <Link to='/auth/login' className='menu__link'>
          <p onClick={handleLogout} className='menu__login'>
            Cerrar sesion
          </p>
        </Link>
      </div>
    </div>
  );
};
