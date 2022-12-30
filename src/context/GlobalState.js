import React, { createContext, useState, useEffect } from 'react';
// import AppReducer  from './AppReducer';
import { getEmployees } from '../api'



const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [employees, updateEmployees] = useState([]);
  const [isLoading, updateIsLoading] = useState(false)

  useEffect(() => {
    updateIsLoading(true);
    getEmployees().then((results) =>{
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
  // const deleteEmployee = (id) => {
  //   dispatch({
  //     type: 'DELETE_EMPLOYEE',
  //     payload: id
  //   })
  // }


  return (
    <GlobalContext.Provider value={{
      employees,
      isLoading
      // createEmployee,
      // updateEmployee,
      // deleteEmployee
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export { GlobalContext, GlobalProvider };
