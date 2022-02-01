import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { EcommerceApp } from './EcommerceApp';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <EcommerceApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
