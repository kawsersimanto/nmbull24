import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie"; // Import js-cookie

export const baseApi = createApi({
  reducerPath: "baseApi", // The key for this API in the Redux store
  baseQuery: fetchBaseQuery({
    baseUrl: "https://nmbull.vercel.app/api/v1", // Replace with your API's base URL
    prepareHeaders: (headers) => {
      const token = Cookies.get("token"); // Retrieve the token from cookies
      console.log("Prepare Headers Called"); // Log when prepareHeaders is called
      if (token) {
        console.log("Authorization header set with token:", token); // Log token
        headers.set("Authorization", `${token}`);
      } else {
        console.log("No token found");
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: ["logIn", "member","plan"],
});

// Export hooks for usage in functional components
export default baseApi;
