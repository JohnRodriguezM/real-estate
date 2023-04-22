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
      addElementDb({
        email: action.payload.email,
        tel: action.payload.tel,
        address: action.payload.address,
        city: action.payload.city,
      })
    ,
    handleChangeForm: (state, action) => {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      }
    },
    resetForm: () => initialState,

  },
});

export const { addUser, handleChangeForm, resetForm } = counterSlice.actions;

export const formValues = state => state.form;
//export const historyMax = state => state.counter.historyMax;

export default counterSlice.reducer;
