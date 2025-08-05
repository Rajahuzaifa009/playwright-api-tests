import { test, expect } from '@playwright/test';

const BASE_URL = 'https://reqres.in';
const HEADERS = {
  'x-api-key': 'reqres-free-v1'
};

test('GET - Invalid User should return 404', async ({ request }) => {
  const res = await request.get(`${BASE_URL}/api/users/99999`, {
    headers: HEADERS
  });

  let body;
  try {
    body = await res.json();
  } catch (e) {
    body = null;
  }
  console.log('GET Response JSON:', body);

  expect(res.status()).toBe(404);
});
