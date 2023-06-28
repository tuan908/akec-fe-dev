import { createAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import type { TAppState } from '@/app/store'

/**
 * @see https://github.com/kirill-konshin/next-redux-wrapper/issues/509
 */
export const HYDRATE_ACTION = createAction<TAppState>(HYDRATE)
