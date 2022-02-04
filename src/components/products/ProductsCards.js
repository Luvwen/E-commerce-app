import React from 'react';
import { ProductCard } from './ProductCard';

import './styles.css';

export const ProductsCards = ({ newDevices, search, deviceSelected }) => {
  return (
    <div className='cards-wrapper'>
      <ProductCard
        newDevices={newDevices}
        search={search}
        deviceSelected={deviceSelected}
      />
    </div>
  );
};
