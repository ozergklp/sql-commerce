import React from 'react';
import ProductButtons from './ProductButtons';

export default function CartItems({ cartItems }) {
  return (
    <div className='flex flex-wrap justify-center '>
      {cartItems.map(product => (
        <div className='bg-blue-100 p-2 m-5 w-52 rounded-xl' key={product.ProductID}>
          <p className='truncate hover:underline cursor-pointer'>{product.ProductName}</p>
          <aside className='flex text-base'>
            <p className='flex-1'>{product.Price}$</p>
            <ProductButtons />
          </aside>
        </div>
      ))}
    </div>
  );
}
