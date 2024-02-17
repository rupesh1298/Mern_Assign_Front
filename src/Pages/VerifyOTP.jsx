// import axios from 'axios';
// import React, { useState } from 'react'
// import toast from 'react-hot-toast';
// import { Link, useNavigate } from 'react-router-dom';
// import { ReactTyped } from "react-typed";

// function VerifyOTP() {
//   const navigate = useNavigate()
//   const [user, setUser] = useState({
//     otp: "",
//     password: ""

//   })
//   const handlechange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value })
//   }
//   const handleVerify = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.put("http://localhost:5000/api/verify-otp", { otp: user.otp, newPassword: user.password });
//       const data = res.data;
//       if (data && data.message) {
//         toast.success(data.message);
//         navigate('/login');
//       } else {
//         // Handle error or unexpected response
//         toast.error("Failed to verify OTP");
//       }
//     } catch (error) {
//       console.log(error.message);
//       // Handle error
//       toast.error("Failed to verify OTP");
//     }
//   };
 
  
//   return (
//     <div className='flex items-center justify-center  h-screen'>
//       <form onSubmit={handleVerify} className='bg-white rounded-lg p-5 shadow-lg flex flex-col gap-3 w-[80vw] md:w-[20vw]'>
//         <h2 className='text-3xl text-center mb-8 text-gray-600 font-bold'>Reset Your Password</h2>
//         <ReactTyped
//           strings={[
//             "Enter OTP sent to your Email",
//           ]}
//           typeSpeed={40}
//           backSpeed={50}
//           attr="placeholder"
//         >
//           <input type="tel" name='otp' id='otp' value={user.otp} className='outline-none border rounded-lg px-3 py-2 focus:border-green-300 text-gray-600 w-[70vw] md:w-[18vw]' autoComplete='off' required onChange={handlechange} />
//         </ReactTyped>


//         <ReactTyped
//           strings={[
//             "Enter new password",
//           ]}
//           typeSpeed={40}
//           backSpeed={50}
//           attr="placeholder"
//         >
//           <input type="password" name='password' id='password' value={user.password} className='outline-none border rounded-lg px-3 py-2 focus:border-green-300 text-gray-600 w-[70vw] md:w-[18vw] ' autoComplete='off' placeholder='**********' required onChange={handlechange} />
//         </ReactTyped>
//         {/* <Link to={"/forgot-password"} className='text-sm text-red-600 hover:underline  hover:text-red-800 cursor-pointer -mb-1 text-center'>Forget Password</Link> */}
//         <button type='submit' className='outline-none border rounded-lg px-3 py-2 text-white bg-green-500 hover:bg-green-600'>Reset Password</button>

//       </form>
//     </div>
//   )
// }

// export default VerifyOTP

import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { ReactTyped } from "react-typed";

function VerifyOTP() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    otp: "",
    password: ""
  });

  const handlechange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put("https://foodservice-krks.onrender.com/api/verify-otp", {
        otp: user.otp,
        newPassword: user.password
      });
      const data = res.data;
      if (data && data.success) {
        toast.success(data.message);
        navigate('/login');
      } else {
        // Handle error or unexpected response
        toast.error(data.message || "Failed to verify OTP");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      // Handle error
      toast.error("Failed to verify OTP");
    }
  };

  return (
    <div className='flex items-center justify-center  h-screen'>
      <form onSubmit={handleVerify} className='bg-white rounded-lg p-5 shadow-lg flex flex-col gap-3 w-[80vw] md:w-[20vw]'>
        <h2 className='text-3xl text-center mb-8 text-gray-600 font-bold'>Reset Your Password</h2>
        <ReactTyped
          strings={[
            "Enter OTP sent to your Email",
          ]}
          typeSpeed={40}
          backSpeed={50}
          attr="placeholder"
        >
          <input type="tel" name='otp' id='otp' value={user.otp} className='outline-none border rounded-lg px-3 py-2 focus:border-green-300 text-gray-600 w-[70vw] md:w-[18vw]' autoComplete='off' required onChange={handlechange} />
        </ReactTyped>

        <ReactTyped
          strings={[
            "Enter new password",
          ]}
          typeSpeed={40}
          backSpeed={50}
          attr="placeholder"
        >
          <input type="password" name='password' id='password' value={user.password} className='outline-none border rounded-lg px-3 py-2 focus:border-green-300 text-gray-600 w-[70vw] md:w-[18vw] ' autoComplete='off' placeholder='**********' required onChange={handlechange} />
        </ReactTyped>

        <button type='submit' className='outline-none border rounded-lg px-3 py-2 text-white bg-green-500 hover:bg-green-600'>Reset Password</button>
      </form>
    </div>
  );
}

export default VerifyOTP;
