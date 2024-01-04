import React from 'react';
import ProductButtons from './ProductButtons';

export default function ProductPage({ product, cartItems, setCartItems }) {
  const handleAddToCart = () => {
    const existingCartItem = cartItems.find(item => item.ProductID === product.ProductID);

    if (existingCartItem) {
      return;
    }
    setCartItems([...cartItems, { ...product, count: 1 }]);
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
}
