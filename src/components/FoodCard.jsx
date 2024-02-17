import React, { useEffect, useState } from 'react'
import FoodData from "../data/FoodData.js"
import { IoStar } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-hot-toast';
import { setToastMessage } from '../Redux/Slices/ToastSlice.jsx';
import axios from 'axios';

import { addToCart } from '../Redux/Slices/CartSlices.jsx';
axios.defaults.withCredentials = true;


export default function FoodCard() {
    const dispatch = useDispatch();
    const[loginuser,setLoginUser]=useState(null);
    const search = useSelector((state) => state.search.search)
    const category = useSelector((state) => state.category.category)


    useEffect(() => {
        getUser()
      }, [])
      const getUser = async () => {
        try {
          const res = await axios.get('https://foodservice-krks.onrender.com/api/get-user', {
            withCredentials: true
          });
          const data = await res.data;
          if (!data.success) {
            // If the response indicates failure, handle the error
            throw new Error(data.message);
          }
          console.log(data.user.name);
            setLoginUser(data.user);
        } catch (error) {
          // Handle the error appropriately
          console.error("An error occurred while fetching user data:", error.message);
        }
      }
  
    //     try {
    //         if ( !loginuser) {
    //             console.log(loginuser);
    //             toast("Please login first to add an item to the cart", {
    //                 icon: '🤕 ',
    //             });
    //         } else {
    //             const response = await axios.post(`https://foodservice-krks.onrender.com/api/add-to-cart`, { userId: loginuser._id, item: item });
    //             const data = response.data;
    //             if (response.status === 200) {
    //                 dispatch(setToastMessage(`Added ${item.name} successfully!`));
    //                 dispatch(addToCart(item));
    //             } else if(response.status === 400 || response.status === 500) {
    //                 // Handle server-side errors
    //                 toast.error(data.message || "Failed to add item to cart");
    //             }
    //         }
    //     } catch (error) {
    //         console.error("Error adding item to cart:", error);
    //     } 
    // };
    const handleAdd = async (item) => {
        try {
            if (!loginuser) {
                // If the user is not logged in, display a message prompting them to log in
                toast("Please login first to add an item to the cart", {
                    icon: '🤕 ',
                });
            } else {
                await axios.post(`https://foodservice-krks.onrender.com/api/add-to-cart/${loginuser._id}`, item);
                    // If the item is added successfully, dispatch actions and display a success message
                    dispatch(setToastMessage(`Added ${item.name} successfully!`));
                    dispatch(addToCart(item));
                    // toast.success(`Added ${item.name} successfully!`);
            }
        } catch (error) {
            // Handle any unexpected errors
            console.error("Error adding item to cart:", error);
            toast.error("failed  to add to cart");
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
