import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { LoginScreen } from './components/login/LoginScreen';
import { RegisterScreen } from './components/login/RegisterScreen';

export const EcommerceApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Home />} />
        <Route path='/auth/register' element={<RegisterScreen />} />
        <Route path='/auth/login' element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
};
