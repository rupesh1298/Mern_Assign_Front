import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {  useNavigate } from 'react-router-dom'
import { PropagateLoader } from 'react-spinners'
import { clearCart } from '../Redux/Slices/CartSlices'
import { ReactTyped } from "react-typed";
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'
axios.defaults.withCredentials = true;

export default function Success() {
 
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [cart, setCart] = React.useState([]);
  const [email, setEmail] = useState('')
  const[invoice,setInvoice]=useState(false)
  useEffect(() => {
    getCartItems();
  }, []);

 const getCartItems = async () => {
    try {
      let user = sessionStorage.getItem("User");
      console.log(user)
      const res = await axios.get(`https://foodservice-krks.onrender.com/api/get-cart/${user}`, {
        withCredentials: true
      });
      const data = await res.data;
      console.log(data.cartItems)
      if (!data.success) {
        // If the response indicates failure, handle the error
        throw new Error(data.message);
      }
      setCart(data.cartItems)

    } catch (error) {
      // Handle the error appropriately
      console.error("An error occurred while fetching user data:", error.message);
    }
  }
  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
      toast.success(<h1>Your Order Placed Successfully</h1>)
    }, 4000);
  }, [])

  const handleHome = async () => {
    dispatch(clearCart())
    await axios.get("https://foodservice-krks.onrender.com/api/clear-cart", { withCredentials: true })
    navigate("/")
  }
  const handlechange = (e) => {
    setEmail(e.target.value)
  }
  // const handleMail = async (e) => {
  //   e.preventDefault();
  //   try {
  //      await axios.post("https://foodmato-zufp.onrender.com/sendemail", { email: email, cart });
  //      setEmail('')
  //      setInvoice(true)
  //     toast.success("Invoice sent successfully!");
      
  //   } catch (error) {
  //     toast.error("Failed to send invoice.");
  //     console.error("Error sending email:", error);
  //   }
  // }
  const handleMail = async (e) => {
    e.preventDefault();
    try {
      const response = await toast.promise(
        axios.post("https://foodservice-krks.onrender.com/api/sendemail", { email: email, cart }),
        {
          loading: "Sending invoice...",
          success: (res) => {
            setEmail("");
            setInvoice(true);
            return "Invoice sent successfully!";
          },
          error: (err) => {
            console.error("Error sending email:", err);
            return "Failed to send invoice.";
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };
  


  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      {loading ? (
        <div className='flex flex-col items-center justify-center'>
          <h2 className='text-3xl font-bold text-gray-800 mb-2'>Order Successful!</h2>
          <p className='text-xl font-semibold text-gray-800 text-center'>Your Order has been Placed Successfully .</p>
          <button className='bg-green-500 p-3 rounded-lg w-[90vw] md:w-[18vw] mt-12 hover:bg-green-600 font-bold text-white' onClick={handleHome}>Continue Shopping</button>
          <form onSubmit={handleMail} className='bg-white rounded-lg p-5 shadow-lg flex flex-col gap-3 w-[80vw] md:w-[20vw] mt-5'>
            {
              !invoice ? (<ReactTyped
                strings={[
                  "rchincholkar@gmail.com",
                ]}
                typeSpeed={40}
                backSpeed={50}
                attr="placeholder"
              >
                <input type="email" name='email' id='email' value={email} className='outline-none border rounded-lg px-3 py-2 focus:border-green-300 text-gray-600 w-[70vw] md:w-[18vw]' autoComplete='off' placeholder='rac@gmail.com' required onChange={handlechange} />
              </ReactTyped>):(<ReactTyped
                strings={[
                  "Invoice sent Successfully",
                ]}
                typeSpeed={40}
                backSpeed={50}
              className='text-center text-green-500'
              >
            
              </ReactTyped>)
            }
            {
              !invoice?(<button type='submit' className='outline-none border rounded-lg px-3 py-2 text-white bg-cyan-500 hover:bg-cyan-600 mt-6'>Send Invoice !</button>):""
            }
          </form>
          
        </div>
      ) : (
        <PropagateLoader color="#36d7b7" />
      )}
    </div>
  )
}
