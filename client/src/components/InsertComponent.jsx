import React, { useState } from 'react';

// Assume you have a function like this in your API
const insertNewSupplier = async (data) => {
  try {
    // Replace this with your actual API endpoint for inserting a new supplier
    const response = await fetch('http://localhost:4000/suppliers/new', {
      method: 'POST',
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

const InsertComponent = () => {
  const [newSupplierData, setNewSupplierData] = useState({
    supplierName: '',
    contactPerson: '',
    contactEmail: '',
    contactPhone: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSupplierData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleInsertSupplier = async (e) => {
    try {
      e.preventDefault()
      const result = await insertNewSupplier(newSupplierData);
      console.log(result);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form className='bg-blue-500 text-white w-1/3 mx-auto p-6 rounded-md flex flex-col'>
      <h2 className='mb-4'>Insert New Supplier</h2>
      <input
        placeholder='Supplier Name:'
        type="text"
        name="supplierName"
        value={newSupplierData.supplierName}
        onChange={handleInputChange}
        className='mb-2 p-2 border rounded text-black'
      />
      <input
        placeholder='Contact Person:'
        type="text"
        name="contactPerson"
        value={newSupplierData.contactPerson}
        onChange={handleInputChange}
        className='mb-2 p-2 border rounded text-black'
      />
      <input
        placeholder='Contact Email:'
        type="text"
        name="contactEmail"
        value={newSupplierData.contactEmail}
        onChange={handleInputChange}
        className='mb-2 p-2 border rounded text-black'
      />
      <input
        placeholder='Contact Phone:'
        type="text"
        name="contactPhone"
        value={newSupplierData.contactPhone}
        onChange={handleInputChange}
        className='mb-2 p-2 border rounded text-black'
      />
      <button onClick={(e) => handleInsertSupplier(e)} className='bg-white text-blue-500 p-2 rounded'>
        Insert New Supplier
      </button>
    </form>
  );
};

export default InsertComponent;
