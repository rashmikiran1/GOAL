import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}


export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (size, productName , productprice) => {
    setCartItems([...cartItems, { size, productName , productprice }]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
