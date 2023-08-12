import React, { useState } from 'react';
import Modal from 'react-modal';
import { useCart } from './cartContext';

Modal.setAppElement('#root');


const ProductForm = ({ addProduct }) => {
  const [shoeName, setShoeName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState();
  const [smallQty, setSmallQty] = useState(0);
  const [mediumQty, setMediumQty] = useState(0);
  const [largeQty, setLargeQty] = useState(0);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);


  const { cartItems } = useCart();

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.productprice,0);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      shoeName,
      description,
      price,
      quantities: {
        small: smallQty,
        medium: mediumQty,
        large: largeQty,
      },
    };
    addProduct(product);
    
    setShoeName('');
    setDescription('');
    setPrice(0);
    setSmallQty(0);
    setMediumQty(0);
    setLargeQty(0);
  };
  const openCartModal = () => {
    setIsCartModalOpen(true);
  };

  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <h2>Add Product</h2>
      <label>
        Shoe Name:
        <input type="text" value={shoeName} onChange={(e) => setShoeName(e.target.value)} />
      </label>
      <label>
        Description:
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
        Price:
        <input type="number" value={price} onChange={(e) => setPrice(+e.target.value)} />
      </label>
      <br />
      <label>
        Small Quantity:
        <input type="number" value={smallQty} onChange={(e) => setSmallQty(+e.target.value)} />
      </label>
      <label>
        Medium Quantity:
        <input type="number" value={mediumQty} onChange={(e) => setMediumQty(+e.target.value)} />
      </label>
      <label>
        Large Quantity:
        <input type="number" value={largeQty} onChange={(e) => setLargeQty(+e.target.value)} />
      </label>
      <button type="submit">Add Product</button>
  
    </form>
    <button onClick={openCartModal}>Cart ({cartItems.length})</button>
      <Modal isOpen={isCartModalOpen} onRequestClose={closeCartModal}>
        <h2>Cart</h2>
        {cartItems.map((item, index) => (
          <div key={index}>
            <p>
              {item.size} - {item.productName} - Price: ${item.productprice}
            </p>
          </div>
        ))}
         <p>Total Price: ${calculateTotalPrice()}</p>
        <button onClick={closeCartModal}>Close</button>
       
      </Modal>
      </div>
  );
};

export default ProductForm;
