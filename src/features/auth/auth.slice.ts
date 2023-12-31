import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { TLogin } from '@/types'
import { HYDRATE_ACTION } from '../hydrate/hydrate.action'
import Cookies from 'js-cookie'
import { TRefreshTokenResponse } from '@/types/auth'
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/constant'
import { SliceName } from '../feature.constant'

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
      ...action.payload
    }))
  }
})

export default authSlice
export const { logOut, tokenReceived } = authSlice.actions
