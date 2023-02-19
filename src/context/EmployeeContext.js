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
  const [notify, setNotify] = useState({
    variant: null,
    message: null,
  });

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const results = await readEmployees();
        setEmployees(results?.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
        setNotify({
          variant: 'error',
          message: 'Oops! Something went wrong when trying to fetch employees. Please try again.',
        });
        setTimeout(() => {
          setNotify({ variant: null, message: null });
        }, 5000);
      }
    })();
  }, []);

  const addEmployee = async (employee) => {
    try {
      setIsLoading(true);
      const createdEmployee = await createEmployee(employee);
      setEmployees([...employees, createdEmployee?.data]);
      setIsLoading(false);
      setNotify({
        variant: 'success',
        message: `Employee successfully created.`,
      });
      setTimeout(() => {
        setNotify({ variant: null, message: null });
      }, 5000);
      return createdEmployee?.data;
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setNotify({
        variant: 'error',
        message: 'Oops! Something went wrong when trying to create employee. Please try again.',
      });
      setTimeout(() => {
        setNotify({ variant: null, message: null });
      }, 5000);
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
      setNotify({
        variant: 'error',
        message: 'Oops! Something went wrong when trying to fetch employee. Please try again.',
      });
      setTimeout(() => {
        setNotify({ variant: null, message: null });
      }, 5000);
    }
  };

  const updateEmployee = async (id, employee) => {
    try {
      setIsLoading(true);
      const results = await putEmployee(id, employee);
      setEmployees(employees.map((employee) => (employee._id === id ? results.data : employee)));
      setIsLoading(false);
      setNotify({
        variant: 'success',
        message: 'Employee successfully updated',
      });
      setTimeout(() => {
        setNotify({ variant: null, message: null });
      }, 5000);
    } catch (error) {
      console.error(error);
      setNotify({
        variant: 'error',
        message: 'Oops! Something went wrong when trying to update employee. Please try again.',
      });
      setTimeout(() => {
        setNotify({ variant: null, message: null });
      }, 5000);
    }
  };

  const removeEmployee = async (id) => {
    try {
      setIsLoading(true);
      const results = await deleteEmployee(id);
      if (results.status === 200) {
        setEmployees(employees.filter((employee) => employee._id !== id));
      }
      setIsLoading(false);
      setNotify({
        variant: 'success',
        message: 'Employee Successfully deleted.',
      });
      setTimeout(() => {
        setNotify({ variant: null, message: null });
      }, 5000);
    } catch (error) {
      console.error(error);
      setNotify({
        variant: 'error',
        message: 'Oops! Something went wrong when trying to delete employee. Please try again.',
      });
      setTimeout(() => {
        setNotify({ variant: null, message: null });
      }, 5000);
    }
  };

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        isLoading,
        notify,
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
