// In your Redux slices (ToastSlice.js)
import { createSlice } from '@reduxjs/toolkit';

const ToastSlice = createSlice({
  name: 'toast',
  initialState: {
    message: '',
    isVisible: false,
  },
  reducers: {
    setToastMessage: (state, action) => {
      state.message = action.payload;
      state.isVisible = true;
    },
    setLogMessage: (state, action) => {
      state.message = action.payload;
      state.isVisible = true;
    },
    clearToastMessage: (state) => {
      state.message = '';
      state.isVisible = false;
    },
  },
});

export const { setToastMessage, clearToastMessage,setLogMessage } = ToastSlice.actions;
export default ToastSlice.reducer;
