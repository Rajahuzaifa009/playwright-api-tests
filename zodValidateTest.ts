// tests/zodValidateTest.ts
import { userSchema } from "./schema/userSchema";
import { z } from "zod";

// ✅ Example: sahi data
const input = {
  name: "Huzaifa Raja",
  email: "huzaifaaqeel23@gmail.com",
  age: 25,
};

// ✅ Validation check
const result = userSchema.safeParse(input);

// ✅ Handle result
if (!result.success) {
  console.log("❌ Invalid Data:");
  console.log(result.error.format());  // structured error
} else {
  console.log("✅ Valid Data:");
  console.log(result.data);  // valid data object
}
