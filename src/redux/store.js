import { configureStore } from '@reduxjs/toolkit'
import { foodsApi } from '../redux/features/foodsApiSlice'
export const store = configureStore({
  reducer: {
    [foodsApi.reducerPath]: foodsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(foodsApi.middleware),
})

export default store;