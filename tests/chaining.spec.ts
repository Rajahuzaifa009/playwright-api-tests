import { test, expect } from '@playwright/test';

const BASE_URL = 'https://reqres.in';
const HEADERS = {
  'x-api-key': 'reqres-free-v1'
};

test('POST → GET: Chaining user creation and fetch', async ({ request }) => {
  // Step 1: Create user (POST)
  const createRes = await request.post(`${BASE_URL}/api/users`, {
    headers: HEADERS,
    data: {
      name: 'Wahaaj',
      job: 'QA Engineer'
    }
  });

  expect(createRes.status()).toBe(201);

  const createBody = await createRes.json();
  const userId = createBody.id;

  console.log('Created User ID:', userId);
  console.log('POST Response JSON:', createBody);

  // Step 2: Try to GET the same user (will likely be 404 due to fake API)
  const getRes = await request.get(`${BASE_URL}/api/users/${userId}`, {
    headers: HEADERS
  });

  console.log('GET status:', getRes.status());
  const getBody = await getRes.json();
  console.log('GET Response JSON:', getBody);

  // Check status (may be 404 due to non-persistent API)
  expect([200, 404]).toContain(getRes.status());
});
