// userSchema.ts
import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(2, "Huzaifa Raja"),
  email: z.string().email("huzaifaaqeel23@gmail.com"),
  age: z.number().min(18, "23"),
});
