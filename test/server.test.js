import axios from 'axios';

const url = 'http://localhost:3000/';

describe('test server connection', () => {
  test('it should return a status of 200', async () => {
    const res = await axios.get(url);
    console.log(res.status);
    expect(res.status).toBe(200);
  });
});
