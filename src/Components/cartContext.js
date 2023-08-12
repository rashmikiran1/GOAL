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

  const emptyCart = () => {
    setCartItems([]);
  };


  return (
    <CartContext.Provider value={{ cartItems, addToCart, emptyCart }}>
      {children}
    </CartContext.Provider>
  );
}
