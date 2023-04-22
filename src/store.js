import { configureStore } from '@reduxjs/toolkit';
import formReducer from './components/Form/slice/FormSlice';

export const store = configureStore({
  reducer: {
    form: formReducer,
  },
});