import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export const LoginScreen = () => {
  return (
    <div className='background'>
      <div className='login'>
        <p className='login__title'>Login</p>
        <form className='login__form'>
          <div className='input-container'>
            <input
              type='text'
              placeholder='email'
              name='email'
              autoComplete='off'
              value={''}
              onChange={''}
              className='login__input'
            />
            <input
              type='text'
              placeholder='password'
              name='password'
              value={''}
              onChange={''}
              className='login__input'
            />
          </div>
          <button className='login__button'>Login</button>
          <div className='social-container'>
            <p className='social-container__text'>Login with social networks</p>
            <div className='login__networks'>
              <div className='login__facebook'>
                <img
                  src='https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg'
                  alt='Facebook button'
                  width='25px'
                  className='login__img'
                />
                <p className='login__desc'>Sign in with facebook</p>
              </div>
              <div className='login__twitter'>
                <img
                  src='https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg'
                  alt='Twitter button'
                  width='25px'
                  className='login__img'
                />
                <p className='login__desc'>Sign in with twitter</p>
              </div>
              <div className='login__google'>
                <img
                  src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
                  alt='Google button'
                  width='25px'
                  className='login__img'
                />
                <p className='login__desc'>Sign in with google</p>
              </div>
            </div>
          </div>
        </form>
        <Link to='/auth/register' className='login__register-link'>
          <p className='login__register-text'>Create new account</p>
        </Link>
      </div>
    </div>
  );
};
