
import axios from 'axios';
import apiUtilities from '../../utilities/api';

const createEmployee = async (body) => {
  const path = `${apiUtilities.url()}/employees`;

  try {
    const results = await axios.post(path, body);
    return results;
  } catch (error) {
    throw new Error(error);
  }
}
const getEmployees = async () => {
  const path = `${apiUtilities.url()}/employees`;

  try {
    const results = await axios.get(path, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return results;
  } catch (error) {
      throw new Error(error);
  }
}

const getEmployee = async(id) => {
	const path = `${apiUtilities.url()}/employees/${id}`;

	try {
		const res = await axios.get(path, {
			headers: {
				'Content-Type': 'application/json'
			}
		});
		return res;
	} catch (error) {
		throw new Error(error);
	}
    
}

const updateEmployee = async(id, body) => {
  const path = `${apiUtilities.url()}/employees`;

  try {
    const results = await axios.post(path, body);
    return results;
  } catch (error) {
    throw new Error(error);
  }
}

const deleteEmployees = async (id) => {
	const path = `${apiUtilities.url()}/employees/${id}`;

	try {
		const res = await axios.delete(path, {
			headers: {
				'Content-Type': 'application/json'
			}
		});
		return res;
	} catch (error) {
		throw new Error(error);
	} 
}

export { createEmployee, getEmployees, getEmployee, updateEmployee, deleteEmployees}