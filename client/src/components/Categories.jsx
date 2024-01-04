import React, { useEffect, useState } from 'react';

export default function Categories  ({setProducts}) {
  const [categories, setCategories] = useState([]);

  const handleSelectCategory = async (category) => {
    try {
      const response = await fetch('http://localhost:4000/categories/' + category);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }

  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:4000/categories');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <div className='flex flex-wrap justify-center pt-4'>
        {categories.map(category => (
          <p
            onClick={() => handleSelectCategory(category.CategoryName)}
            key={category.CategoryID}
            className='bg-blue-100 mx-4 my-2 cursor-pointer border-blue-100 border-2 hover:border-blue-300 p-2 rounded-xl'>
            {category.CategoryName}
          </p>
        ))}
      </div>
    </div>
  );
};
