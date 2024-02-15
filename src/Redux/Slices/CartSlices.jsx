import { createSlice } from '@reduxjs/toolkit'

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        data: []
    },
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.data.find(item => item.id === action.payload.id);
            if (existingItem) {
                // If item already exists, update its quantity
                existingItem.qty += 1;
            } else {
                // If item doesn't exist, add it to the cart
                state.data.push(action.payload);
            }
        },
        removeFromCart: (state, action) => {
            const newData = state.data.filter((item) => item.id !== action.payload)
            state.data = newData;
        },
        plusItem: (state, action) => {
            const existingItem = state.data.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.qty += 1;
            }
        },
        minusItem: (state, action) => {
            const existingItem = state.data.find(item => item.id === action.payload.id);
            if (existingItem) {
                if (existingItem.qty > 1) {
                    existingItem.qty -= 1;
                }
                else {
                    const newData = state.data.filter((item) => item.id !== action.payload.id)
                    state.data = newData;
                }
            }
        },
        clearCart: (state, action) => {
            state.data = []
        },
        setCart:(state,action)=>{
            state.data = action.payload
        }

    }
})

export const { addToCart, removeFromCart, plusItem, minusItem, clearCart,setCart } = CartSlice.actions;
export default CartSlice.reducer;