import React from 'react';
import { useCart } from './cartContext';

const Cart = () => {
  const { cartItems } = useCart();

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      {cartItems.map((item, index) => (
        <div key={index}>
          <p>
            {item.size} - {item.productName} - Price: ${item.price}
          </p>
        </div>
      ))}
       <p>Total Price: ${calculateTotalPrice()}</p>
    </div>
  );
};

export default Cart;
