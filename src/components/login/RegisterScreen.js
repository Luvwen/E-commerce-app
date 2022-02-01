import React from 'react';
import { Link } from 'react-router-dom';
import validator from 'validator';

import { useForm } from '../../hooks/useForm';
import './styles.css';

export const RegisterScreen = () => {
  const [values, handleInputChange, reset] = useForm({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    reset();

    if (isFormValid()) {
      console.log('Formulario correcto');
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      console.log('Name is not valid');
      return false;
    } else if (!validator.isEmail(email)) {
      console.log('Email is not valid');
      return false;
    } else if (password !== password2 || password.length < 5) {
      console.log(
        'Password should be at least 6 characters and match each other'
      );
      return false;
    }

    return true;
  };

  return (
    <div className='wrapper-register'>
      <div className='register'>
        <h3 className='register__title'>Register</h3>
        <form onSubmit={handleSubmit} className='register-form'>
          <input
            type='text'
            placeholder='Name'
            name='name'
            autoComplete='off'
            value={name}
            onChange={handleInputChange}
            className='register-form__input'
          />
          <input
            type='text'
            placeholder='Email'
            name='email'
            autoComplete='off'
            value={email}
            onChange={handleInputChange}
            className='register-form__input'
          />
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={handleInputChange}
            className='register-form__input'
          />
          <input
            type='password'
            placeholder='Confirm password'
            name='password2'
            value={password2}
            onChange={handleInputChange}
            className='register-form__input'
          />
          <button type='submit' className='register__button'>
            Register
          </button>

          <Link to='/auth/login' className='register__login'>
            <p className='register__login-text'>Already registered?</p>
          </Link>
        </form>
      </div>
    </div>
  );
};
