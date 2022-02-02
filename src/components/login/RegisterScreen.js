import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
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
      dispatch(setError(Swal.fire('Error', 'Name is not valid', 'error')));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError(Swal.fire('Error', 'Email is not valid', 'error')));
      return false;
    } else if (password !== password2 || password.length < 5) {
      dispatch(
        setError(
          Swal.fire(
            'Error',
            'Password should be at least 6 characters and match each other',
            'error'
          )
        )
      );
      return false;
    }
    dispatch(removeError());
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
