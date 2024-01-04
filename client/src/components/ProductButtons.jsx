import React from 'react';

export default function ProductButtons({ onIncrement, onDecrement }) {
  return (
    <div className='mr-5'>
      <button className='mr-1 hover:text-blue-300' onClick={onIncrement}>
        +
      </button>
      <button className='hover:text-blue-300' onClick={onDecrement}>
        -
      </button>
    </div>
  );
}