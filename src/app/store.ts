import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
  autoBatchEnhancer
} from '@reduxjs/toolkit'
import { Context, createWrapper } from 'next-redux-wrapper'
import authSlice from '@/features/auth/auth.slice'
import carouselSlice from '@/features/ui/carousel/carousel.slice'
import productSlice from '@/features/product/product.slice'
import postSlice from '@/features/post/post.slice'
import api from './base.api'

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  [productSlice.name]: productSlice.reducer,
  [carouselSlice.name]: carouselSlice.reducer,
  [authSlice.name]: authSlice.reducer,
  [postSlice.name]: postSlice.reducer
})

const makeStore = (ctx: Context) =>
  configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: ctx
        }
      }).concat(api.middleware),
    enhancers: existingEnhancers =>
      existingEnhancers.concat(autoBatchEnhancer())
  })

export type TAppStore = ReturnType<typeof makeStore>

export type TAppState = ReturnType<TAppStore['getState']>

export type TAppDispatch = TAppStore['dispatch']

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  TAppState,
  unknown,
  Action
>

export const wrapper = createWrapper<TAppStore>(makeStore, {
  debug: true
})