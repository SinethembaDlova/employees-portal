import axios from 'axios';

const apiUrl = (endpoint = process.env.REACT_APP_API) => endpoint;

const makeRequest = async (method, path, data) => {
  try {
    const API_BASE_URL = apiUrl();
    const response = await axios[method](`${API_BASE_URL}${path}`, data);
    return response?.data;
  } catch (error) {
    throw new Error(`API request failed: ${error.message}`);
  }
};

export { apiUrl, makeRequest };
