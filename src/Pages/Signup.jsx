import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ReactTyped } from "react-typed";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast'
function Signup() {
    <Toaster  position='top-center'/>
    const navigate=useNavigate()
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''

    })
    const handlechange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(`https://foodservice-krks.onrender.com/api/signup`, user)
        const data = await response.data;
        if (response.status === 201) {
             toast.success("Register SuccessFully...") 
             navigate('/login')
        }else if(response.status===400 || response.status===500){
            toast.error(data.message)
        }
    }
    return (
        <div className='flex items-center justify-center  h-screen'>
             <Toaster  position='top-center'/>
            <form onSubmit={handleSubmit} className='bg-white rounded-lg p-5 shadow-lg flex flex-col gap-3 w-[80vw] md:w-[20vw]'>
                <h2 className='text-3xl text-center mb-8 text-gray-600 font-bold'>SignUp</h2>
                <ReactTyped
                    strings={[
                        "Rupesh Chincholkar",
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    attr="placeholder"
                >
                    <input type="text" name='name' id='name' value={user.name} className='outline-none border rounded-lg px-3 py-2 focus:border-green-300 text-gray-600 w-[70vw] md:w-[18vw]' autoComplete='off' placeholder='rac@gmail.com' required onChange={handlechange} />
                </ReactTyped>
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
                {/* <Link to={"/forgot-password"} className='text-sm text-red-600 hover:underline  hover:text-red-800 cursor-pointer -mb-1 text-center'>Forget Password</Link> */}
                <button type='submit' className='outline-none border rounded-lg px-3 py-2 text-white bg-green-500 hover:bg-green-600'>SignUp</button>
                <p className='flex text-xs text-gray-600 gap-2 -mt-1 flex-col text-center'>
                    <span>Or</span>
                    <Link to={"/login"} className='text-blue-600 hover:underline  hover:text-blue-800 cursor-pointer'>Already Have an Acoount</Link>
                </p>
            </form>
        </div>
    )
}

export default Signup
