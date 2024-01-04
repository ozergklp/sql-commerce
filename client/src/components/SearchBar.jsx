import React from 'react'
import { AiFillDribbbleCircle, AiOutlineSearch } from "react-icons/ai";


export default function SearchBar({setProducts}) {
  const [searchStr, setSearchStr] = React.useState('')
  const handleSearch = async (string) => {
    try {
      const response = await fetch('http://localhost:4000/products/search/' + string);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }

  };
  return (
    <div className='bg-blue-100 rounded-2xl w-72 sm:w-96 mx-auto flex p-3 justify-center '>
        <input className='flex-1 bg-transparent focus:outline-none' type="text" value={searchStr} onChange={(e) => setSearchStr(e.target.value)} />
        <AiOutlineSearch className='text-2xl hover:text-blue-500 cursor-pointer' onClick={() => handleSearch(searchStr)} />
    </div>
  )
}
