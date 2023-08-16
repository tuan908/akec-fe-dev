import authSlice from '@/features/auth/auth.slice'
import carouselSlice from '@/features/ui/carousel/carousel.slice'
import orderSlice from '@/features/order/order.slice'
import postSlice from '@/features/post/post.slice'
import api from './base.api'
import { combineReducers } from '@reduxjs/toolkit'

export default combineReducers({
  [api.reducerPath]: api.reducer,
  [orderSlice.name]: orderSlice.reducer,
  [carouselSlice.name]: carouselSlice.reducer,
  [authSlice.name]: authSlice.reducer,
  [postSlice.name]: postSlice.reducer
})