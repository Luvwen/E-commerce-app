import React from 'react';
import { Link } from 'react-router-dom';
// import { collection, getDocs } from 'firebase/firestore';
// import db from '../../firestore/firestoreConfig';
import { useDispatch } from 'react-redux';

import { useForm } from '../../hooks/useForm';
import './styles.css';
import { loginWithGoogle, startLoginEmailPassword } from '../../actions/auth';

export const LoginScreen = () => {
  // useEffect(() => {
  //   const getUsers = async () => {
  //     const users = await getDocs(collection(db, 'usuarios'));
  //     users.forEach((user) => {
  //       console.log(user.data());
  //     });
  //   };
  //   getUsers();
  // }, []);

  const dispatch = useDispatch();

  // Form and submit logic
  const [formValues, handleInputChange, reset] = useForm({
    email: '',
    password: '',
  });

  const { email, password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(12345, 'sergio'));
    reset();
  };

  const handleLoginWithGoogle = () => {
    dispatch(loginWithGoogle());
  };

  return (
    <div className='background'>
      <div className='login'>
        <p className='login__title'>Login</p>
        <form onSubmit={handleSubmit} className='login__form'>
          <div className='input-container'>
            <input
              type='text'
              placeholder='email'
              name='email'
              autoComplete='off'
              value={email}
              onChange={handleInputChange}
              className='login__input'
            />
            <input
              type='text'
              placeholder='password'
              name='password'
              value={password}
              onChange={handleInputChange}
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
              <div className='login__google' onClick={handleLoginWithGoogle}>
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
