import React, { useState } from 'react';

const ButtonTwo = ({ label, endpoint, onClick }) => {
  const handleButtonClick = async () => {
    try {
      onClick(endpoint);
    } catch (error) {
      console.error(`Error fetching data from ${endpoint}:`, error);
    }
  };

  return (
    <button onClick={handleButtonClick} className='bg-blue-700 m-2 rounded-xl p-1 text-white'>
      {label}
    </button>
  );
};

export default ButtonTwo;
