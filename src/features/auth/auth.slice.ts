import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/constant'
import type { TLogin } from '@/types'
import { type TRefreshTokenResponse } from '@/types/auth'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
import { SliceName } from '../feature.constant'
import { HYDRATE_ACTION } from '../hydrate/hydrate.action'

const initialState: TLogin = {
  accessToken: '',
  refreshToken: '',
  username: ''
}

const authSlice = createSlice({
  initialState,
  name: SliceName.Auth,
  reducers: {
    logOut: state => state,
    tokenReceived(
      state,
      {
        payload: { accessToken, refreshToken }
      }: PayloadAction<TRefreshTokenResponse>
    ) {
      Cookies.set(ACCESS_TOKEN, accessToken)
      Cookies.set(REFRESH_TOKEN, refreshToken)
      return state
    }
  },
  extraReducers(builder) {
    builder.addCase(HYDRATE_ACTION, (state, action) => ({
      ...state,
      auth: action.payload.auth
    }))
  }
})

export default authSlice
export const { logOut, tokenReceived } = authSlice.actions