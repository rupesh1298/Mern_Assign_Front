import axios from 'axios';
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ReactTyped } from "react-typed";
import { loginUser, setUser } from '../Redux/Slices/AuthSLice';
import { setLogMessage } from '../Redux/Slices/ToastSlice';


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
      const response = await axios.post(`https://mern-assignment-vb2z.onrender.com/api/login`, user);
      const data = await response.data;
      const createToken = data.token
      if (createToken) {
        sessionStorage.setItem("token", createToken)
        if (response.status === 200) {
          dispatch(setLogMessage('Login SuccessFully...'));
          dispatch(loginUser());
          dispatch(setUser(data));
          sessionStorage.setItem("User", data.name)
          findUser();
          
        }
      }
      else if (response.status === 400) {
        // Handling other possible errors
        dispatch(setLogMessage('Login Failed...'));
        setLoginUser({ email: '', password: '' });
        toast.error("Invalid Credentials");
      }
    } catch (error) {
      // Network error or server error

      dispatch(setLogMessage('Login Failed...'));
      setLoginUser({ email: '', password: '' });
      toast.error("Invalid Credential Or User not Found");
    }
  };

  const findUser = async () => {
    const res = await axios.get('https://mern-assignment-vb2z.onrender.com/api/get-user', {
      withCredentials: true
    })
    if(findUser){
      if(res.data.user.email==="admin@gmail.com" && res.data.user.name==="Admin"){
        navigate('/adminpanel')
      }else
      {
        navigate('/')
      }
    }else
    {
      navigate('/')
    }
  }
    return (
      <div className='flex items-center justify-center  h-screen'>
        <Toaster />
        <form onSubmit={handleSubmit} className='bg-white rounded-lg p-5 shadow-lg flex flex-col gap-3 w-[80vw] md:w-[20vw]'>
          <h2 className='text-3xl text-center mb-8 text-gray-600 font-bold'>Login</h2>
          <ReactTyped
            strings={[
              "rchincholkar1234@gmail.com",
            ]}
            typeSpeed={40}
            backSpeed={50}
            attr="placeholder"
          >
            <input type="email" name='email' id='email' value={user.email} className='outline-none border rounded-lg px-3 py-2 focus:border-blue-300 text-gray-600 w-[70vw] md:w-[18vw]' autoComplete='off' placeholder='rac@gmail.com' required onChange={handlechange} />
          </ReactTyped>

          <ReactTyped
            strings={[
              "*********",
            ]}
            typeSpeed={40}
            backSpeed={50}
            attr="placeholder"
          >
            <input type="password" name='password' id='password' value={user.password} className='outline-none border rounded-lg px-3 py-2 focus:border-blue-300 text-gray-600 w-[70vw] md:w-[18vw] ' autoComplete='off' placeholder='**********' required onChange={handlechange} />
          </ReactTyped>
          <Link to={"/forget-pass"} className='text-sm text-red-600 hover:underline  hover:text-red-800 cursor-pointer -mb-1 text-center'>Forget Password</Link>
          <button type='submit' className='outline-none border rounded-lg px-3 py-2 text-white bg-blue-500 hover:bg-blue-600'>Login</button>
          <p className='flex text-xs text-gray-600 gap-2 -mt-1 flex-col text-center'>
            <span>Or</span>
            <Link to={"/signup"} className='text-blue-600 hover:underline  hover:text-blue-800 cursor-pointer'>Create an Account</Link>
          </p>
        </form>

      </div>
    )
  }

  export default Login
