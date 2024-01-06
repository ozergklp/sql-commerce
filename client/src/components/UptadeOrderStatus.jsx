import React, { useState } from 'react';

// Mock function for updating order status
const updateOrderStatus = async (data) => {
  try {
    // Replace this with your actual API endpoint for updating order status
    const response = await fetch('http://localhost:4000/orders/update-status', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    throw error;
  }
};

const UpdateComponent = () => {
  const [updateData, setUpdateData] = useState({
    orderId: '',
    newStatus: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdateStatus = async () => {
    try {
      const result = await updateOrderStatus(updateData);
      console.log(result);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className='bg-blue-500 text-white w-1/3 mx-auto p-6 rounded-md flex flex-col' >
      <h2>Update Order Status</h2>
      
        <input
        placeholder='Order ID'
          type="text"
          name="orderId"
          value={updateData.orderId}
          onChange={handleInputChange}
          className='rounded-xl p-1 m-2 text-black'
        />
  
      
        <input
        placeholder='New Status'
          type="text"
          name="newStatus"
          value={updateData.newStatus}
          onChange={handleInputChange}
          className='rounded-xl p-1 m-2 text-black'
        />
     
      <button onClick={handleUpdateStatus} className='bg-white text-blue-500 m-2 rounded-xl p-1'>Update Order Status</button>
    </div>
  );
};

export default UpdateComponent;
