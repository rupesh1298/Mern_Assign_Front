import React, { useEffect, useState } from 'react'
import { ReactTyped } from "react-typed";
import BookData from "../data/BookData.js"
import { useDispatch, useSelector } from 'react-redux'
import { filterData } from '../Redux/Slices/CartSlices.jsx';
import { setCategory } from '../Redux/Slices/CategorySlice.jsx';
export default function CategoryMenu() {
  const [categories, setCategories] = useState([]);

  const dispatch = useDispatch();
  const listUniqueCategories = () => {
    const data = [...new Set(BookData.map((food) => food.category))]
    setCategories(data);
  }
  useEffect(() => {
    listUniqueCategories();
  }, [])
  const selectedCategory = useSelector((state) => state.category.category);
  return (
    <div className='mx-6'>
      <h3 className='mb-2 text-xl font-semibold'>Find the <ReactTyped
        strings={[
          "best book of Fantacy....",
          "best book of Epic....",
          "best book of Historical Fiction....",
        ]}
        typeSpeed={40}
        backSpeed={50}
        loop
        className='text-blue-500 font-bold'
      >
      </ReactTyped></h3>
      <div className='flex gap-3 md:overflow-hidden overflow-x-scroll my-5 scroll-smooth'>
        <button className={`px-3 py-2 rounded-lg  font-bold hover:bg-blue-600 hover:text-white ${selectedCategory === "All" && 'bg-blue-600 text-white'}`} onClick={() => dispatch(setCategory("All"))}>All</button>
        {
          categories.map((item, id) => (
            <button className={`px-3 py-2 rounded-lg font-bold hover:bg-blue-600 hover:text-white ${selectedCategory === item && "bg-blue-600 text-white"}`} key={id} onClick={() => dispatch(setCategory(item))} value={item}>{item}</button>
          ))
        }


      </div>
    </div>
  )
}
