import axios from 'axios';
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { ReactTyped } from "react-typed";

function ResetPass() {
  const[email,setEmail]=useState('')
  const navigate=useNavigate()
  const handlechange=(e)=>{
    setEmail(e.target.value)
  }
  // const handleEMail=async(e)=>{
  //   e.preventDefault()
  //   try {
  //     const res=await axios.put("http://localhost:7000/resetpass",{email})
  //     const data=await res.data
  //     if(data.success){
  //       toast.success(data.message);
  //       navigate('/verifyotp')
  //     }
  //   } catch (error) {
  //     console.log(error.message)
  //   }

  // }
  const handleEMail = async (e) => {
    e.preventDefault()
    try {
      const response = await toast.promise(
        axios.put("https://foodmato-zufp.onrender.com/resetpass", { email }), {
        loading: 'Sending OTP',
        success: (res) => {
          navigate('/verify-otp')
          return res.data.message
        },
        error: (err) => {
          return err.message
        }
      });

      // You can handle the response here if needed
      console.log(response);
    } catch (error) {
      toast.error("Failed to send OTP");
      console.log(error.message)
    }

  }

  return (
    <div className='flex items-center justify-center  h-screen'>
      <Toaster/>
      <form onSubmit={handleEMail} className='bg-white rounded-lg p-5 shadow-lg flex flex-col gap-3 w-[80vw] md:w-[20vw]'>
        <h2 className='md:text-3xl text-2xl mb-8 text-gray-600 font-bold'>Reset Your Password</h2>
        <span className=' text-gray-600'>Enter Your Email for Verification</span>
        <ReactTyped
          strings={[
            "rchincholkar@gmail.com",
          ]}
          typeSpeed={40}
          backSpeed={50}
          attr="placeholder"
        >
          <input type="email" name='email' id='email'value={email} className='outline-none border rounded-lg px-3 py-2 focus:border-green-300 text-gray-600 w-[70vw] md:w-[18vw]' autoComplete='off' placeholder='rac@gmail.com' required onChange={handlechange} />
        </ReactTyped>
        <button type='submit' className='outline-none border rounded-lg px-3 py-2 text-white bg-green-500 hover:bg-green-600 mt-6'>Send an OTP</button>
        <p className='flex text-xs text-gray-600 gap-2 -mt-1 flex-col text-center'>
          <span>Or</span>
        <Link to={"/login"} className='text-blue-600 hover:underline  hover:text-blue-800 cursor-pointer'>Login</Link>
        </p>
      </form>
    </div>
  )
}

export default ResetPass
