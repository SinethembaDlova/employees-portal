import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: null,
  payload: undefined
};

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  extraReducers: builder => {
 
  }
});

export default employeesSlice.reducer;
