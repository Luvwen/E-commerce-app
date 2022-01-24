import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { EcommerceApp } from './EcommerceApp';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <EcommerceApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
