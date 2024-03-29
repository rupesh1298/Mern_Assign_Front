import React, { useEffect, useState } from 'react'
import { ReactTyped } from "react-typed";
import image from "../Assets/book2.png"
import { useDispatch, useSelector } from 'react-redux';
import { clearToastMessage } from '../Redux/Slices/ToastSlice';
import toast, { Toaster } from 'react-hot-toast';
import { setSearch } from '../Redux/Slices/SearchSlice';
import { setCategory } from '../Redux/Slices/CategorySlice';
import Cookies from 'js-cookie';
import { MdClose } from 'react-icons/md'
import { CgProfile } from "react-icons/cg";
import NavList from './NavList';
import axios from 'axios';
import { loginUser, logoutUser, setUser } from '../Redux/Slices/AuthSLice';
import { setCart } from '../Redux/Slices/CartSlices';
axios.defaults.withCredentials = true;

export default function Navbar() {
  const dispatch = useDispatch();
  const [toggleNav, setToggleNav] = useState(false)
  const toastMessage = useSelector((state) => state.toast.message);

  //FOR USR DATA
  const auth = useSelector((state) => state.auth.isAuth)
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    getUser();
    const intervalId = setInterval(() => {
      // Check if the token is expired
      const token = sessionStorage.getItem("token");
     // console.log(token)
      if (!token) {
        sessionStorage.removeItem("User");
        window.location.reload();
      }
    }, 1000 * 60 * 20 ); // Check every second

    return () => clearInterval(intervalId);
  }, []);
  const getUser = async () => {
    try {
      const res = await axios.get('https://mern-assignment-vb2z.onrender.com/api/get-user', {
        withCredentials: true
      });
      const data = await res.data;
     // console.log(data.user._id)

      if (!data.success) {
        // If the response indicates failure, handle the error
        throw new Error(data.message);
      }
      else
      {
      sessionStorage.setItem("User", data.user._id)
      dispatch(setUser(data.user));
      dispatch(loginUser());
     // console.log(data.user);
      }
    } catch (error) {
      // Handle the error appropriately
      console.error("An error occurred while fetching user data:", error.message);
    }
  }

  useEffect(() => {
    getCartItems()
  }, [user])

  const getCartItems = async () => {
    try {
      let user = sessionStorage.getItem("User");
      console.log(user)
      const res = await axios.get(`https://mern-assignment-vb2z.onrender.com/api/get-cart/${user}`, {
        withCredentials: true
      });
      const data = await res.data;
      //console.log(data.cartItems)
      if (!data.success) {
        // If the response indicates failure, handle the error
        throw new Error(data.message);
      }
      dispatch(setCart(data.cartItems))

    } catch (error) {
      // Handle the error appropriately
      console.error("An error occurred while fetching user data:", error.message);
    }
  }

  useEffect(() => {
    if (toastMessage) {
      toast(toastMessage, {
        icon: '🥳 ',
      });
      dispatch(clearToastMessage());
    }
  }, [toastMessage, dispatch]);

  useEffect(() => {
    // Set up interval to fetch user data every 29 seconds
    const intervalId = setInterval(() => {
      sessionStorage.removeItem("User")
      dispatch(logoutUser())
      toast("Session get expired,Please Log In Again....", {
        icon: '😣 ',
      });
      window.location.reload();
    },1000 * 60 * 19); 

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
}, []);

  const handleData = (e) => {
    dispatch(setSearch(e.target.value))
    dispatch(setCategory("All"))
  }
  return (
    <nav className='flex md:flex-row flex-col  gap-1 justify-between mx-6 py-3 mb-10'>
      <div>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <h3 className='text-xl font-bold text-gray-600'>{new Date().toUTCString().slice(0, 16)}</h3>
        <div className='flex'><h1 className='text-2xl font-bold mr-2 items-center '>RAC BookStore </h1><img src={image} alt="" className='w-7 h-7 text-blue-800' /></div>
      </div>
      <div className='flex justify-between items-center '>
        <ReactTyped
          strings={[
            "Search Book here....",
          ]}
          typeSpeed={40}
          backSpeed={50}
          attr="placeholder"

        >
          <input type="text" className='p-3 border border-gray-400 rounded-lg outline-none text-md w-full md:w-[25vw]' onChange={handleData} />
        </ReactTyped>
        {/* <CgProfile className={`md:text-4xl text-2xl md:mt-0 md:ml-2 ml-32 -mt-36 text-slate-500  cursor-pointer`}/> */}

        {
          user && user.name ? (<p className={`w-8 h-8 text-center absolute top-3 right-5 md:right-8 md:top-6 text-2xl md:text-3xl cursor-pointer rounded-full w bg-blue-500 text-white ${toggleNav && 'hidden'} text-blue-800 `} onClick={() => setToggleNav(true)} >{user.name.charAt(0)}</p>) :
            (<CgProfile className={`absolute top-3 right-5 md:right-8 md:top-6 text-3xl md:text-4xl cursor-pointer ${toggleNav && 'hidden'} text-blue-800`} onClick={() => setToggleNav(true)} />)

        }
        {/* <CgProfile className={`absolute top-3 right-5 md:right-8 md:top-6 text-3xl md:text-4xl cursor-pointer ${toggleNav && 'hidden'} text-blue-800`} onClick={() => setToggleNav(true)} /> */}
        <MdClose className={`absolute top-3 right-5 md:right-8 md:top-6 text-3xl md:text-4xl cursor-pointer ${!toggleNav && 'hidden'} text-blue-800`} onClick={() => setToggleNav(false)} />
        {/*PASSING PROPS  */}
        <NavList toggleNav={toggleNav} setToggleNav={setToggleNav} auth={auth} />

      </div>

    </nav>
  )
}
