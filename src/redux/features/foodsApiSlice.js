import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const foodsApi = createApi({
  reducerPath: 'foodsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/foods' }),
  endpoints: (builder) => ({
    getAllFoods: builder.query({
      query: () => '/all-foods',
    }),
  }),
})

export const { useGetAllFoodsQuery } = foodsApi
