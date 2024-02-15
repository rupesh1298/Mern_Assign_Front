import React,{useEffect} from 'react'
import Navbar from '../components/Navbar'
import CategoryMenu from '../components/CategoryMenu'
import FoodItems from '../components/FoodItems'
import Cart from '../components/Cart'
import { useSelector, useDispatch } from 'react-redux';
import { clearToastMessage } from '../Redux/Slices/ToastSlice';
import toast from 'react-hot-toast'



export default function Home() {
  
  return (
    <div>
      <Navbar />
      <CategoryMenu />
      <FoodItems />
      <Cart />
     
    </div>
  );
}
