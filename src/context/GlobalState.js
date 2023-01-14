import React, { createContext, useState, useEffect } from 'react';
// import AppReducer  from './AppReducer';
import { readEmployees, deleteEmployee } from '../api'



const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [employees, updateEmployees] = useState([]);
  const [isLoading, updateIsLoading] = useState(false)

  useEffect(() => {
    updateIsLoading(true);
    readEmployees().then((results) =>{
      updateEmployees(results)
    })
    updateIsLoading(false);
  }, [])

  // const createEmployee = (employee) => {
  //   dispatch({
  //     type: 'CREATE_EMPLOYEE',
  //     payload: employee
  //   })
  // }

  // const updateEmployee = (employee) => {
  //   dispatch({
  //     type: 'UPDATE_EMPLOYEE',
  //     payload: employee
  //   })
  // }
  const deleteEmployee = (id) => {
    deleteEmployee(id)
  }


  return (
    <GlobalContext.Provider value={{
      employees,
      isLoading,
      deleteEmployee
      // createEmployee,
      // updateEmployee,
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export { GlobalContext, GlobalProvider };
