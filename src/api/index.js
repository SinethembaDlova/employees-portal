
import axios from 'axios';

const URL = endpoint => {
  const default_endpoint = process.env.REACT_APP_API;
  return default_endpoint || endpoint;
}

const postEmployee = async (body) => {
  const path = `${URL()}/employees`;

  try {
    const results = await axios.post(path, body);
    return results?.data?.data;
  } catch (error) {
    throw new Error(error);
  }
}
const getEmployees = async () => {
  const path = `${URL()}/employees`;
	
  try {
    const results = await axios.get(path, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return results?.data?.data;
  } catch (error) {
    throw new Error(error);
  }
}

const getEmployee = async(id) => {
	const path = `${URL()}/employees/${id}`;

	try {
		const results = await axios.get(path, {
			headers: {
				'Content-Type': 'application/json'
			}
		});
		return results?.data?.data;
	} catch (error) {
		throw new Error(error);
	}
    
}

const updateEmployee = async(id, body) => {
  const path = `${URL()}/employees${id}`;

  try {
    const results = await axios.update(path, body);
    return results?.data?.data;
  } catch (error) {
    throw new Error(error);
  }
}

const deleteEmployee = async (id) => {
	const path = `${URL()}/employees/${id}`;

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

export { postEmployee, getEmployees, getEmployee, updateEmployee, deleteEmployee}