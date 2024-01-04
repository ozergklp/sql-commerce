import React from 'react'
import { AiFillDribbbleCircle, AiOutlineSearch } from "react-icons/ai";


export default function SearchBar() {
  return (
    <div className='bg-blue-100 rounded-2xl w-72 sm:w-96 mx-auto flex p-3 justify-center '>
        <input className='flex-1 bg-transparent focus:outline-none' type="text" />
        <AiOutlineSearch className='text-2xl' />
    </div>
  )
}
