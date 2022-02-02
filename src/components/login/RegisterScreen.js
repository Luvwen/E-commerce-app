import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';

import { useForm } from '../../hooks/useForm';
import './styles.css';

export const RegisterScreen = () => {
  // Form inputs capture and logic

  const [values, handleInputChange, reset] = useForm({
    name: 'Santiago',
    email: 'santiagobalino@hotmail.com',
    password: '123456',
    password2: '123456',
  });

  const { name, email, password, password2 } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    reset();

    if (isFormValid()) {
      dispatch(startRegisterWithEmailPasswordName(email, password, name));
    }
  };

  // Validate and display login errors

  const dispatch = useDispatch();

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError('Name is not valid'));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError('Email is not valid'));
      return false;
    } else if (password !== password2 || password.length < 5) {
      dispatch(
        setError(
          'Password should be at least 6 characters and match each other'
        )
      );
      return false;
    }
    dispatch(removeError());
    return true;
  };

  const { msgError } = useSelector((state) => state.ui);

  return (
    <div className='wrapper-register'>
      <div className='register'>
        <h3 className='register__title'>Register</h3>
        {msgError && <p className='register__error'>{msgError}</p>}
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
