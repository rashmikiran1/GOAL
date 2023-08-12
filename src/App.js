import React, { useState } from 'react';
import ProductForm from './Components/productForm';
import Product from './Components/product';
import { CartProvider } from './Components/cartContext';
import Cart from './Components/cart';

const App = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <CartProvider>
      <div>
        <h1>Shoe Store</h1>
        <ProductForm addProduct={addProduct} />
        {products.map((product, index) => (
          <Product
            key={index}
            shoeName={product.shoeName}
            description={product.description}
            price={product.price}
            quantities={product.quantities}
          />
        ))}
        
      </div>
    </CartProvider>
  );
};

export default App;
