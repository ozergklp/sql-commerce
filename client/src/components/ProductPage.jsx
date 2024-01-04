import React from 'react';
import ProductButtons from './ProductButtons';

const ProductPage = ({ product, cartItems, setCartItems }) => {
  const handleAddToCart = () => {
    // Create a new array with the existing cart items and add the current product
    const newCartItems = [...cartItems, product];
    // Update the cartItems state with the new array
    setCartItems(newCartItems);
  };

  return (
    <>
      <p className='truncate hover:underline cursor-pointer'>{product.ProductName}</p>
      <aside className='flex text-base'>
        <p className='flex-1'>{product.Price}$</p>
        <button className='hover:text-blue-300 cursor-pointer' onClick={handleAddToCart}>
          Add
        </button>
      </aside>
    </>
  );
};

export default ProductPage;
