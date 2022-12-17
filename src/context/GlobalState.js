import React, { createContext, useReducer} from 'react';
import AppReducer  from './AppReducer';


const initialState = {
  employees: []
};


const GlobalContext = createContext(initialState);

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const createEmployee = (employee) => {
    dispatch({
      type: 'CREATE_EMPLOYEE',
      payload: employee
    })
  }

  const updateEmployee = (employee) => {
    dispatch({
      type: 'UPDATE_EMPLOYEE',
      payload: employee
    })
  }
  const deleteEmployee = (_id) => {
    dispatch({
      type: 'DELETE_EMPLOYEE',
      payload: _id
    })
  }


  return (
    <GlobalContext.Provider value={{
      employees: state.employees,
      createEmployee,
      updateEmployee,
      deleteEmployee
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export { GlobalContext, GlobalProvider };
