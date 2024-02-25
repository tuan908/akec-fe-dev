import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from './base.api'
import { rootReducer } from './reducer'

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddlewares =>
      getDefaultMiddlewares().concat(baseApi.middleware),
    enhancers: getDefaultEnhancers => getDefaultEnhancers()
  })
}

export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore['getState']>

export type AppDispatch = AppStore['dispatch']
