import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = constApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500" }),
  tagTypes: ["Note", "User"],
  endpoints: (builder) => ({}),
});
