import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart }}>
      {children}
    </CartContext.Provider>
  );
};
