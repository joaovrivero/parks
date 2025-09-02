// lib/auth-client.ts
import { expoClient } from "@better-auth/expo/client"; // Import the client plugin
import { createAuthClient } from "better-auth/react";
import * as SecureStore from "expo-secure-store";

export const authClient = createAuthClient({
  baseURL: "http://localhost:8081", // Your Better Auth backend URL
  plugins: [
    expoClient({
      scheme: "parks", // Your app's scheme (defined in app.json)
      storagePrefix: "myapp", // A prefix for storage keys
      storage: SecureStore, // Pass SecureStore for token storage
    })
  ]
});

// You can also export specific methods if you prefer:
// export const { signIn, signUp, useSession } = authClient;