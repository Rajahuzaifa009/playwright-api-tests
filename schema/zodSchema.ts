// schema/zodSchemas.ts
import { z } from 'zod';

export const createUserResponseSchema = z.object({
  name: z.string(),
  job: z.string(),
  id: z.string(),
  createdAt: z.string(),
  number: z.number().optional() // Optional field for additional data
});
