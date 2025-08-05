import test, { expect } from "playwright/test";
import { createUserResponseSchema } from "../schema/zodSchema";
import testData from '../testData.json';
import dotenv from 'dotenv';

dotenv.config(); // 👈 this loads .env variables

const HEADERS = {
  'x-api-key': process.env.X_API_KEY!
};

test('POST - Create User', async ({ request }) => {
    console.log('BASE_URL:', process.env.BASE_URL!);
    const res = await request.post(`${process.env.BASE_URL!}/api/users`, {
    headers: HEADERS,
    data: testData.createUser
    });

    console.log('POST Status:', res.status());
    const body = await res.json();
    console.log('POST Body:', body);

    // ✅ Zod validation
    const result = createUserResponseSchema.safeParse(body);

    if (!result.success) {
    console.error('❌ Zod Validation Failed:', result.error.format());
    } else {
    console.log('✅ Zod Validation Passed');
    }

    expect(result.success).toBe(true); // Fails test if schema doesn't match
    expect(res.status()).toBe(201); // Status check
});
