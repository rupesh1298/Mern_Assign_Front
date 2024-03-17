import React, { useState } from 'react'
import { MdClose } from "react-icons/md";

import ItemCart from './ItemCart';
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';

import axios from 'axios';
axios.defaults.withCredentials = true;

export default function Cart() {
  const[active,setActive]=useState(false)
  const cart=useSelector((state)=>state.cart.data);
 
  const totalAmt=cart.reduce((acc,item)=>item.price * item.qty+acc,0);
  const totalItem=cart.reduce((acc,item)=>item.qty+acc,0);
  const handleCheck=async()=>{
    //FOR TOKEN VERIFICATION USE AXIOS.DEFAULTS.WITHCREDENTIAL
   const res=await axios.get("https://mern-assignment-vb2z.onrender.com/api/checkout",{withCredentials:true})
   const data=await res.data;
   //console.log(data);
   const {url}=await res.data; //directly destucture url
  //  navigate("/success") cant use bcz it will add url in front of http again
  window.location.href=url;
  }
  return (
    <>
      <div className={`fixed right-0 top-0 md:w-[25vw] w-full h-full bg-white rounded-lg p-5 ${active ? "translate-x-0":"translate-x-full"} transition-all duration-300 ease-linear z-50`}>
        <div className='flex justify-between my-6 items-center'>
          <span className='text-2xl font-bold text-gray-700'>My Cart</span>
          <MdClose className='text-3xl text-red-700 hover:transition-transform transition-all duration-500 ease-in-out hover:rotate-180 border-2 border-red-700 rounded-lg font-bold cursor-pointer'
          onClick={()=>setActive(!active)} />
        </div>
        
        <hr className='text-gray-600 h-5 font-bold ' />
       {
        cart.length >0 ?(<div><ItemCart/>
        <div className='absolute bottom-0 my-12 '>
          <h3 className='font-semibold text-gray-800'>Items : {totalItem} </h3>
          <h3 className='font-semibold text-gray-800'>Total Amount : ₹ {totalAmt} <sub className='text-red-400'>(Including GST *)</sub> </h3>
          <hr className='text-gray-600 h-5 font-bold mt-4' />
          <button className='bg-blue-500 p-3 rounded-lg w-[90vw] md:w-[23vw] mt-4 hover:bg-blue-600 font-bold text-white' onClick={handleCheck}>Checkout</button>
        </div></div>):(<div><h3 className='text-2xl font-bold text-gray-700 flex  items-center  '>Your Cart is Empty..!</h3></div>)
       }
        
      </div>
      <FaShoppingCart className={`text-blue-800 rounded-full bg-white shadow-md text-[50px] p-3 fixed bottom-5 right-3 md:bottom-10 md:right-8 cursor-pointer ${cart.length > 0 && "animate-bounce delay-500 transition-all"}`}  onClick={()=>setActive(!active)} />
    </>
  )
}
