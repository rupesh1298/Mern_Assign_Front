import {configureStore} from '@reduxjs/toolkit'
import CartSlice from '../Slices/CartSlices';
import ToastSlice from '../Slices/ToastSlice';
import CategorySlice from '../Slices/CategorySlice';
import SearchSlice from '../Slices/SearchSlice';
import AuthSLice from '../Slices/AuthSLice';

const Store=configureStore({
    reducer:{
    cart:CartSlice,
    toast:ToastSlice,
    category:CategorySlice,
    search:SearchSlice,
    auth:AuthSLice
    }
})

export default Store;