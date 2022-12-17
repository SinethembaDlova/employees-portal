import { createAsyncThunk } from '@reduxjs/toolkit';
import { getEmployees } from '../../api';

const getEmployeesThunk = createAsyncThunk(
    'employees/getAll',
    async () => {
      return getEmployees();
    } 
)

export default getEmployeesThunk;