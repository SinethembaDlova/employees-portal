import React, { createContext, useState, useEffect } from 'react';
import { readEmployees, deleteEmployee } from '../api'



const EmployeeContext = createContext();

const EmployeeProvider = ({ children }) => {
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
    <EmployeeContext.Provider value={{
      employees,
      isLoading,
      deleteEmployee
      // createEmployee,
      // updateEmployee,
    }}>
      {children}
    </EmployeeContext.Provider>
  )
}

export { EmployeeContext, EmployeeProvider };
