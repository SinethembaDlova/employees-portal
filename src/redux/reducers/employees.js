import { createSlice } from '@reduxjs/toolkit';
import getEmployeesThunk from '../thunks/employees';

const initialState = {
  employees: []
};

const employeesSlice = createSlice({
  name: 'employeesFilter',
  initialState,
  extraReducers: builder => {
    builder.addCase(
      getEmployeesThunk().pending,
      state => {
        state.status = 'loading';
      }
    ),
      builder.addCase(
        getEmployeesThunk().fulfilled,
        (state, { payload }) => {
          state.payload = payload.data;
          state.status = 'success';
        }
      ),
      builder.addCase(
        getEmployeesThunk().rejected,
        (state, { error }) => {
          state.status = 'failed';
          state.error = error;
        }
      );
  }
});

export const { setEmployees} = employeesSlice.actions;
export default employeesSlice.reducer;
