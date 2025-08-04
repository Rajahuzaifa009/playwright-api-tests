import { test, expect } from '@playwright/test';

const BASE_URL = 'https://reqres.in';
const HEADERS = {
  'x-api-key': 'reqres-free-v1'
};

test('GET - Invalid User should return 404', async ({ request }) => {
  const res = await request.get(`${BASE_URL}/api/users/99999`, {
    headers: HEADERS
  });

  expect(res.status()).toBe(404);
});
