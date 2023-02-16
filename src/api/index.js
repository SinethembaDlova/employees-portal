import axios from 'axios';

const URL = (endpoint) => {
  const default_endpoint = process.env.REACT_APP_API;
  return default_endpoint || endpoint;
};

const createEmployee = async (body) => {
  const path = `${URL()}/employees`;
  const results = await axios.post(path, body);
  return results;
};

const readEmployees = async () => {
  const path = `${URL()}/employees`;
  const results = await axios.get(path);
  return results;
};

const readEmployee = async (id) => {
  const path = `${URL()}/employees/${id}`;
  const results = await axios.get(path);
  return results;
};

const updateEmployee = async (id, body) => {
  const path = `${URL()}/employees/${id}`;
  const results = await axios.put(path, body);
  return results;
};

const deleteEmployee = async (id) => {
  const path = `${URL()}/employees/${id}`;
  const results = await axios.delete(path);
  return results;
};

export { createEmployee, readEmployees, readEmployee, updateEmployee, deleteEmployee };
