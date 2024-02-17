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
        await axios.delete(`https://foodservice-krks.onrender.com/api/remove-from-cart/${item._id}`);

        // Display success message
        toast(`Removed ${item.name} successfully.`, {
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
        }
    }
};

  const handleIncrement = async (item) => {
    try {
      dispatch(plusItem(item));
      await axios.put(`https://foodservice-krks.onrender.com/api/increament-quantity/${item._id}`);
    } catch (error) {
      console.error("Error incrementing quantity:", error);
      // Handle the error appropriately (e.g., show a toast message)
      toast.error("An error occurred while incrementing quantity");
    }
  };


  const handleDecreament = async (item) => {
    try {
      dispatch(minusItem(item));
      await axios.put(`https://foodservice-krks.onrender.com/api/decreament-quantity/${item._id}`);
    } catch (error) {
      console.error("Error incrementing quantity:", error);
      // Handle the error appropriately (e.g., show a toast message)
      toast.error("An error occurred while incrementing quantity");
    }
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
                  <AiOutlinePlusCircle className='text-white text-2xl hover:bg-green-400 cursor-pointer mx-2 bg-green-300 rounded-full' onClick={() => handleIncrement(item)} />
                </div>
              </div>
            </div>
          </div>
        ))
      }

    </div>
  )
}
