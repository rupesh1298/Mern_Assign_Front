import React from 'react'
import { ReactTyped } from "react-typed";

export default function Error() {
  return (
    <div className='flex justify-center items-center w-full h-screen md:text-4xl text-2xl'>
       <ReactTyped strings={["404 Page Not Found "]} typeSpeed={40} className='font-bold' />
    </div>
  )
}
