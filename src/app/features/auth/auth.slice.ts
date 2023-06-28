import { authApi } from '@/app/services/auth.api'
import { TResponse } from '@/types'
import { TLogin } from '@/types/auth'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE_ACTION } from '../hydrate/hydrateAction'

const initialState: TLogin = {
  accessToken: '',
  refreshToken: '',
  username: ''
}

export const authSlice = createSlice({
  initialState,
  name: 'AUTH',
  reducers: {
    loggedOut(state) {
      return state
    },
    tokenReceived(state, { payload }) {
      state.accessToken = payload.accessToken
      state.refreshToken = payload.refreshToken
      return state
    }
  },
  extraReducers(builder) {
    builder.addCase(HYDRATE_ACTION, (state, action) => ({
      ...state,
      ...action.payload
    }))

    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (
        state,
        {
          payload: {
            data: { accessToken, refreshToken, username }
          }
        }: PayloadAction<TResponse<TLogin>>
      ) => {
        state.accessToken = accessToken
        state.refreshToken = refreshToken
        state.username = username
        return state
      }
    )
  }
})

export const { loggedOut, tokenReceived } = authSlice.actions
