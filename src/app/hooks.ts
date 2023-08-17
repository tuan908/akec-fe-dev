import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector
} from 'react-redux'
import { type TAppDispatch, type TAppState } from './types'

export const useAppDispatch: () => TAppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<TAppState> = useSelector
