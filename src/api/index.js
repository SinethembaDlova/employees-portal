
import axios from 'axios';

const URL = endpoint => {
  const default_endpoint = process.env.REACT_APP_API;
  return default_endpoint || endpoint;
}

const createEmployee = async (body) => {
  const path = `${URL()}/employees`;
  const results = await axios.post(path, body);
  return results?.data;
}

const readEmployees = async () => {
  const path = `${URL()}/employees`;
  const results = await axios.get(path);
  return results?.data;
  
}

const readEmployee = async(id) => {
	const path = `${URL()}/employees/${id}`;
	const results = await axios.get(path);
	return results?.data;
}

const updateEmployee = async(id, body) => {
  const path = `${URL()}/employees${id}`;
  const results = await axios.update(path, body);
  return results?.data;
}

const deleteEmployee = async (id) => {
	const path = `${URL()}/employees/${id}`;
	const res = await axios.delete(path);
	return res?.data;
}

export { createEmployee, readEmployees, readEmployee, updateEmployee, deleteEmployee } 