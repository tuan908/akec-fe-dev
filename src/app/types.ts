import { type ThunkAction, type Action } from '@reduxjs/toolkit'
import { makeStore } from './store'

export type TAppStore = ReturnType<typeof makeStore>

export type TAppState = ReturnType<TAppStore['getState']>

export type TAppDispatch = TAppStore['dispatch']

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  TAppState,
  unknown,
  Action
>