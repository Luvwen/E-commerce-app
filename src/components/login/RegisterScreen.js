import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export const RegisterScreen = () => {
  return (
    <div className='wrapper-register'>
      <div className='register'>
        <h3 className='register__title'>Register</h3>
        <form onSubmit={''} className='register-form'>
          <input
            type='text'
            placeholder='Name'
            name='name'
            autoComplete='off'
            value={''}
            onChange={''}
            className='register-form__input'
          />
          <input
            type='text'
            placeholder='Email'
            name='email'
            autoComplete='off'
            value={''}
            onChange={''}
            className='register-form__input'
          />
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={''}
            onChange={''}
            className='register-form__input'
          />
          <input
            type='password'
            placeholder='Confirm password'
            name='password2'
            value={''}
            onChange={''}
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
