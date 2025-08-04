import { test, expect } from '@playwright/test';

const BASE_URL = 'https://reqres.in';
const HEADERS = {
  'x-api-key': 'reqres-free-v1'
};

test('GET - List Users (Pagination)', async ({ request }) => {
  const res = await request.get(`${BASE_URL}/api/users?page=1&per_page=2`, {
    headers: HEADERS
  });
  console.log('GET Status:', res.status());
  console.log('GET Body:', await res.text());
  expect(res.status()).toBe(200);
});

test('POST - Create User', async ({ request }) => {
  const res = await request.post(`${BASE_URL}/api/users`, {
    headers: HEADERS,
    data: {
      name: 'wahaaj',
      job: 'QA Engineer'
    }
  });
  console.log('POST Status:', res.status());
  console.log('POST Body:', await res.text());
  expect(res.status()).toBe(201);
});

test('PUT - Update User', async ({ request }) => {
  const res = await request.put(`${BASE_URL}/api/users/2`, {
    headers: HEADERS,
    data: {
      name: 'wahaaj',
      job: 'Senior QA'
    }
  });
  console.log('PUT Status:', res.status());
  console.log('PUT Body:', await res.text());
  expect(res.status()).toBe(200);
});
