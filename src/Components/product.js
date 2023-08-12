import React from 'react';
import { useCart } from './cartContext';

const Product = ({ shoeName, description, price, quantities }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (size) => {
    
    if (quantities[size] > 0) {
      addToCart(size, shoeName, price) ;
      quantities[size] -= 1;
    }
  };

  return (
    <div>
        <div style={{display:'flex', justifySelf:'baseline'}}>
      <div>&nbsp;&nbsp;&nbsp;{shoeName}</div>
      <div>&nbsp;&nbsp;&nbsp;{description}</div>
      <div>&nbsp;&nbsp;&nbsp;Price: ${price}</div>
      <div>
        <button onClick={() => handleAddToCart('small')}>Buy S {quantities.small}</button>
      </div>
      <div>
        <button onClick={() => handleAddToCart('medium')}>Buy M {quantities.medium}</button>
      </div>
      <div>
        <button onClick={() => handleAddToCart('large')}>Buy L {quantities.large}</button>
      </div>
      </div>
    </div>
  );
};

export default Product;
