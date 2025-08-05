import { test, expect } from '@playwright/test';

const BASE_URL = 'https://reqres.in';
const HEADERS = {
  'x-api-key': 'reqres-free-v1'
};

const users = [
  { name: 'Yousaf', job: 'Developer' },
  { name: 'Huzaifa', job: 'Designer' },
  { name: 'Rizwan', job: 'Manager' }
];

for (const user of users) {
  test(`POST - Create user: ${user.name}`, async ({ request }) => {
    const res = await request.post(`${BASE_URL}/api/users`, {
      headers: HEADERS,
      data: user
    });

    const body = await res.json();
    console.log('POST Response JSON:', body);

    expect(res.status()).toBe(201);
    expect(body.name).toBe(user.name);
    expect(body.job).toBe(user.job);

    console.log(`✅ Created: ${body.name} as ${body.job}`);
  });
}
