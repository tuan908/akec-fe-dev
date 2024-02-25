import { ACCESS_TOKEN, REFRESH_TOKEN, SliceName } from '@/constants'
import { Token, type LoginData } from '@/lib/types'
import { type PayloadAction, type WithSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
import { createAppSlice } from '../base.slice'
import { rootReducer } from '../reducer'

const initialState: LoginData = {
  accessToken: '',
  refreshToken: '',
  username: ''
}

const authSlice = createAppSlice({
  initialState,
  name: SliceName.Auth,
  reducers: {
    logOut: state => state,
    tokenReceived(
      _,
      { payload: { accessToken, refreshToken } }: PayloadAction<Token>
    ) {
      Cookies.set(ACCESS_TOKEN, accessToken)
      Cookies.set(REFRESH_TOKEN, refreshToken)
    }
  }
})

declare module '../reducer' {
  export interface LazyLoadedSlices extends WithSlice<typeof authSlice> {}
}

const withAuth = rootReducer.inject(authSlice)

export const isAuth = withAuth.selector(x => x.auth)
export const { logOut, tokenReceived } = authSlice.actions
