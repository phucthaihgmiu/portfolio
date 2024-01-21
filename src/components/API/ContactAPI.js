// Contact API.js
import axios from 'axios';

const API_BASE_URL = 'https://gwzjy4753a.execute-api.us-east-1.amazonaws.com/prod';

const addContact = async (contact) => {
    console.log('addContact: ', contact);
  const response = await axios.post(`${API_BASE_URL}/contacts`, contact);
  return response;
};

export { addContact };
