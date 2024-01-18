const axios = require('axios');

test('Test API endpoint', async () => {
  // Set up the request parameters
  const requestData = {
    username: 'dickydompetkilat',
    password: 'Dicky123',
  };

  const requestConfig = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Make the HTTP request
  const response = await axios.post('https://ws-dk.dompetkilat.dev/v1/admin/login', requestData, requestConfig);

  // Validate the response
  expect(response.status).toBe(200); // Adjust this status code based on your API's response status
  expect(response.data).toEqual({
    status: '00',
    message: 'Success',
    data: {
      access_code: expect.any(String),
      username: 'dickydompetkilat',
    },
  });
});
