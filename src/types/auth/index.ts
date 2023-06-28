export type TLogin = {
  accessToken: string
  refreshToken: string
  username: string
}

export type TRefreshTokenResponse = Omit<TLogin, 'username'>

export type TLoginRequest = {
  username: string
  password: string
}
