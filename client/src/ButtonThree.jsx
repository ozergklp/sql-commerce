import React, { useState } from 'react';

const ButtonThree = ({ label, endpoint, onClick }) => {
  const handleButtonClick = async () => {
    try {
      const response = await fetch(`http://localhost:4000/${endpoint}`);
      const data = await response.json();
      onClick(data);
    } catch (error) {
      console.error(`Error fetching data from ${endpoint}:`, error);
    }
  };

  return (
    <button onClick={handleButtonClick} className='bg-green-500 m-2 rounded-xl p-1 text-white'>
      {label}
    </button>
  );
};

export default ButtonThree;
