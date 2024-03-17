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
      const token = sessionStorage.setItem("token","false");
      //console.log(token)
      if (!token) {
      sessionStorage.removeItem("User")
      sessionStorage.removeItem("token")
      dispatch(logoutUser())
      toast("Session get expired,Please Log In Again....", {
        icon: '😣 ',
      });
      window.location.reload();
    }
    },1000 * 60 * 20 ); 

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
}, [dispatch]);

  // const handleLogOut = async () => {
  //   try {
  //     const response = await axios.get('https://foodmato-8suf.onrender.com/api/logout', {
  //       withCredentials: true
  //     });
  //     const data = response.data;
  //     if (data.token === false) {
  //       sessionStorage.removeItem("User");
  //       sessionStorage.removeItem("token");
  //       dispatch(logoutUser());
  //       toast("Logout Successfully", {
  //         icon: '🙄 ',
  //       });
  //       window.location.reload();
  //     } else {
  //       toast.error("Logout Failed. Please try again later.");
  //     }
  //   } catch (error) {
  //     toast.error("Logout Failed. Please try again later.");
  //   }
  //   // toast.success("Dont Worry,You will logout automatically after 20 minutes")
  // };
  const handleLogOut = async () => {
    // try {
    //     // Make a request to the backend logout endpoint
    //     const response = await axios.get('https://mern-assignment-vb2z.onrender.com/api/logout');
    //     const data = response.data;
    //     if (data.success) {
    //         // Clear user data from sessionStorage or localStorage if needed
    //         sessionStorage.removeItem('User');
    //         sessionStorage.removeItem('token');
    //         dispatch(logoutUser());
    //         toast("Logout Successfully", {
    //           icon: '🙄 ',
    //         });
    //         window.location.reload();
    //         // Perform other logout-related tasks (e.g., redirecting to login page)
    //     } else {
    //         // Handle logout failure
    //         console.error('Logout failed:', data.message);
    //         // Display error message to the user if needed
    //     }
    // } catch (error) {
    //     // Handle network errors or other issues
    //     console.error('Logout error:', error);
    //     // Display error message to the user if needed
    // }
    toast("Don't worry You will Automatically Logout after 20min", {
                 icon: '🥱 ',
            });
};
  
  return (
    <div className={`${!toggleNav && 'translate-x-[200px]'} fixed md:top-20 top-12 md:right-5 right-1  text-blue-600 bg-transparent bg-opacity-10 backdrop-blur-sm text-start shadow-lg p-2 rounded-lg transition-all duration-500 ease-in-out`}>
      {
        auth ? (<li className=' text-gray-600 hover:text-gray-800 select-none list-none cursor-pointer' onClick={handleLogOut}>Logout</li>) : (<div className='flex flex-col md:text-xl text-sm'><Link to={'/login'} className='hover:text-gray-800 select-none ml-[2px] '>Login</Link>
          <Link to={'/signup'} className='hover:text-gray-800 select-none'>SignUp</Link></div>)
      }
    </div>
  )
}
