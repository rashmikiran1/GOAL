import React from 'react';
import { useCart } from './cartContext';

const Product = ({ shoeName, description, price, quantities }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (size) => {
    if (quantities[size] > 0) {
      addToCart(size, shoeName, price);
      quantities[size] -= 1;
    }
  };

  return (
    <div>
      <h3>{shoeName}</h3>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <div>
        <p>Small Quantity: {quantities.small}</p>
        <button onClick={() => handleAddToCart('small')}>Buy Small</button>
      </div>
      <div>
        <p>Medium Quantity: {quantities.medium}</p>
        <button onClick={() => handleAddToCart('medium')}>Buy Medium</button>
      </div>
      <div>
        <p>Large Quantity: {quantities.large}</p>
        <button onClick={() => handleAddToCart('large')}>Buy Large</button>
      </div>
    </div>
  );
};

export default Product;
