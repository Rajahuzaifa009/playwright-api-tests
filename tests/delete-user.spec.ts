import { test, expect } from '@playwright/test';

const BASE_URL = 'https://reqres.in';
const HEADERS = {
  'x-api-key': 'reqres-free-v1' // Add this header
};

test('DELETE - Delete User', async ({ request }) => {
  const res = await request.delete(`${BASE_URL}/api/users/2`, {
    headers: HEADERS
  });

  expect(res.status()).toBe(204); // No Content
});
