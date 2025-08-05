import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

const BASE_URL = process.env.BASE_URL!;
const HEADERS = {
  'x-api-key': process.env.X_API_KEY!
};

test('GET - List Users (Pagination)', async ({ request }) => {
  const res = await request.get(`${BASE_URL}/api/users?page=1&per_page=2`, {
    headers: HEADERS
  });
  console.log('GET Status:', res.status());
  const body = await res.json();
  console.log('GET Response JSON:', body);
  expect(res.status()).toBe(200);
});

test('POST - Create User', async ({ request }) => {
  const res = await request.post(`${BASE_URL}/api/users`, {
    headers: HEADERS,
    data: {
      name: 'Huzaifa',
      job: 'QA Engineer'
    }
  });
  console.log('POST Status:', res.status());
  const body = await res.json();
  console.log('POST Response JSON:', body);
  expect(res.status()).toBe(201);
});

test('PUT - Update User', async ({ request }) => {
  const res = await request.put(`${BASE_URL}/api/users/2`, {
    headers: HEADERS,
    data: {
      name: 'Rizwan',
      job: 'Senior QA'
    }
  });
  console.log('PUT Status:', res.status());
  const body = await res.json();
  console.log('PUT Response JSON:', body);
  expect(res.status()).toBe(200);
});
