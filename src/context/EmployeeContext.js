import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  createEmployee,
  readEmployees,
  readEmployee,
  updateEmployee as putEmployee,
  deleteEmployee,
} from '../api';

const EmployeeContext = createContext();

export const useEmployees = () => {
  const context = useContext(EmployeeContext);
  if (!context) throw new Error('Post Provider is missing');
  return context;
};

function EmployeeProvider({ children }) {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const results = await readEmployees();
      setEmployees(results?.data);
      setIsLoading(false);
    })();
  }, []);

  const addEmployee = async (employee) => {
    try {
      setIsLoading(true);
      const results = await createEmployee(employee);
      console.log('ewe: ', results?.data);
      setEmployees([...employees, results?.data]);
      return setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const getEmployee = async (id) => {
    try {
      setIsLoading(true);
      const results = await readEmployee(id);
      setIsLoading(false);
      return results?.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateEmployee = async (id, employee) => {
    try {
      setIsLoading(true);
      const results = await putEmployee(id, employee);
      setEmployees(employees.map((employee) => (employee._id === id ? results.data : employee)));
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const removeEmployee = async (id) => {
    setIsLoading(true);
    const results = await deleteEmployee(id);
    if (results.status === 200) {
      setEmployees(employees.filter((employee) => employee._id !== id));
    }
    setIsLoading(false);
  };

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        isLoading,
        addEmployee,
        getEmployee,
        removeEmployee,
        updateEmployee,
      }}>
      {children}
    </EmployeeContext.Provider>
  );
}

EmployeeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { EmployeeContext, EmployeeProvider };
