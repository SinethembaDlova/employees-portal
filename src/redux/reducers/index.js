import { combineReducers } from 'redux';
import employeesSlice from './employees';

const reducer = combineReducers({
  employeesFilter: employeesSlice
});

export default reducer;
