import { makeRequest } from '../utils/request';

const createEmployee = (employee) => makeRequest('post', '/employees', employee);
const readEmployees = () => makeRequest('get', '/employees');
const readEmployee = (id) => makeRequest('get', `/employees/${id}`);
const updateEmployee = (id, employee) => makeRequest('put', `/employees/${id}`, employee);
const deleteEmployee = (id) => makeRequest('delete', `/employees/${id}`);

export { createEmployee, readEmployees, readEmployee, updateEmployee, deleteEmployee };
