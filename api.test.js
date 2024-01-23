const axios = require('axios');
const testData = require('./data');
const config = require('./config');

test('Test API endpoint', async () => {
  // Set up the request parameters
  const {username,password} = testData.login;
  const requestData={
    username,
    password,
  };
  
  if (!requestData.username || !requestData.password) {
    const emptyFieldResponse = {
      status: '98',
      message: 'Invalid Request Format',
      data: {},
    };

    // Make sure to use the appropriate API for empty fields
    expect(response.status).toBe(200); // Assuming status code for invalid request is 200
    expect(response.data).toEqual(emptyFieldResponse);
    return;
  }

  const requestConfig = {
    headers: config.requestHeaders,
  };

  // Make the HTTP request
  const response = await axios.post(config.endpointLogin, requestData, requestConfig);

  // Validate the response
  expect(response.status).toBe(200); // Adjust this status code based on your API's response status
  expect(response.data).toEqual({
    status: '00',
    message: 'Success',
    data: {
      access_code: expect.any(String),
      username: requestData.username,
    },
  });
});
