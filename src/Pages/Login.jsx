import axios from 'axios';
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ReactTyped } from "react-typed";
import { loginUser,setUser } from '../Redux/Slices/AuthSLice';
import { setLogMessage, setToastMessage } from '../Redux/Slices/ToastSlice';

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [user, setLoginUser] = useState({
    email: '',
    password: ''

  })
  const handlechange = (e) => {
    setLoginUser({ ...user, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post(`https://foodmato-zufp.onrender.com/login`, user);
        const data = response.data;
        console.log(data)
        if (response.status === 200) {
            dispatch(setLogMessage('Login SuccessFully...'));
            sessionStorage.setItem("User",data.id)
            navigate('/');
        } else if (response.status === 201) {
            // Handling other possible errors
            dispatch(setLogMessage('Login Failed...'));
            toast.error(data.message);
        }
    } catch (error) {
        // Network error or server error
        dispatch(setLogMessage('Login Failed...'));
        toast.error("User not Found Please register First");
    }
};
  return (
    <div className='flex items-center justify-center  h-screen'>
      <Toaster/>
      <form onSubmit={handleSubmit} className='bg-white rounded-lg p-5 shadow-lg flex flex-col gap-3 w-[80vw] md:w-[20vw]'>
        <h2 className='text-3xl text-center mb-8 text-gray-600 font-bold'>Login</h2>
        <ReactTyped
          strings={[
            "rchincholkar@gmail.com",
          ]}
          typeSpeed={40}
          backSpeed={50}
          attr="placeholder"
        >
          <input type="email" name='email' id='email' value={user.email} className='outline-none border rounded-lg px-3 py-2 focus:border-green-300 text-gray-600 w-[70vw] md:w-[18vw]' autoComplete='off' placeholder='rac@gmail.com' required onChange={handlechange} />
        </ReactTyped>

        <ReactTyped
          strings={[
            "*********",
          ]}
          typeSpeed={40}
          backSpeed={50}
          attr="placeholder"
        >
          <input type="password" name='password' id='password' value={user.password} className='outline-none border rounded-lg px-3 py-2 focus:border-green-300 text-gray-600 w-[70vw] md:w-[18vw] ' autoComplete='off' placeholder='**********' required onChange={handlechange} />
        </ReactTyped>
        <Link to={"/forget-pass"} className='text-sm text-red-600 hover:underline  hover:text-red-800 cursor-pointer -mb-1 text-center'>Forget Password</Link>
        <button type='submit' className='outline-none border rounded-lg px-3 py-2 text-white bg-green-500 hover:bg-green-600'>Login</button>
        <p className='flex text-xs text-gray-600 gap-2 -mt-1 flex-col text-center'>
          <span>Or</span>
          <Link to={"/signup"} className='text-blue-600 hover:underline  hover:text-blue-800 cursor-pointer'>Create an Account</Link>
        </p>
      </form>
  
    </div>
  )
}

export default Login
