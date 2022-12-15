import { combineReducers } from 'redux';
import employeesSlice from './employees';

const reducer = combineReducers({
  employees: employeesSlice
});

export default reducer;
