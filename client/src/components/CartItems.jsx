import React from 'react';
import ProductButtons from './ProductButtons';

export default function CartItems({ cartItems, setCartItems }) {
  const handleIncrement = (productId) => {
    const updatedCartItems = cartItems.map(item =>
      item.ProductID === productId ? { ...item, count: item.count + 1 } : item
    );
    setCartItems(updatedCartItems);
  };

  const handleDecrement = (productId) => {
    const updatedCartItems = cartItems.map(item =>
      item.ProductID === productId ? { ...item, count: Math.max(1, item.count - 1) } : item
    );
    setCartItems(updatedCartItems);
  };

  return (
    <div className='flex flex-wrap justify-center '>
      {cartItems.map(product => (
        <div className='bg-blue-100 p-2 m-5 w-52 rounded-xl' key={product.ProductID}>
          <p className='truncate hover:underline cursor-pointer'>{product.ProductName}</p>
          <aside className='flex text-base'>
            <p className='flex-1'>{product.Price}$</p>
            <ProductButtons
              onIncrement={() => handleIncrement(product.ProductID)}
              onDecrement={() => handleDecrement(product.ProductID)}
            />
            <span className='ml-1'>{product.count}</span>
          </aside>
        </div>
      ))}
      {cartItems.length > 0 && (
        <button className='bg-blue-600 p-1 rounded-xl hover:shadow-xl hover:shadow-blue-300 text-white text-xl w-4/5'>
          Buy
        </button>
      )}
    </div>
  );
}