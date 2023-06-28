import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { TAppDispatch, TAppState } from './store'

export const useAppDispatch: () => TAppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<TAppState> = useSelector
