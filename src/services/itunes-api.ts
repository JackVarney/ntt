import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ItunesApiResponse } from "../types/ItunesResponse";

export const itunesAPI = createApi({
  reducerPath: "itunesAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api",
  }),
  endpoints: (builder) => ({
    getItunesItems: builder.query<
      ItunesApiResponse,
      { searchTerm: string; limit: number }
    >({
      query: ({ searchTerm, limit }) => `?term=${searchTerm}&limit=${limit}`,
    }),
  }),
});

export const { useGetItunesItemsQuery } = itunesAPI;
