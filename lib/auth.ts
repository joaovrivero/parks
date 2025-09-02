// lib/auth.ts
import { expo } from "@better-auth/expo"; // Import the server plugin
import { betterAuth } from "better-auth";

export const auth = betterAuth({
  // ...your other Better Auth options
  baseURL: "http://localhost:8081", // The base URL of your application server where the routes are mounted.
  plugins: [expo()], // Add the Expo server plugin
  emailAndPassword: {
    enabled: true,
  },
  // Add other configurations like trustedOrigins
  trustedOrigins: ["parks://"] // Replace "myapp" with your app's scheme
});