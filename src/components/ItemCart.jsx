import React, { useEffect, useState } from 'react'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { BsTrash3Fill } from "react-icons/bs";
import { useDispatch, useSelector} from 'react-redux';
import { removeFromCart, plusItem, minusItem} from '../Redux/Slices/CartSlices';
import toast from 'react-hot-toast';
import axios from 'axios';


export default function ItemCart() {
//  const[cart,setCart]=useState([])
const cart=useSelector((state)=>state.cart.data);
 const dispatch = useDispatch()
  
  const removeCartItem = async (id, item) => {
    try {
        // Dispatch action to remove item from Redux store
        dispatch(removeFromCart(id));

        // Send request to server to remove item from cart
        await axios.delete(`https://mern-assignment-vb2z.onrender.com/api/remove-from-cart/${item._id}`);

        // Display success message
        toast(`Removed ${item.title} successfully.`, {
            icon: '😣',
        });
    } catch (error) {
        // Log the error for debugging
        console.error("Error removing item from cart:", error);

        // Display an appropriate error message based on the error
        if (error.response && error.response.status === 404) {
            // Item not found
            toast.error("Item not found.");
        } else {
            // Other errors
            toast.error("An error occurred while removing the item from the cart.");
            window.location.reload();
        }
    }
};

  const handleIncrement = async (item) => {
    try {
      dispatch(plusItem(item));
      await axios.put(`https://mern-assignment-vb2z.onrender.com/api/increament-quantity/${item._id}`);
    } catch (error) {
      console.error("Error incrementing quantity:", error);
      // Handle the error appropriately (e.g., show a toast message)
      toast.error("An error occurred while incrementing quantity");
      window.location.reload();
    }
  };


  const handleDecreament = async (item) => {
    try {
      dispatch(minusItem(item));
      await axios.put(`https://mern-assignment-vb2z.onrender.com/api/decreament-quantity/${item._id}`);
    } catch (error) {
      console.error("Error incrementing quantity:", error);
      // Handle the error appropriately (e.g., show a toast message)
      toast.error("An error occurred while incrementing quantity");
      window.location.reload();
    }
  }
  return (
    <div className='overflow-y-scroll h-[60vh] '>
      {
        cart.map((item, Id) => (
          <div className='shadow-lg flex gap-4 p-2 rounded-lg bg-gray-100 mb-8 ' key={Id}>
            <BsTrash3Fill className='text-red-600 text-xl cursor-pointer flex items-center justify-center' onClick={() => removeCartItem(item.id, item)} />
            <img src={item.cover_image} alt="" className='w-[60px] h-[60px]' />
            <div className='leading-5' >
              <h2 className='font-bold text-gray-700'>{item.title}</h2>
              <div className='flex justify-between my-2 gap-14 md:gap-24'>
                <span className='text-blue-500 font-bold mt-2'>₹ {item.price}</span>
                <div className='flex  mr-12 mt-2 items-center justify-end'>
                  <AiOutlineMinusCircle className=' text-white text-2xl hover:bg-blue-400 cursor-pointer mx-2 bg-blue-300 rounded-full' onClick={() => handleDecreament(item)} />
                  <span>{item.qty}</span>
                  <AiOutlinePlusCircle className='text-white text-2xl hover:bg-blue-400 cursor-pointer mx-2 bg-blue-300 rounded-full' onClick={() => handleIncrement(item)} />
                </div>
              </div>
            </div>
          </div>
        ))
      }

    </div>
  )
}
