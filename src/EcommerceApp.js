import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { login } from './actions/auth';
import { AuthRouter } from './authRouter';
import { Home } from './components/Home';
import { ProductsPage } from './components/products/ProductsPage';
import { app } from './firestore/firestoreConfig';

export const EcommerceApp = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isAutenticated, setIsAutenticated] = useState(false);

  useEffect(() => {
    const auth = getAuth(app);

    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsAutenticated(true);
      } else {
        setIsAutenticated(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking, setIsAutenticated]);

  if (checking) {
    return <h1>Espere por favor...</h1>;
  }

  return (
    <BrowserRouter>
      <Routes>
        {isAutenticated ? (
          <Route path='/' element={<Home />} />
        ) : (
          <Route path='/*' element={<Navigate replace to='auth/login' />} />
        )}
        {isAutenticated && (
          <Route path='/products' element={<ProductsPage />} />
        )}
        {isAutenticated && (
          <Route path='/auth/*' element={<Navigate replace to='/' />} />
        )}
        <Route path='auth/*' element={<AuthRouter />} />
      </Routes>
    </BrowserRouter>
  );
};
