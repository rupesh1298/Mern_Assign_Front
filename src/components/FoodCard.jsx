import React, { useEffect, useState } from 'react'
import FoodData from "../data/FoodData.js"
import { IoStar } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-hot-toast';
import { setToastMessage } from '../Redux/Slices/ToastSlice.jsx';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export default function FoodCard() {
    const dispatch = useDispatch();
    const[user,setLoginUser]=useState({});
  
    const cart = useSelector((state) => state.cart.data);
    const search = useSelector((state) => state.search.search)
    const category = useSelector((state) => state.category.category)


    useEffect(() => {
        getUser()
      }, [])
      const getUser = async () => {
        const res = await axios.get('https://foodmato-zufp.onrender.com/getuser', {
          withCredentials: true
        });
        const data = await res.data;
        console.log(data.user)
        setLoginUser(data.user)
       
    }
    const handleAdd = async (item) => {
        try {
            if ( !user) {
                toast("Please login first to add an item to the cart", {
                    icon: '🤕 ',
                });
            } else {
                console.log(user._id)
                const response = await axios.post(`https://foodmato-zufp.onrender.com/add-to-cart`, { userId: user._id, item: item });
                const data = response.data;
                if (response.status === 200) {
                    dispatch(setToastMessage(`Added ${item.name} successfully!`));
                } else {
                    // Handle server-side errors
                    toast.error(data.message || "Failed to add item to cart");
                }
            }
        } catch (error) {
            console.error("Error adding item to cart:", error);
            toast.error("An error occurred while adding item to cart");
        }
    };
    
    return (
        <div className='flex flex-wrap gap-10 mt-12 md:mx-6 justify-center md:justify-start mb-10'>
            
            {
                FoodData.filter((food) => {
                    if (category === "All") {
                        return food.name.toLowerCase().includes(search.toLowerCase());
                    } else {
                        return category === food.category && food.name.toLowerCase().includes(search.toLowerCase())
                    }
                }).map((item, id) => (
                    <div className='font-bold w-[250px]  md:h-auto h-auto p-5 bg-white flex flex-col gap-2 rounded-lg shadow-lg' key={id}>
                        <img src={item.img} alt="" className='w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out' />
                        <div className='flex justify-between'>
                            <h2>{item.name}</h2>
                            <span className='text-green-500'>₹{item.price}</span>
                        </div>
                        <p className='font-normal mb-2'>{item.desc.slice(0, 50)}...</p>
                        <div className='flex items-center justify-between mt-auto'>
                            <span className='flex items-center '> <IoStar className='text-yellow-300 mr-1' />{item.rating}</span>
                            <button className='p-2 text-white bg-green-500 hover:bg-green-700 rounded-lg ' onClick={() => handleAdd(item)} >Add to Cart</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
