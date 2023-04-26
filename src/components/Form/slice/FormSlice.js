import { createSlice } from '@reduxjs/toolkit';
import { addElementDb } from '../../../backend/Firebase/firebase';


const initialState = {
  email: '',
  tel: '',
  address: '',
  city: '',
};

export const counterSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addUser: (state, action) =>
      addElementDb(action.payload)
    ,
    handleChangeForm: (state, action) => ({
      ...state,
      [action.payload.name]: action.payload.value,
    }),
    resetForm: () => initialState,

  },
});

export const { addUser, handleChangeForm, resetForm } = counterSlice.actions;

export const formValues = state => state.form;

export default counterSlice.reducer;
