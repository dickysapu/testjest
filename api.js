const axios = require('axios');

const apiUrl = 'https://ws-dk.dompetkilat.dev/v1/admin/login';

async function login(username, password) {
  try {
    const requestData = {
      username,
      password,
    };

    const requestConfig = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await axios.post(apiUrl, requestData, requestConfig);

    return response.data;
  } catch (error) {
    // You might want to handle errors here
    throw error;
  }
}

module.exports = {
  login,
};
