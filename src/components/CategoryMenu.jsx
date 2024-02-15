import React, { useEffect, useState } from 'react'
import { ReactTyped } from "react-typed";
import FoodData from "../data/FoodData.js"
import { useDispatch, useSelector } from 'react-redux'
import { filterData } from '../Redux/Slices/CartSlices.jsx';
import { setCategory } from '../Redux/Slices/CategorySlice.jsx';
export default function CategoryMenu() {
  const [categories, setCategories] = useState([]);

  const dispatch = useDispatch();
  const listUniqueCategories = () => {
    const data = [...new Set(FoodData.map((food) => food.category))]
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
          "best food for Lunch....",
          "best food for Breakfast....",
          "best food for Dinner....",
        ]}
        typeSpeed={40}
        backSpeed={50}
        loop
        className='text-green-400 font-bold'
      >
      </ReactTyped></h3>
      <div className='flex gap-3 md:overflow-hidden overflow-x-scroll my-5 scroll-smooth'>
        <button className={`px-3 py-2 rounded-lg bg-gray-200 font-bold hover:bg-green-500 hover:text-white ${selectedCategory === "All" && "bg-green-500 text-white"}`} onClick={() => dispatch(setCategory("All"))}>All</button>
        {
          categories.map((item, id) => (
            <button className={`px-3 py-2 rounded-lg bg-gray-200 font-bold hover:bg-green-500 hover:text-white ${selectedCategory === item && "bg-green-500 text-white"}`} key={id} onClick={() => dispatch(setCategory(item))} value={item}>{item}</button>
          ))
        }


      </div>
    </div>
  )
}
