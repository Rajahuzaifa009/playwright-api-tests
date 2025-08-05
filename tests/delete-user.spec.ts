import { test, expect } from '@playwright/test';
import testData from '../testData.json';

const BASE_URL = 'https://reqres.in';
const HEADERS = {
  'x-api-key': 'reqres-free-v1'
};

test('DELETE - Delete User', async ({ request }) => {
  const res = await request.delete(`${BASE_URL}/api/users/2`, {
    headers: HEADERS,
    data: testData.updateUser
  });

  let body;
  try {
    body = await res.json();
  } catch (e) {
    body = null;
  }
  console.log('DELETE Response JSON:', body);

  expect(res.status()).toBe(204);
});
