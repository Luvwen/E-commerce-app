import React from 'react';
import { ProductCard } from './ProductCard';

import './styles.css';

export const ProductsCards = ({
  newDevices,
  search,
  deviceSelected,
  checked,
}) => {
  return (
    <div className='cards-wrapper'>
      <ProductCard
        newDevices={newDevices}
        search={search}
        deviceSelected={deviceSelected}
        checked={checked}
      />
    </div>
  );
};
