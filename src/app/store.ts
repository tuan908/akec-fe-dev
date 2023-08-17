import { currentEnvironment } from '@/util'
import { autoBatchEnhancer, configureStore } from '@reduxjs/toolkit'
import { createWrapper, type Context } from 'next-redux-wrapper'
import { apiMiddleware } from './base.api'
import rootReducer from './root.reducer'
import { type TAppStore } from './types'

export const makeStore = (ctx: Context) =>
  configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: ctx
        }
      }).concat(apiMiddleware),
    enhancers: existingEnhancers =>
      existingEnhancers.concat(autoBatchEnhancer())
  })

export const wrapper = createWrapper<TAppStore>(makeStore, {
  debug: currentEnvironment === `development` || currentEnvironment === `test`
})