import { test, expect } from '@playwright/test';
import testData from '../testData.json';

const BASE_URL = 'https://reqres.in';
const HEADERS = {
  'x-api-key': 'reqres-free-v1'
};

test('POST → GET: Chaining user creation and fetch', async ({ request }) => {
  const createRes = await request.post(`${BASE_URL}/api/users`, {
    headers: HEADERS,
    data: testData.createUser
  });

  expect(createRes.status()).toBe(201);

  const createBody = await createRes.json();
  const userId = createBody.id;

  console.log('Created User ID:', userId);
  console.log('POST Response JSON:', createBody);

  const getRes = await request.get(`${BASE_URL}/api/users/${userId}`, {
    headers: HEADERS
  });

  console.log('GET status:', getRes.status());
  const getBody = await getRes.json();
  console.log('GET Response JSON:', getBody);

  expect([200, 404]).toContain(getRes.status());
});
