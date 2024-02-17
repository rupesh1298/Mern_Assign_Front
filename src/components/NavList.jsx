import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { logoutUser } from '../Redux/Slices/AuthSLice';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import toast from 'react-hot-toast';
axios.defaults.withCredentials = true;
export default function NavList({ toggleNav, setToggleNav, auth }) {
  const dispatch = useDispatch();

  useEffect(() => {
    // Set up interval to fetch user data every 29 seconds
    const intervalId = setInterval(() => {
      sessionStorage.removeItem("User")
      dispatch(logoutUser())
      toast("Session get expired,Please Log In Again....", {
        icon: '😣 ',
      });
      window.location.reload();
    },1000 * 58 * 19); 

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
}, [dispatch]);
  const handleLogOut = async () => {
   const response= await axios.get('https://foodservice-krks.onrender.com/api/logout', {
      withCredentials
        : true
    });

      sessionStorage.removeItem("User")
      dispatch(logoutUser())
      toast("Logout Successfully", {
        icon: '🙄 ',
      });
      window.location.reload();
   
  }
  return (
    <div className={`${!toggleNav && 'translate-x-[200px]'} fixed md:top-20 top-12 md:right-5 right-1  text-blue-600 bg-transparent bg-opacity-10 backdrop-blur-sm text-start shadow-lg p-2 rounded-lg transition-all duration-500 ease-in-out`}>
      {
        auth ? (<li className=' text-gray-600 hover:text-gray-800 select-none list-none cursor-pointer' onClick={handleLogOut}>Logout</li>) : (<div className='flex flex-col md:text-xl text-sm'><Link to={'/login'} className='hover:text-gray-800 select-none ml-[2px] '>Login</Link>
          <Link to={'/signup'} className='hover:text-gray-800 select-none'>SignUp</Link></div>)
      }
    </div>
  )
}
