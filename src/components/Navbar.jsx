import React, { useEffect, useState } from 'react'
import { ReactTyped } from "react-typed";
import image from "../Assets/logo.png"
import { useDispatch, useSelector } from 'react-redux';
import { clearToastMessage } from '../Redux/Slices/ToastSlice';
import toast, { Toaster } from 'react-hot-toast';
import { setSearch } from '../Redux/Slices/SearchSlice';
import { setCategory } from '../Redux/Slices/CategorySlice';
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdClose } from 'react-icons/md'
import { CgProfile } from "react-icons/cg";
import NavList from './NavList';
import axios from 'axios';
import { loginUser, setUser } from '../Redux/Slices/AuthSLice';
import { setCart } from '../Redux/Slices/CartSlices';
axios.defaults.withCredentials = true;

export default function Navbar() {
  const dispatch = useDispatch();
  const [toggleNav, setToggleNav] = useState(false)
  const toastMessage = useSelector((state) => state.toast.message);
  const search = useSelector((state) => state.search.search)
  //FOR USR DATA
  const auth = useSelector((state) => state.auth.isAuth)
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    getUser()
  }, [])
  const getUser = async () => {
    const res = await axios.get('https://foodmato-zufp.onrender.com/getuser', {
      withCredentials: true
    });
    const data = await res.data;
    if (data.user !== undefined) {
      dispatch(setUser(data.user))
      dispatch(loginUser())
      console.log(data.user)
    }

  }
  useEffect(() => {
    if (user && user._id) {
      getItemCart();
    }
  }, [user,toastMessage]);

  const getItemCart = async () => {
    try {
      const response = await axios.get(`https://foodmato-zufp.onrender.com/get-cart/${user._id}`);
      dispatch(setCart(response.data.cartItems));
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };
  useEffect(() => {
    if (toastMessage) {
      toast(toastMessage, {
        icon: '🥳 ',
      });
      dispatch(clearToastMessage());
    }
  }, [toastMessage, dispatch]);


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
        <div className='flex'><h1 className='text-2xl font-bold mr-2 items-center '>Foodmato Foods </h1><img src={image} alt="" className='w-7 h-7 text-blue-800' /></div>
      </div>
      <div className='flex justify-between items-center '>
        <ReactTyped
          strings={[
            "Search food here....",
          ]}
          typeSpeed={40}
          backSpeed={50}
          attr="placeholder"

        >
          <input type="text" className='p-3 border border-gray-400 rounded-lg outline-none text-md w-full md:w-[25vw]' onChange={handleData} />
        </ReactTyped>
        {/* <CgProfile className={`md:text-4xl text-2xl md:mt-0 md:ml-2 ml-32 -mt-36 text-slate-500  cursor-pointer`}/> */}

        {
          user ? (<p className={`w-8 h-8 text-center absolute top-3 right-5 md:right-8 md:top-6 text-2xl md:text-3xl cursor-pointer rounded-full w bg-black text-white ${toggleNav && 'hidden'} text-blue-800 `} onClick={() => setToggleNav(true)} >{user.name.charAt(0)}</p>):
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
