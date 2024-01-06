import React, { useState } from 'react';

// Mock function for deleting a review
const deleteReview = async (reviewId) => {
  try {
    // Replace this with your actual API endpoint for deleting a review
    const response = await fetch(`http://localhost:4000/reviews/delete/${reviewId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    throw error;
  }
};

const DeleteComponent = () => {
  const [reviewId, setReviewId] = useState('');

  const handleInputChange = (e) => {
    setReviewId(e.target.value);
  };

  const handleDeleteReview = async () => {
    try {
      const result = await deleteReview(reviewId);
      console.log(result);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className='bg-blue-500 text-white w-1/3 mx-auto p-6 rounded-md flex flex-col items-center'>
      <h2>Delete Review</h2>
      <input
      name='delete'
        placeholder='Review ID:'
        type="text"
        value={reviewId}
        onChange={handleInputChange}
        className='rounded-xl p-1 m-2 border text-black'
      />
      <button onClick={handleDeleteReview} className='bg-white text-blue-500 m-2 rounded-xl p-1'>
        Delete Review
      </button>
    </div>
  );
};

export default DeleteComponent;
