import React from 'react';
import Modal from 'react-modal';

const Cart = ({ isOpen, onRequestClose, cartItems, calculateTotalPrice, emptyCart }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Cart</h2>
      {cartItems.map((item, index) => (
        <div key={index}>
          <p>
            {item.size} - {item.productName} - Price: ${item.productprice}
          </p>
        </div>
      ))}
      <p>Total Price: ${calculateTotalPrice()}</p>
      <button onClick={onRequestClose}>Close</button>
      <button onClick={() => { onRequestClose(); emptyCart(); }}>Order</button>
    </Modal>
  );
};

export default Cart;
