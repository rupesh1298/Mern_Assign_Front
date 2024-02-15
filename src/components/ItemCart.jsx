import React, { useEffect, useState } from 'react'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { BsTrash3Fill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, plusItem, minusItem } from '../Redux/Slices/CartSlices';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';


export default function ItemCart() {

  const cart = useSelector((state) => state.cart.data)
  const dispatch = useDispatch()
  const removeCartItem = async (id, item) => {
    dispatch(removeFromCart(id)); // Dispatch action to remove item from Redux store
    await axios.delete(`https://foodmato-zufp.onrender.com/remove-from-cart/${item._id}`); // Send request to server to remove item from cart
    toast(`Removed ${item.name} SuccessFully.`, {
      icon: '😣',
    });
  };
 const handleIncreament = async (item) => {
  dispatch(plusItem(item));
  await axios.put(`https://foodmato-zufp.onrender.com/increment-qty/${item._id}`);
 }

 const handleDecreament=async(item)=>{
  dispatch(minusItem(item));
  await axios.put(`https://foodmato-zufp.onrender.com/decrement-qty/${item._id}`);
 }
  return (
    <div className='overflow-hidden'>
      {
        cart.map((item, Id) => (
          <div className='shadow-lg flex gap-3 p-2 rounded-lg bg-gray-100 mb-8 ' key={Id}>
            <BsTrash3Fill className='absolute right-9 text-red-600 text-xl cursor-pointer' onClick={() => removeCartItem(item.id, item)} />
            <img src={item.img} alt="" className='w-[60px] h-[60px]' />
            <div className='leading-5' >
              <h2 className='font-bold text-gray-700'>{item.name}</h2>
              <div className='flex justify-between my-2'>
                <span className='text-green-500 font-bold'>₹ {item.price}</span>
                <div className='flex absolute right-7 mt-2 items-center'>

                  <AiOutlineMinusCircle className=' text-white text-2xl hover:bg-green-400 cursor-pointer mx-2 bg-green-300 rounded-full' onClick={() => handleDecreament(item)} />
                  <span>{item.qty}</span>
                  <AiOutlinePlusCircle className='text-white text-2xl hover:bg-green-400 cursor-pointer mx-2 bg-green-300 rounded-full' onClick={() => handleIncreament(item)} />
                </div>
              </div>
            </div>
          </div>
        ))
      }

    </div>
  )
}
