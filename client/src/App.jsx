import React, { useState } from 'react';
import Button from './Button';
import InsertComponent from './components/InsertComponent';
import UpdateComponent from './components/UptadeOrderStatus';
import DeleteComponent from './components/DeleteReview';
import ButtonTwo from './ButtonTwo';

const App = () => {
  const [result, setResult] = useState(null);
  const [activeComponent, setActiveComponent] = useState(null);

  const handleButtonClick = async (data) => {
    setResult(data);
    setActiveComponent(null); // Reset the active component
  };

  const handleButtonTwoClick = (endpoint) => {
    setResult(null)
    switch (endpoint) {
      case 'insert-new-supplier':
        setActiveComponent('insert');
        break;
      case 'update-order-status':
        setActiveComponent('update');
        break;
      case 'delete-review':
        setActiveComponent('delete');
        break;
      default:
        setActiveComponent(null);
        break;
    }
  };


  return (
    <>

    <h1 className='text-center text-3xl m-2'>E-Commerce Admin Dashboard</h1>
    <div className='flex flex-wrap justify-center'>
      

      <Button label="Get Total Users" endpoint="users/count" onClick={handleButtonClick} />
      <Button label="Get Average Product Price" endpoint="products/average-price" onClick={handleButtonClick} />
      <Button label="Get Max Stock Quantity" endpoint="products/max-stock" onClick={handleButtonClick} />
      <Button label="Get Total Order Amount by User" endpoint="orders/total-amount-by-user" onClick={handleButtonClick} />
      <Button label="Get Product Count by Category" endpoint="products/count-by-category" onClick={handleButtonClick} />
      <Button label="Get Average Rating by Product" endpoint="products/average-rating" onClick={handleButtonClick} />
      <Button label="Get Total Quantity by Order" endpoint="orders/total-quantity-by-order" onClick={handleButtonClick} />
      <Button label="Get Average Price by Category" endpoint="average-price-by-category" onClick={handleButtonClick} />
      <Button label="Get Average User Rating" endpoint="reviews/average-user-rating" onClick={handleButtonClick} />
      <Button label="Get Review Count by Product" endpoint="reviews/count-by-product" onClick={handleButtonClick} />

      <ButtonTwo label="Insert New Supplier" endpoint="insert-new-supplier" onClick={handleButtonTwoClick} />
        <ButtonTwo label="Update Order Status" endpoint="update-order-status" onClick={handleButtonTwoClick} />
        <ButtonTwo label="Delete Review by ID" endpoint="delete-review" onClick={handleButtonTwoClick} />
      
  
     
    </div>


    {activeComponent === 'insert' && <InsertComponent onInsert={handleButtonClick} />}
      {activeComponent === 'update' && <UpdateComponent onUpdate={handleButtonClick} />}
      {activeComponent === 'delete' && <DeleteComponent onDelete={handleButtonClick} />}
    
    {result && (
        <div>
          <h2>Result:</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
   
    </>
    
  );
};

export default App;
