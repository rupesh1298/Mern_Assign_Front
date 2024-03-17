import axios from 'axios';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
axios.defaults.withCredentials = true;
export default function ProtectedRoute() {
  const [cart, setCart] = React.useState([]);
  useEffect(() => {
      getItemCart();
  }, []);

  const getItemCart = async () => {
    try {
      const user=sessionStorage.getItem("User");
      const res=await axios.get(`https://foodmato-8suf.onrender.com/getuserbyemail`,{email:user},{
        withCredentials: true,
      })
      const data=await res.data;
      const response = await axios.get(`https://foodmato-8suf.onrender.com/get-cart/${data._id}`);
      setCart(response.data.cartItems);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };
  return cart.length >0 ?<Outlet/> :<Navigate to={"/"}></Navigate>
}
