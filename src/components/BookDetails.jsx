import React from 'react'
import { IoStar } from "react-icons/io5";
import BookData from '../data/BookData';
import { useNavigate, useParams } from 'react-router-dom';

const BookDetails = () => {
    const navigate = useNavigate();
    const {id}= useParams();
    const bookId = parseInt(id, 10)
    const book = BookData.find((book) => book.id === bookId);
    console.log(id);

    const handleHome = () => {
        navigate('/')
    }
  return (
    <div className='flex justify-center  place-items-center mt-14'>
    <div className='font-bold w-[250px] md:w-[500px] md:h-[700px] h-auto p-5 bg-white flex flex-col gap-2 rounded-lg shadow-lg'>
      <img src={book.cover_image}  className='w-auto h-[300px] cursor-grab transition-all duration-500 ease-in-out' />
      <div className='flex justify-between'>
        <h2 className='md:text-4xl'>{book.title}</h2> 
        <span className='text-green-500 md:text-3xl'>₹{book.price}</span>
      </div>
      <h2 className='text-blue-400 font-bold md:text-3xl'>Author- {book.author}</h2>
      <h2 className='text-slate-400 font-bold md:text-3xl'>Publication year- {book.publication_year}</h2>
      <h2 className='text-slate-400 md:text-2xl'>Genre- {book.category}</h2>
      <p className='font-medium mb-2 md:text-2xl'>{book.description}</p>
      <div className='flex items-center justify-between mt-auto'>
        <span className='flex items-center md:text-2xl '> <IoStar className='text-yellow-300 mr-1 md:text-2xl' />{book.rating}</span>
        <button className='p-2 text-white bg-blue-500 hover:bg-blue-700 rounded-lg mb-3' onClick={handleHome}>Back to Home</button>
      </div>
    </div>
  </div>
  )
}

export default BookDetails