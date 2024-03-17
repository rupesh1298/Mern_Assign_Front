import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'


import Cart from '../components/Cart'
import { useSelector, useDispatch } from 'react-redux';
import { clearToastMessage } from '../Redux/Slices/ToastSlice';
import toast from 'react-hot-toast'
import CategoryMenu from '../components/Category';
import BookItems from '../components/BookItems';



export default function Home() {

  return (
    <div>
      <Navbar />
      <CategoryMenu />
      <BookItems/>
      <Cart />

    </div>
  );
}
